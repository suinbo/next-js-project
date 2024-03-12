export default function Page() {
    const Li = () =>
        [...Array(40)].map((_, index) => (
            <li
                key={`content_${index}`}
                className="w-[calc((100%-48px)/2)] lg:w-[calc((100%-70px)/3)] h-40 bg-slate-100 p-4 cursor-pointer rounded-2xl hover:border hover:transition hover:duration-500 hover:border-indigo-600">
                <span className="text-sm">NO {index + 1}.</span>
            </li>
        ))

    return (
        <div className="p-8 flex flex-col gap-10 h-full">
            <p className="text-xl font-semibold">Title</p>
            <div className="overflow-scroll overflow-x-hidden">
                <ul className="flex w-full flex-wrap gap-6">
                    <Li />
                </ul>
            </div>
        </div>
    )
}
