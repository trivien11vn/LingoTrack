"use server"

import { auth, currentUser } from "@clerk/nextjs"

import { stripe } from "@/lib/stripe"
import { absoluteUrl } from "@/lib/utils"

import { getUserSubscription } from "@/db/queries"

const returnUrl = absoluteUrl("/shop")

export const createStripeUrl = async () => {
    const { userId } = await auth()
    const user = await currentUser()

    if (!userId || !user) {
        throw new Error("Unauthorized")
    }

    const userSubscription = await getUserSubscription()

    if (userSubscription && userSubscription.stripeCustomerId) {
        const stripeSession = await stripe.billingPortal.sessions.create({
            customer: userSubscription.stripeCustomerId,
            return_url: returnUrl
        })

        return {
            data: stripeSession.url
        }
    }

    const stripeSession = await stripe.checkout.sessions.create({
        mode: "subscription",
        payment_method_types: ["card"],
        customer_email: user.emailAddresses[0].emailAddress,
        line_items: [
            {
                quantity: 1,
                price_data: {
                    currency: "USD",
                    product_data: {
                        name: "Lingo Premium",
                        description: "Get unlimited hearts and access to all features"
                    },
                    unit_amount: 500, // $5.00
                    recurring: {
                        interval: "month"
                    }
                }
            }
        ],
        // Save the app user ID so the Stripe webhook can match this checkout back to the right user.
        metadata: {
            userId
        },
        success_url: returnUrl,
        cancel_url: returnUrl
    })

    return {
        data: stripeSession.url
    }
}