import CardList from "@/app/_component/CardList"
import React from "react"

export default function Page() {
    return (
        <div className="flex flex-col gap-8 p-4">
            <p className="text-lg font-bold">Section 1</p>
            <ul className="flex h-[100%] w-full flex-wrap gap-6 overflow-scroll overflow-x-hidden">
                <CardList />
            </ul>
        </div>
    )
}
