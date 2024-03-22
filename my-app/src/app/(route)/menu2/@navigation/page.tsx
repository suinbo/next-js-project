"use client"

import { Menus } from "@/app/_mocks/constant"
import { logo, profile } from "@/asset/images"
import Image from "next/image"
import { useState } from "react"

type ActiveMenuProp = {
    id: string,
    name: string
}

export default function Navigation() {
    const [activeMenu, setActiveMenu] = useState<ActiveMenuProp>(Menus[0])

    const MenuList = () => Menus.map(({id, name}) => {
        const isActive = activeMenu.id == id

        return (
            <li key={id} className={`flex font-roboto font-medium m-5 mr-0 h-[40px] pr-0 cursor-pointer ${isActive ? "text-slate-300" : "text-slate-500"} hover:text-slate-300`}>
                <div className="flex items-center w-full relative overflow-hidden">
                    <span>
                        <i className="xi-equalizer mr-4"/>
                        {name}
                    </span>
                    {isActive && (
                        <span className="absolute right-[-16px] w-[36px] h-[36px] bg-[#25294a] rounded-3xl">
                            <span className="absolute top-[40%] left-[25%] w-[8px] h-[8px] bg-[#4fe5e6] rounded-3xl"/>
                        </span>
                    )}
                </div>
            </li>
        )}
    )

    return (
        <div className="flex flex-col h-full">
            <div className="m-4 flex-[0.1]">
                <div className="flex p-5 gap-4 items-center cursor-pointer">
                    <Image src={logo} alt="logo" width={30} height={30}/>
                    <span className="font-bold font-roboto text-2xl text-slate-200 tracking-wider">ThisIsLogo</span>
                </div>
            </div>
            <div className="m-4 mr-0 flex-1">
                <ul>
                    <MenuList />
                </ul>
            </div>
            <div className="p-4 flex-[0.1] border-t border-slate-600">
                <div className="flex p-2 gap-4 items-center">
                    <Image src={profile} alt="logo" width={40} height={40}/>
                    <div className="flex w-full justify-between items-center">
                        <div>
                            <p className="text-sm text-slate-500">
                                Welcome.
                            </p>
                            <span className="text-base text-slate-200">
                                SW Developer
                            </span>
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