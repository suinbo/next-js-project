"use client"

import { initMSW } from "@/app/_mocks"
//import { useEffect, useState } from "react"

if (process.env.NODE_ENV !== "production") {
    initMSW()
}

export const MSWComponent = ({ children }: { children: React.ReactNode }) => {
    // const [mswReady, setMswReady] = useState<boolean>(false)

    // useEffect(() => {
    //     const init = async () => {
    //         const initMsw = await import("@/app/_mocks").then(res => res.initMSW)
    //         await initMsw()
    //         setMswReady(true)
    //     }

    //     if (!mswReady) init()
    // }, [mswReady])

    return <>{children}</>
}
