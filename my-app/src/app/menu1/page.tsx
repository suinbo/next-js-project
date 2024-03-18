export default function Page() {
    const Li = () =>
        [...Array(40)].map((_, index) => (
            <li
                key={`content_${index}`}
                className="w-[calc((100%-48px)/2)] lg:w-[calc((100%-70px)/3)] h-40 bg-slate-100 p-4 cursor-pointer rounded-2xl hover:border hover:transition hover:duration-500 hover:border-slate-600">
                <span className="text-sm">NO {index + 1}.</span>
            </li>
        ))

    return (
        <div className="p-8 flex flex-col gap-10">
            <h1 className="font-bold text-2xl">Content</h1>
            <div className="m-5 h-[820px]">
                <p className="mb-8 font-bold text-lg">Title</p>
                <ul className="flex w-full h-[100%] flex-wrap gap-6 overflow-scroll overflow-x-hidden">
                    <Li />
                </ul>
            </div>
        </div>
            )
}
