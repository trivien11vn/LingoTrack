import { auth } from "@clerk/nextjs"

const allowedIds = [
    "user_3IzyLEip0IXkixT9cSUBMq1xyCa"
]

export const isAdmin = () => {
    const { userId } = auth()

    if (!userId) {
        return false
    }

    return allowedIds.includes(userId || "")
}