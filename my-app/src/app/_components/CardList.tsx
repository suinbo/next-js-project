import React from "react"
import { instance } from "../_utils/apis/request"

export default function CardList({
    length = 40,
    max = 3,
    height = 20,
}: {
    length?: number
    max?: number
    height?: number
}) {
    const Li = () => {
        const width: { [key: number]: string } = {
            1: `w-[calc(100%-24px)]`,
            2: `w-[calc(100%-24px)] lg:w-[calc((100%-48px)/2)]`,
            3: `w-[calc((100%-48px)/2)] lg:w-[calc((100%-70px)/3)]`,
        }

        return [...Array(length)].map((_, index) => (
            <li
                key={`content_${index}`}
                className={`${width[max]} h-${height} cursor-pointer rounded-2xl bg-slate-100 p-4 hover:border hover:border-slate-600 hover:transition hover:duration-500`}>
                <span className="text-sm">NO {index + 1}.</span>
            </li>
        ))
    }

    return <Li />
}
