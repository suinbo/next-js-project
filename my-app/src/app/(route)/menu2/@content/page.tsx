"use client"

import { Chart, Tooltip, ArcElement, CategoryScale, LinearScale, PointElement, LineElement } from 'chart.js'
import SearchBox from "@/app/_component/SearchBox"
import Section1 from './(section)/Section1'
import Section2 from './(section)/Section2'
import Section3 from './(section)/Section3'

Chart.register(ArcElement, Tooltip, CategoryScale, LinearScale, PointElement, LineElement)

export default function Page() {
    return (
        <div className="flex flex-col m-4 text-slate-300">
            <div className="flex p-3 w-full justify-between">
                <h1 className="text-lg font-bold">Overview</h1>
                <SearchBox />
            </div>
            <Section1 />
            <Section2 />
            <Section3 />
        </div>
    )
}