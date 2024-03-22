/** 이벤트 핸들러를 클라이언트 컴포넌트의 props로 전달 X
 * => 서버 컴포넌트에서 클라이언트 컴포넌트로 전환  */
"use client"
import { Suspense, useRef } from "react"
import Loading from "./loading"
import { ErrorBoundary } from "react-error-boundary"
import Error from "./error"

export default function RootLayout({
    children,
    team,
    analytics
}: Readonly<{
    children: React.ReactNode
    team: React.ReactNode
    analytics: React.ReactNode
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
        <ul className="h-[100%] flex flex-col gap-5 overflow-scroll overflow-x-hidden">
            {[...Array(40)].map((_, index) => (
                <li key={index} className="flex flex-col font-semibold cursor-pointer" onClick={() => onClickLi(index)}>
                    {`Menu ${index + 1}`}
                    <span
                        className="font-normal text-sm"
                        onClick={e => e.stopPropagation()} //이벤트 버블링 방지 (상위로부터)
                        ref={element => {
                            spanRefs.current[index] = element
                        }}>{`${index + 1}-1`}
                    </span>
                </li>
            ))}
        </ul>

    return (
        <ErrorBoundary fallback={<Error/>}>
            <div> 
                {/** Header */}
                <header className="p-2 flex items-center justify-center bg-slate-200">
                    <h1 className="font-roboto text-2xl font-bold underline">Header</h1>
                </header>

                {/** Navagation */}
                <nav className="p-8 absolute h-[calc(100vh-48px)] w-1/5 bg-slate-100">
                    <Menus />
                </nav>

                {/** Content */}
                <Suspense fallback={<Loading/>}>
                    <div className="absolute p-8 h-[calc(100vh-48px)] w-4/5 left-[calc(1/5*100%)]"> 
                        <h1 className="mb-12 font-bold text-2xl">Content</h1>
                        <div className="flex flex-col justify-between h-[calc(100vh-180px)]">
                            <div className="flex h-[25%]">
                                {children}
                            </div>
                            <div className="flex h-[65%]">
                                {team}
                                {analytics}
                            </div>
                        </div>
                    </div>
                </Suspense>
            </div>
        </ErrorBoundary>
    )
}
