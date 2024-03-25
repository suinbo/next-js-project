import { useRef } from "react"
import { Pie } from "react-chartjs-2"

const CHART_COLOR = ["bg-[#fa379f]", "bg-[#4fe5e6]", "bg-[#3b7efd]", "bg-[#7f3bf5]"]

export default function Section2() {
    const pieRef = useRef(null)
    const ValueList = () =>
        CHART_COLOR.map((item, index) => (
            <li key={item} className="flex items-center gap-4 text-slate-400">
                <span className={`${item} h-4 w-4 rounded-sm`}></span>
                <span>{`Value ${index + 1}`}</span>
            </li>
        ))

    return (
        <section>
            <div className="m-3 flex gap-6">
                <div className="flex w-[calc(100%-32px)] flex-col gap-8 rounded-3xl bg-[#292e54] p-8">
                    <div className="flex justify-between gap-8">
                        <span className="font-bold">Basic Pie Chart</span>
                        <span className="flex gap-10 text-slate-400">
                            <i className="xi-angle-left-min xi-2x cursor-pointer hover:text-slate-200"></i>
                            <i className="xi-angle-right-min xi-2x cursor-pointer hover:text-slate-200"></i>
                        </span>
                    </div>
                    <div className="flex h-[210px] items-center justify-around">
                        <Pie
                            ref={pieRef}
                            data={{
                                labels: ["Value 1", "Value 2", "Value 3", "Value 4"],
                                datasets: [
                                    {
                                        label: "# of Votes",
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
                        />
                        <ul className="flex flex-col gap-6">
                            <ValueList />
                        </ul>
                    </div>
                </div>
                <div className="w-[32%] rounded-3xl bg-gradient-to-b from-[#5a8df9] to-[#274caa] p-8">
                    <ul className="flex flex-col gap-10 text-lg">
                        <li className="flex flex-col">
                            Total Percentage
                            <span className="text-3xl text-slate-200">
                                <span className="font-extrabold">10</span>
                                <span className="ml-1 text-base text-slate-300">%</span>
                            </span>
                        </li>
                        <li className="flex flex-col">
                            Total Kilogram
                            <span className="text-3xl text-slate-200">
                                <span className="font-extrabold">20</span>
                                <span className="ml-1 text-base text-slate-300">kg</span>
                            </span>
                        </li>
                        <li className="flex flex-col">
                            Total Count
                            <span className="text-3xl text-slate-200">
                                <span className="font-extrabold">30</span>
                                <span className="ml-1 text-base  text-slate-300">m</span>
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}
