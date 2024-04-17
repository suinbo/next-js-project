"use client"

import React, { SetStateAction, useEffect, useRef, useState } from "react"
import { getSourceId, getChatAnswer } from "../pages/api/chatpdf"
import { setLocalStorage } from "../_hooks/useLocalStorage"

const CHAT_TYPE = {
    QUESTION: "question",
    ANSWER: "answer",
}

type ChatListProp = { no: number; type: string; content: string }[]

const defaultValue = [{ no: 0, type: CHAT_TYPE.ANSWER, content: "무엇이든 물어보세요!" }]

export default function Chat({ setOpenChat }: { setOpenChat: React.Dispatch<SetStateAction<boolean>> }) {
    const textRefs = useRef<HTMLTextAreaElement>(null)
    const [chatList, setChatList] = useState<ChatListProp>(defaultValue)
    const [file, setFile] = useState<File>()
    const [sourceId, setSourceId] = useState<string>("")

    useEffect(() => {
        const { no, type, content } = chatList[chatList.length - 1]
        const question = chatList.find(chat => chat.no == no)
        const isAnswer = type === CHAT_TYPE.ANSWER && content === "..." && question

        if (isAnswer) {
            getChatAnswer(sourceId, question.content).then(res => {
                setChatList(prev =>
                    prev.map(item => ({
                        ...item,
                        content: item.no == no && item.type == CHAT_TYPE.ANSWER ? res.content : item.content,
                    }))
                )
            })
        }
    }, [chatList, sourceId])

    const Chat = ({ isAnswer = true, text }: { isAnswer?: boolean; text: string }) => {
        const arr = [
            <div
                key="target"
                className={`h-[40px] w-[40px] rounded-full ${isAnswer ? "bg-[#9f32ff]" : "bg-[#292e54]"} text-center text-xs font-bold`}>
                <span className="relative top-1/4">{isAnswer ? "AI" : "me"}</span>
            </div>,
            <div
                key="answer"
                className="max-w-[310px] flex-1 text-wrap break-words rounded-xl bg-[#292e54] p-4 text-xs">
                {text}
            </div>,
        ]

        return <div className="flex items-center gap-4">{(isAnswer ? arr : arr.reverse()).map(item => item)}</div>
    }

    const ChatList = () =>
        chatList.map((chat, index) => {
            return <Chat key={index} isAnswer={Boolean(chat.type == CHAT_TYPE.ANSWER)} text={chat.content} />
        })

    /** 파일 업로드 */
    const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            setFile(e.target.files[0])

            const formData = new FormData()
            formData.append("file", e.target.files[0])

            const { sourceId } = await getSourceId(formData)

            if (sourceId) {
                setLocalStorage(sourceId)
                setSourceId(sourceId)
            }
        }
    }

    /** 채팅 입력 */
    const handleChatting = () => {
        const current = textRefs.current as HTMLTextAreaElement
        if (current) {
            if (!current.value) return
            setChatList(prev => {
                const no = prev[prev.length - 1].no + 1
                return [
                    ...prev,
                    { no, type: CHAT_TYPE.QUESTION, content: current.value },
                    { no, type: CHAT_TYPE.ANSWER, content: "..." },
                ]
            })
        }
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
                    className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl border border-solid border-slate-600 p-2 text-sm"
                    htmlFor="inputFile">
                    {!file && <i className="xi-plus-min xi-x mr-2" />}
                    <span>{file ? file.name : "Upload"}</span>
                    {sourceId && <i className="xi-check-min"></i>}
                </label>
                <input id="inputFile" type="file" onChange={handleFileChange} className="hidden" />
            </div>
            <div className="m-3">
                <div className="flex h-[534px] flex-col gap-5 overflow-scroll overflow-x-hidden pb-16 pr-4">
                    <ChatList />
                </div>
            </div>
            <div className="m-3 flex items-center gap-4">
                <div className="flex flex-1 gap-3 rounded-xl bg-[#292e54] px-6 py-5">
                    <textarea
                        ref={textRefs}
                        className="h-[114px] w-full resize-none bg-transparent text-sm"
                        placeholder={sourceId ? "질문을 입력해주세요." : "PDF 파일을 업로드 해주세요."}
                        disabled={!sourceId}
                    />
                    <span onClick={handleChatting}>
                        <i className="xi-enter cursor-pointer"></i>
                    </span>
                </div>
            </div>
        </div>
    )
}
