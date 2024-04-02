import CardList from "@/app/_components/CardList"
import React from "react"

export default function Page() {
    return (
        <div className="flex w-1/2 flex-col gap-8 p-4">
            <p className="text-lg font-bold">Section 2</p>
            <ul className="flex w-full flex-wrap gap-6 overflow-scroll overflow-x-hidden">
                <CardList max={2} height={15} />
            </ul>
        </div>
    )
}
