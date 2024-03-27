"use client"

import { menus } from "@/app/_mocks/constant"
import { logo, profile } from "@/asset/images"
import Image, { StaticImageData } from "next/image"
import React, { useState } from "react"

type ActiveMenuProp = {
    id: string
    name: string
}

export default function Navigation() {
    const [activeMenu, setActiveMenu] = useState<ActiveMenuProp>(menus[0])

    const MenuList = () =>
        menus.map(item => {
            const isActive = activeMenu.id == item.id

            return (
                <li
                    key={item.id}
                    className={`m-5 mr-0 flex h-[40px] cursor-pointer pr-0 font-roboto ${isActive ? "text-slate-300" : "text-slate-500"} hover:text-slate-300`}>
                    <div className="relative flex w-full items-center overflow-hidden">
                        <span onClick={() => setActiveMenu(item)}>
                            <i className="xi-equalizer mr-4" />
                            {item.name}
                        </span>
                        {isActive && (
                            <span className="absolute right-[-16px] h-[36px] w-[36px] rounded-3xl bg-[#25294a]">
                                <span className="absolute left-[25%] top-[40%] h-[6px] w-[6px] rounded-3xl bg-[#4fe5e6]" />
                            </span>
                        )}
                    </div>
                </li>
            )
        })

    const Images = ({ src, size = 30 }: { src: StaticImageData; size?: number }) => (
        <Image src={src} alt="logo" width={size} height={size} />
    )

    return (
        <div className="flex h-full flex-col">
            <div className="m-4 flex-[0.1]">
                <div className="flex cursor-pointer items-center gap-4 p-5">
                    <Images src={logo} />
                    <span className="font-roboto text-2xl font-bold tracking-wider text-slate-200">ThisIsLogo</span>
                </div>
            </div>
            <div className="m-4 mr-0 flex-1">
                <ul>
                    <MenuList />
                </ul>
            </div>
            <div className="flex-[0.1] border-t border-slate-600 p-4">
                <div className="flex items-center gap-4 p-2">
                    <Images src={profile} size={40} />
                    <div className="flex w-full items-center justify-between">
                        <div>
                            <p className="text-sm text-slate-500">Welcome.</p>
                            <span className="text-base text-slate-200">SW Developer</span>
                        </div>
                        <span className="text-base text-slate-200">
                            <i className="xi-angle-down-min cursor-pointer"></i>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}
