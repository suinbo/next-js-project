import { SetStateAction, useRef } from "react"

export default function Chat({ setOpenChat }: { setOpenChat: React.Dispatch<SetStateAction<boolean>> }) {
    const textRefs = useRef<HTMLTextAreaElement>(null)

    const ChatList = ({ isAnswer = false }: { isAnswer?: boolean }) => {
        const answer = [
            <div
                key="target"
                className={`h-[40px] w-[40px] rounded-full ${isAnswer ? "bg-[#9f32ff]" : "bg-[#292e54]"} text-center text-xs font-bold`}>
                <span className="relative top-1/4">{isAnswer ? "AI" : "me"}</span>
            </div>,
            <div key="answer" className="flex-1 rounded-xl bg-[#292e54] p-5 text-sm">
                답변입니다.답변입니다.답변입니다.답변입니다.답변입니다.답변입니다.답변입니다.답변입니다.답변입니다.답변입니다.
            </div>,
        ]

        return (
            <div className="flex items-center gap-4">
                {(Number(isAnswer) ? answer.reverse() : answer).map(item => item)}
            </div>
        )
    }

    return (
        <div className="flex flex-col">
            <div className="flex h-[80px] justify-between p-3">
                <p className="font-bold">New Chat</p>
                <span onClick={() => setOpenChat(false)}>
                    <i className="xi-close cursor-pointer"></i>
                </span>
            </div>
            <div className="flex h-[614px] flex-col gap-6 p-3">
                <ChatList />
                <ChatList isAnswer={true} />
            </div>
            <div className="flex items-center gap-4 p-3">
                <div className="flex flex-1 gap-3 rounded-xl bg-[#292e54] px-6 py-5">
                    <textarea ref={textRefs} className="h-[114px] w-full resize-none bg-transparent text-sm" />
                    <span>
                        <i className="xi-enter cursor-pointer"></i>
                    </span>
                </div>
            </div>
        </div>
    )
}
