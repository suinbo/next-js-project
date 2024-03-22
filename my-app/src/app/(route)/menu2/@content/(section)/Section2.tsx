import { useRef } from "react"
import { Pie } from "react-chartjs-2"

const CHART_COLOR = ["bg-[#fa379f]", "bg-[#4fe5e6]", "bg-[#3b7efd]", "bg-[#7f3bf5]"]

export default function Section2() {
    const pieRef = useRef(null)
    const ValueList = () => CHART_COLOR.map((item, index) => 
        <li key={item} className="flex items-center gap-4 text-slate-400">
            <span className={`${item} w-4 h-4 rounded-sm`}></span>
            <span>{`Value ${index + 1}`}</span>
        </li>
    )
    
    return (
        <section>
                <div className="flex m-3 gap-6" >
                    <div className="flex flex-col w-[calc(100%-32px)] gap-8 bg-[#292e54] rounded-3xl p-8">
                        <div className="flex gap-8 justify-between">
                            <span className="font-bold">Basic Pie Chart</span>
                            <span className="flex gap-10 text-slate-400">
                                <i className="xi-angle-left-min xi-2x hover:text-slate-200 cursor-pointer"></i>
                                <i className="xi-angle-right-min xi-2x hover:text-slate-200 cursor-pointer"></i>
                            </span>
                        </div>
                        <div className="flex h-[210px] justify-around items-center">
                            <Pie 
                                ref={pieRef}
                                data={
                                    { 
                                        labels: ["Value 1", "Value 2", "Value 3", "Value 4"], 
                                        datasets: [{
                                            label: '# of Votes',
                                            data: [10, 8, 3, 5],
                                            borderWidth: 1,
                                            borderColor: "transparent",
                                            backgroundColor: ["#fa379f", "#4fe5e6", "#3b7efd", "#7f3bf5"]
                                        }] 
                                    }
                                }
                                options={{
                                    plugins: {
                                        tooltip: {
                                            position: "nearest",
                                            displayColors: true,
                                            callbacks: {
                                                label: (context) => {
                                                    return `count : ${context.formattedValue}` 
                                                }
                                            }
                                        }
                                    }
                                }}
                            />
                            <ul className="flex flex-col gap-6">
                                <ValueList/>
                            </ul>
                        </div>
                    </div>
                    <div className="w-[32%] bg-gradient-to-b from-[#5a8df9] to-[#274caa] rounded-3xl p-8">
                        <ul className="flex flex-col gap-10 text-lg">
                            <li className="flex flex-col">
                                Total Percentage
                                <span className="text-3xl text-slate-200">
                                    <span className="font-extrabold">10</span>
                                    <span className="text-base ml-1 text-slate-300">%</span>
                                </span>
                            </li>
                            <li className="flex flex-col">
                                Total Kilogram
                                <span className="text-3xl font-extrabold text-slate-200">
                                    <span>20</span>
                                    <span className="text-base ml-1 text-slate-300">kg</span>
                                </span>
                            </li>
                            <li className="flex flex-col">
                                Total Count
                                <span className="text-3xl font-extrabold text-slate-200">
                                    <span>30</span>
                                    <span className="text-base ml-1  text-slate-300">m</span>
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
    )
}
