"use client"

import React, { SetStateAction, useRef, useState } from "react"
import axios from "axios"

type ChatListProp = { type: string; question: string; answer: string }[]

const defaultValue = [{ type: "", question: "", answer: "" }]

export default function Chat({ setOpenChat }: { setOpenChat: React.Dispatch<SetStateAction<boolean>> }) {
    const textRefs = useRef<HTMLTextAreaElement>(null)
    const [chatList, setChatList] = useState<ChatListProp>(defaultValue)
    const [file, setFile] = useState<File>()

    console.log("chat:: ", chatList)

    const Chat = ({ isAnswer = true, text }: { isAnswer?: boolean; text: string }) => {
        return (
            <div className="flex items-center gap-4">
                <div
                    key="target"
                    className={`h-[40px] w-[40px] rounded-full ${isAnswer ? "bg-[#9f32ff]" : "bg-[#292e54]"} text-center text-xs font-bold`}>
                    <span className="relative top-1/4">{isAnswer ? "AI" : "me"}</span>
                </div>
                <div
                    key="answer"
                    className="max-w-[310px] flex-1 text-wrap break-words rounded-xl bg-[#292e54] p-4 text-xs">
                    {text}
                </div>
            </div>
        )
    }

    const ChatList = () =>
        chatList.slice(1).map((chat, index) => {
            return (
                <Chat
                    key={index}
                    isAnswer={Boolean(chat.type == "AI")}
                    text={Boolean(chat.type == "AI") ? chat.answer : chat.question}
                />
            )
        })

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) setFile(e.target.files[0])
    }

    const handleUpload = () => {
        console.log("!")
        if (!file) return

        const formData = new FormData()
        formData.append("file", file)

        const options = {
            headers: {
                "x-api-key": "sec_FNL99KKibadikoFEEy7VmHY8CSpPtgzQ",
            },
        }

        axios.post("https://api.chatpdf.com/v1/sources/add-file", formData, options)
    }

    return (
        <div className="flex flex-col">
            <div className="flex h-[80px] justify-between p-3">
                <p className="font-bold">New Chat</p>
                <span onClick={() => setOpenChat(false)}>
                    <i className="xi-close cursor-pointer"></i>
                </span>
            </div>
            <div className="m-3 flex">
                <label
                    className="flex w-full cursor-pointer items-center justify-center rounded-xl border border-solid border-slate-600 p-2 text-sm"
                    htmlFor="inputFile"
                    onClick={handleUpload}>
                    {!file && <i className="xi-plus-min xi-x mr-2" />}
                    <span>{file ? file.name : "Upload"}</span>
                </label>
                <input id="inputFile" type="file" onChange={handleFileChange} className="hidden" />
            </div>
            <div className="m-3">
                <div className="flex h-[534px] flex-col gap-5 overflow-scroll overflow-x-hidden pr-4">
                    <Chat text="무엇이든 물어보세요!" />
                    <ChatList />
                </div>
            </div>
            <div className="m-3 flex items-center gap-4">
                <div className="flex flex-1 gap-3 rounded-xl bg-[#292e54] px-6 py-5">
                    <textarea
                        ref={textRefs}
                        className="h-[114px] w-full resize-none bg-transparent text-sm"
                        placeholder="질문을 입력해주세요."
                    />
                    <span
                        onClick={() => {
                            const current = textRefs.current as HTMLTextAreaElement
                            if (current) {
                                if (!current.value) return
                                setChatList(prev => [...prev, { type: "ME", question: current.value, answer: "" }])
                            }
                        }}>
                        <i className="xi-enter cursor-pointer"></i>
                    </span>
                </div>
            </div>
        </div>
    )
}
