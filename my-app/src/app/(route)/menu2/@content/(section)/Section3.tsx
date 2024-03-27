import Selectbox, { SelectorItem } from "@/app/_component/Selectbox"
import { selectboxItems } from "@/app/_mocks/constant"
import { useRef, useState } from "react"
import { Line } from "react-chartjs-2"

export default function Section3() {
    const selectionsRef = useRef<HTMLDivElement>(null)
    const [active, setActive] = useState<boolean>(false)
    const [selectedItem, setSelectedItem] = useState<SelectorItem>(selectboxItems[0])

    const datasets: { [key: string]: any } = {
        item1: {
            data: [65, 59, 80, 81, 58, 60],
            borderColor: "#82c7ff",
        },
        item2: {
            data: [32, 90, 45, 12, 66, 87],
            borderColor: "#fba4ac",
        },
        item3: {
            data: [12, 60, 40, 10, 85, 30],
            borderColor: "#ffd272",
        },
        item4: {
            data: [75, 30, 58, 90, 86, 42],
            borderColor: "#c3a0f1",
        },
    }

    return (
        <section>
            <div className="m-3 rounded-3xl bg-[#292e54] p-8">
                <div className="flex justify-between gap-8">
                    <span className="font-bold">Basic Line Chart</span>
                    <div
                        ref={selectionsRef}
                        className="flex cursor-pointer items-center gap-10 text-slate-400 hover:text-slate-200">
                        <span
                            className="text-sm"
                            onClick={e => {
                                e.stopPropagation()
                                setActive(!active)
                            }}>
                            {selectedItem.name}
                        </span>
                        <span>
                            <i className="xi-angle-down-min xi-x"></i>
                        </span>
                    </div>
                </div>
                <div className="h-[170px]">
                    <Line
                        data={{
                            labels: ["Value 1", "Value 2", "Value 3", "Value 4", "Value 5", "Value 6"],
                            datasets: [{ ...datasets[selectedItem.id], tension: 0.2, label: "count" }],
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
            {active && (
                <Selectbox
                    items={selectboxItems}
                    setActive={setActive}
                    setSelectedItem={setSelectedItem}
                    style={{
                        top: (selectionsRef.current?.offsetTop ?? 0) + 30,
                        left: (selectionsRef.current?.offsetLeft ?? 0) - 40,
                        width: (selectionsRef.current?.clientWidth ?? 0) + 40,
                    }}
                />
            )}
        </section>
    )
}
