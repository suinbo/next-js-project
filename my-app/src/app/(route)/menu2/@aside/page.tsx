"use client"

import { useEffect, useState } from "react"
import Section3 from "./(section)/Section3"
import Section2 from "./(section)/Section2"
import Section1 from "./(section)/Section1"
import { chatbot } from "@/asset/images"
import Chat from "@/app/_components/Chat"
import ChatbotIcon from "./_compontents/ChatbotIcon"

export default function Aside() {
    const [mounted, setMounted] = useState<boolean>(false)
    const [openChat, setOpenChat] = useState<boolean>(false)

    /** 하이드레이션 해결 */
    useEffect(() => {
        setMounted(true)
    }, [])

    return (
        mounted && (
            <>
                <div className="m-4 flex flex-col gap-4 text-slate-300">
                    {openChat ? (
                        <Chat setOpenChat={setOpenChat} />
                    ) : (
                        <>
                            <Section1 />
                            <Section2 />
                            <Section3 />
                            <div
                                onClick={() => setOpenChat(true)}
                                className="relative bottom-[15px] left-[326px] h-[60px] w-[60px] cursor-pointer rounded-full shadow-[0_0_8px_0_rgba(0,0,0,0.1)] shadow-slate-500/40">
                                <ChatbotIcon src={chatbot} alt="챗봇" />
                            </div>
                        </>
                    )}
                </div>
            </>
        )
    )
}
