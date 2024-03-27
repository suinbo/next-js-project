type WidgetType = "info" | "chat"

export default function Widget({ type }: { type: WidgetType }) {
    const widgetPos: { [key in WidgetType]: string } = {
        info: `w-[calc(23%-160px)] top-[86px] right-[144px]`,
        chat: `w-[386px] top-[40px]`,
    }

    const textColor: { [key: number]: { li: string; span: string } } = {
        1: {
            li: "text-slate-400",
            span: "text-[#415786]",
        },
        0: {
            li: "border border-[#363c69] text-slate-200",
            span: "text-[#536da5]",
        },
    }

    const AlarmList = () =>
        [...Array(40)].map((_, index) => {
            const { li, span } = textColor[Number(index > 2)]

            return (
                <li key={index} className={`mb-3 flex flex-col rounded-lg p-5 ${li}`}>
                    Description ...
                    <span className={`mt-3 text-xs ${span}`}>2024-03-26 18:00:00</span>
                </li>
            )
        })

    return (
        <div
            className={`
                absolute p-6 ${widgetPos[type]} h-[610px] rounded-2xl bg-[#13162b]  
                before:absolute before:left-4 before:top-[-26px] before:h-0 before:w-0 
                before:border-b-[16px] before:border-l-[14px] before:border-r-[14px] before:border-t-[12px]
                before:border-b-slate-900 before:border-l-transparent before:border-r-transparent before:border-t-transparent 
                before:bg-transparent before:content-[""]`}>
            <div className="h-[100%]">
                <div className="mb-8 flex items-center justify-between text-slate-400">
                    <span className="text-sm font-bold">Notice</span>
                    <i className="xi-plus-min xi-x cursor-pointer font-light"></i>
                </div>
                <div className="h-[calc(100%-60px)]">
                    <ul className="h-full overflow-scroll overflow-x-hidden pr-3 text-sm text-slate-300">
                        <AlarmList />
                    </ul>
                </div>
            </div>
        </div>
    )
}
