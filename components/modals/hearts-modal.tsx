"use client"

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { useHeartModal } from "@/app/store/use-heart-modal"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

export const HeartsModal = () => {
    const router = useRouter()
    const [isClient, setIsClient] = useState(false) // Trạng thái kiểm tra môi trường chạy
    const { isOpen, close } = useHeartModal()

    useEffect(() => {
        setIsClient(true) // Đánh dấu đã chuyển sang Client sau lần mount đầu tiên
    }, [])

    if (!isClient) {
        return null // Trả về null ở Server và lần render đầu để tránh lỗi Hydration Error
    }

    const onClick = () => {
        close()
        router.push("/store")
    }


    return (
        <Dialog open={isOpen} onOpenChange={close}>
            <DialogContent className="max-w-md">
                <DialogHeader>
                    <div className="flex items-center w-full justify-center mb-5">
                        <Image
                            src="/mascot_bad.svg"
                            alt="Mascot"
                            width={80}
                            height={80}
                        />
                    </div>
                    <DialogTitle className="text-center font-bold text-2xl">
                        You ran out of hearts!
                    </DialogTitle>
                    <DialogDescription className="text-center text-base">
                        Get Pro for unlimited hearts and more features.
                    </DialogDescription>
                </DialogHeader>
                <DialogFooter className="mt-4">
                    <div className="flex flex-col gap-y-4 w-full">
                        <Button
                            variant="primary"
                            className="w-full"
                            size="lg"
                            onClick={onClick}
                        >
                            Get unlimited hearts
                        </Button>
                        <Button
                            variant="primaryOutline"
                            className="w-full"
                            size="lg"
                            onClick={close}
                        >
                            No thanks
                        </Button>
                    </div>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}