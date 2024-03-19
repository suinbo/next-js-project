import React from "react"

export default function CardList({ length = 40, max = 3, height = 20 }: { length?: number, max?: number, height?: number }) {
    
    const Li = () => {
        const width:{ [key: number]: string } = {
            1: `w-[calc(100%-24px)]`,
            2: `w-[calc(100%-24px)] lg:w-[calc((100%-48px)/2)]`,
            3: `w-[calc((100%-48px)/2)] lg:w-[calc((100%-70px)/3)]`,
        } 

        return [...Array(length)].map((_, index) => (
            <li
                key={`content_${index}`}
                className={`${width[max]} h-${height} bg-slate-100 p-4 cursor-pointer rounded-2xl hover:border hover:transition hover:duration-500 hover:border-slate-600`}>
                <span className="text-sm">NO {index + 1}.</span>
            </li>
        ))
    }
        

    return <Li />
}
