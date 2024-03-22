import CardList from "@/app/_component/CardList"
import React from "react"

export default function Page() {
    return (
        <div className="p-4 flex flex-col gap-8">
            <p className="font-bold text-lg">Section 1</p>
            <ul className="flex w-full h-[100%] flex-wrap gap-6 overflow-scroll overflow-x-hidden">
                <CardList />
            </ul>
        </div>
    )
}
