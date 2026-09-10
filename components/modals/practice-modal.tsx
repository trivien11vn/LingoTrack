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
import { usePracticeModal } from "@/app/store/use-practice-modal"
import Image from "next/image"
import { useEffect, useState } from "react"

export const PracticeModal = () => {
    const [isClient, setIsClient] = useState(false) // Trạng thái kiểm tra môi trường chạy
    const { isOpen, close } = usePracticeModal()

    useEffect(() => {
        setIsClient(true) // Đánh dấu đã chuyển sang Client sau lần mount đầu tiên
    }, [])

    if (!isClient) {
        return null // Trả về null ở Server và lần render đầu để tránh lỗi Hydration Error
    }

    return (
        <Dialog open={isOpen} onOpenChange={close}>
            <DialogContent className="max-w-md">
                <DialogHeader>
                    <div className="flex items-center w-full justify-center mb-5">
                        <Image
                            src="/heart.svg"
                            alt="Heart"
                            width={100}
                            height={100}
                        />
                    </div>
                    <DialogTitle className="text-center font-bold text-2xl">
                        Practice lesson
                    </DialogTitle>
                    <DialogDescription className="text-center text-base">
                        Use practice lessons to gain more hearts and improve your skills.
                    </DialogDescription>
                </DialogHeader>
                <DialogFooter className="mt-4">
                    <div className="flex flex-col gap-y-4 w-full">
                        <Button
                            variant="primary"
                            className="w-full"
                            size="lg"
                            onClick={close}
                        >
                            I understand
                        </Button>
                    </div>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}