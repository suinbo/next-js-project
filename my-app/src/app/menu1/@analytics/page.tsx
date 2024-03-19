import CardList from "@/component/CardList"
import React from "react"

export default function Page() {
    return (
        <div className="p-4 flex flex-col gap-8 w-1/2">
            <p className="font-bold text-lg">Section 3</p>
            <ul className="flex w-full flex-wrap gap-6 overflow-scroll overflow-x-hidden">
                <CardList  length={20} max={1} height={40} />
            </ul>
        </div>
    )
}
