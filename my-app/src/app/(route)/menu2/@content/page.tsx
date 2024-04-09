"use client"

import {
    Chart,
    Tooltip,
    ArcElement,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    BarElement,
    RadialLinearScale,
} from "chart.js"
import SearchBox from "@/app/_components/SearchBox"
import Section1 from "./(section)/Section1"
import Section2 from "./(section)/Section2"
import Section3 from "./(section)/Section3"

Chart.register(
    ArcElement,
    Tooltip,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    BarElement,
    RadialLinearScale
)

export default function Page() {
    return (
        <div className="m-4 flex flex-col text-slate-300">
            <div className="flex w-full justify-between p-3">
                <h1 className="text-lg font-bold">Overview</h1>
                <SearchBox />
            </div>
            <Section1 />
            <Section2 />
            <Section3 />
        </div>
    )
}
