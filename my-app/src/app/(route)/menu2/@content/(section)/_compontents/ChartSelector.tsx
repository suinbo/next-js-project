import { useCallback, useRef, useState } from "react"
import { Bar, Pie, Radar, Scatter } from "react-chartjs-2"

const CHART_COLOR = ["bg-[#fa379f]", "bg-[#4fe5e6]", "bg-[#3b7efd]", "bg-[#7f3bf5]"]

export default function ChartSelector() {
    const pieRef = useRef(null)
    const [activeChartIndex, setActiveChartIndex] = useState<number>(0)

    /** 차트 변경 */
    const onChangeChart = useCallback(
        (isPrev: boolean) => {
            const index = isPrev ? -1 : 1
            setActiveChartIndex(activeChartIndex + index)
        },
        [activeChartIndex]
    )

    const ValueList = () =>
        CHART_COLOR.map((item, index) => (
            <li key={item} className="flex items-center gap-4 text-slate-400">
                <span className={`${item} h-4 w-4 rounded-sm`}></span>
                <span>{`Value ${index + 1}`}</span>
            </li>
        ))

    const chartList = [
        {
            title: "Basic Pie Chart",
            size: "w-[260px] h-[260px]",
            chart: (
                <Pie
                    key="pie"
                    ref={pieRef}
                    data={{
                        labels: ["Value 1", "Value 2", "Value 3", "Value 4"],
                        datasets: [
                            {
                                data: [10, 8, 3, 5],
                                borderWidth: 1,
                                borderColor: "transparent",
                                backgroundColor: ["#fa379f", "#4fe5e6", "#3b7efd", "#7f3bf5"],
                            },
                        ],
                    }}
                    options={{
                        plugins: {
                            tooltip: {
                                position: "nearest",
                                displayColors: true,
                                callbacks: {
                                    label: context => {
                                        return `count : ${context.formattedValue}`
                                    },
                                },
                            },
                        },
                    }}
                    fallbackContent={<div>ddd</div>}
                />
            ),
        },
        {
            title: "Basic Radar Chart",
            size: "w-[260px] h-[260px]",
            chart: (
                <Radar
                    key="radar"
                    data={{
                        labels: ["Eating", "Drinking", "Sleeping", "Designing", "Coding", "Cycling", "Running"],
                        datasets: [
                            {
                                label: "My First Dataset",
                                data: [65, 59, 90, 81, 56, 55, 40],
                                borderColor: "#fa379f",
                                pointBackgroundColor: "#fa379f",
                            },
                            {
                                label: "My Second Dataset",
                                data: [28, 48, 40, 19, 96, 27, 100],
                                borderColor: "#3b7efd",
                                pointBackgroundColor: "#3b7efd",
                            },
                        ],
                    }}
                    options={{
                        scales: {
                            r: {
                                ticks: {
                                    color: "#b6b7c5",
                                    backdropColor: "transparent",
                                },
                                grid: {
                                    color: "#b6b7c5",
                                },
                                angleLines: {
                                    color: "#b6b7c5",
                                },
                                pointLabels: {
                                    color: "#b6b7c5",
                                },
                            },
                        },
                        elements: {
                            line: {
                                borderWidth: 1,
                            },
                        },
                    }}
                />
            ),
        },
        {
            title: "Basic Bar Chart",
            size: "w-[400px] h-[260px]",
            chart: (
                <Bar
                    key="bar"
                    data={{
                        labels: ["Value 1", "Value 2", "Value 3", "Value 4"],
                        datasets: [
                            {
                                data: [10, 8, 3, 5],
                                borderWidth: 1,
                                borderColor: "transparent",
                                backgroundColor: ["#fa379f", "#4fe5e6", "#3b7efd", "#7f3bf5"],
                            },
                        ],
                    }}
                    options={{
                        scales: {
                            y: {
                                beginAtZero: true,
                                ticks: {
                                    color: "#7a8aa1",
                                    //stepSize: 2,
                                },
                                grid: {
                                    color: "#3f4f6f",
                                },
                            },
                            x: {
                                ticks: {
                                    color: "#7a8aa1",
                                },
                                grid: {
                                    color: "#3f4f6f",
                                },
                            },
                        },
                    }}
                />
            ),
        },
        {
            title: "Basic Scatter Chart",
            size: "w-[400px] h-[260px]",
            chart: (
                <Scatter
                    key="scatter"
                    data={{
                        labels: ["Value 1", "Value 2", "Value 3", "Value 4"],
                        datasets: [
                            {
                                label: "Scatter Dataset",
                                data: [
                                    { x: -10, y: 0 },
                                    { x: 0, y: 10 },
                                    { x: 10, y: 5 },
                                    { x: -0.5, y: 0.5 },
                                    { x: -3.7, y: 3 },
                                    { x: 1, y: 7.5 },
                                    { x: 5.5, y: 2 },
                                ],
                                backgroundColor: "#fa379f",
                            },
                        ],
                    }}
                    options={{
                        scales: {
                            y: {
                                beginAtZero: true,
                                ticks: {
                                    color: "#7a8aa1",
                                    //stepSize: 2,
                                },
                                grid: {
                                    color: "#3f4f6f",
                                },
                            },
                            x: {
                                type: "linear",
                                position: "bottom",
                                ticks: {
                                    color: "#7a8aa1",
                                },
                                grid: {
                                    color: "#3f4f6f",
                                },
                            },
                        },
                    }}
                />
            ),
        },
    ]

    return (
        <div className="flex w-[calc(100%-32px)] flex-col justify-between  rounded-3xl bg-[#292e54] p-8">
            <div className="flex justify-between gap-8">
                <span className="font-bold">{chartList[activeChartIndex].title}</span>
                <span className="flex gap-10 text-slate-400">
                    <i
                        className={`
                            xi-angle-left-min xi-2x cursor-pointer 
                            ${activeChartIndex !== 0 ? "hover:text-slate-200" : ""}
                            ${activeChartIndex == 0 ? "text-slate-600" : ""}`}
                        onClick={() => activeChartIndex !== 0 && onChangeChart(true)}
                    />
                    <i
                        className={`
                            xi-angle-right-min xi-2x cursor-pointer 
                            ${activeChartIndex !== 3 ? "hover:text-slate-200" : ""}
                            ${activeChartIndex == 3 ? "text-slate-600" : ""}`}
                        onClick={() => activeChartIndex !== 3 && onChangeChart(false)}
                    />
                </span>
            </div>
            <div className="flex items-center justify-center gap-32">
                <div className={`flex items-center ${chartList[activeChartIndex].size}`}>
                    {chartList[activeChartIndex].chart}
                </div>
                <div className="flex">
                    <ul className="flex flex-col gap-6">
                        <ValueList />
                    </ul>
                </div>
            </div>
        </div>
    )
}
