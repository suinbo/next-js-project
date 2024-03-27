import { Line } from "react-chartjs-2"

export default function Section3() {
    return (
        <section>
            <div className="m-3 rounded-3xl bg-[#292e54] p-8">
                <div className="flex justify-between gap-8">
                    <span className="font-bold">Basic Line Chart</span>
                    <span className="flex cursor-pointer items-center gap-10 text-slate-400">
                        <span className="text-sm">Selections</span>
                        <span>
                            <i className="xi-angle-down-min xi-x hover:text-slate-200"></i>
                        </span>
                    </span>
                </div>
                <div className="h-[170px]">
                    <Line
                        data={{
                            labels: ["Value 1", "Value 2", "Value 3", "Value 4", "Value 5", "Value 6"],
                            datasets: [
                                {
                                    label: "count",
                                    data: [65, 59, 80, 81, 58, 60],
                                    borderColor: "rgb(75, 192, 192)",
                                    tension: 0.2,
                                },
                            ],
                        }}
                        options={{
                            maintainAspectRatio: false, //요소의 너비에 맞게 조정
                            layout: {
                                padding: {
                                    top: 36,
                                },
                            },
                            scales: {
                                x: {
                                    ticks: {
                                        color: "#7a8aa1",
                                    },
                                    grid: {
                                        color: "#3f4f6f",
                                    },
                                },
                                y: {
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
                </div>
            </div>
        </section>
    )
}
