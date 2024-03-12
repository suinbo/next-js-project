/** 이벤트 핸들러를 클라이언트 컴포넌트의 props로 전달 X
 * => 서버 컴포넌트에서 클라이언트 컴포넌트로 전환  */
"use client"
import { useRef } from "react"

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    const spanRefs = useRef<{ [key: number]: HTMLSpanElement | null }>({})
    const onClickLi = (item: number) => {
        /** event: React.MouseEvent<HTMLLIElement> */

        const spanRef = spanRefs.current[item]

        if (spanRef) {
            const isDisplayNone = spanRef.style.display == "none"
            spanRef.style.display = isDisplayNone ? "block" : "none"
        }
    }

    const Menus = () =>
        [...Array(40)].map((_, index) => (
            <li key={index} className="flex flex-col font-semibold" onClick={() => onClickLi(index)}>
                {`Menu ${index + 1}`}
                <span
                    className="font-normal text-sm"
                    onClick={e => e.stopPropagation()} //이벤트 버블링 방지 (상위로부터)
                    ref={element => {
                        spanRefs.current[index] = element
                    }}>{`${index + 1}-1`}</span>
            </li>
        ))

    return (
        <div>
            {/** Header */}
            <header className="p-2 flex items-center justify-center bg-slate-200">
                <h1 className="font-roboto text-2xl font-bold underline">Header</h1>
            </header>

            {/** Navagation */}
            <nav className="p-8 absolute h-[95%] w-1/5 bg-slate-100">
                <ul className="h-full flex flex-col gap-5 overflow-scroll overflow-x-hidden">
                    <Menus />
                </ul>
            </nav>

            {/** Content */}
            <div className="absolute h-[95%] w-4/5 left-[calc(1/5*100%)]">{children}</div>
        </div>
    )
}
