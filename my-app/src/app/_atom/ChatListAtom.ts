import { atom } from "recoil"

type ChatListProp = { no: number; type: string; content: string }[]

export const chatListState = atom({
    key: "chatLisState",
    default: {
        file: null as null | File,
        chatList: [{ no: 0, type: "answer", content: "무엇이든 물어보세요!" }] as ChatListProp,
    },
})
