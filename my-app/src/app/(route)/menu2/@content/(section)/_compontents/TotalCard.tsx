export default function TotalCard() {
    const listData = [
        { title: "Total Percentage", value: 10, unit: "%" },
        { title: "Total Kilogram", value: 20, unit: "kg" },
        { title: "Total Count", value: 30, unit: "m" },
    ]

    const List = () =>
        listData.map(({ title, value, unit }) => (
            <li key={title} className="flex flex-col">
                {title}
                <span className="text-3xl text-slate-200">
                    <span className="font-extrabold">{value}</span>
                    <span className="ml-1 text-base text-slate-300">{unit}</span>
                </span>
            </li>
        ))

    return (
        <div className="w-[32%] rounded-3xl bg-gradient-to-b from-[#5a8df9] to-[#274caa] p-8">
            <ul className="flex flex-col gap-10 text-lg">
                <List />
            </ul>
        </div>
    )
}
