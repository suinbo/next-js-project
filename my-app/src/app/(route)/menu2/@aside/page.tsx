"use client"

import Widget from "@/app/_components/Widget"
import { datas } from "@/app/_mocks/constant"
import { commonRequest } from "@/app/_utils/apis/request"
import { addCommaOnNum } from "@/app/_utils/constant"
import { chatbot, person, visa } from "@/asset/images"
import Image, { StaticImageData } from "next/image"
import { useRef, useState } from "react"

export default function Aside() {
    const divRefs = useRef<HTMLDivElement>(null)
    const [openWidget, setOpenWidget] = useState<boolean>(false)

    /** axios 사용 */
    commonRequest({ url: "/api/list" }).then(res => {
        console.log("res:: ", res)
    })

    /** fetch 사용 */
    // useEffect(() => {
    //     // 페이지가 마운트될 때 API를 호출하여 데이터를 가져옴
    //     const fetchData = async () => {
    //         try {
    //             const res = await fetch("/api/list") // API 경로를 사용하여 데이터 가져옴
    //             const data = await res.json()
    //             console.log("data:: ", data)
    //         } catch (error) {
    //             console.error(error)
    //         }
    //     }

    //     fetchData()
    // }, [])

    const TransactionList = () => {
        const iconElement: { [key: string]: React.ReactElement } = {
            plus: <i className="xi-plus-circle xi-x text-red-500"></i>,
            minus: <i className="xi-minus-circle xi-x text-blue-500"></i>,
        }

        return datas.map(({ place, type, won, description }, index) => (
            <div key={index} className="mb-8 mr-8 flex items-center justify-between">
                <div className="flex items-center gap-7">
                    <span>{iconElement[type]}</span>
                    <div className="flex flex-col">
                        <span>{place}</span>
                        <span className="text-xs text-slate-500">{description}</span>
                    </div>
                </div>
                <div>
                    <span className="text-slate-200">₩ {addCommaOnNum(won)}</span>
                </div>
            </div>
        ))
    }

    const ImageElement = ({ src, alt, customStyle }: { src: StaticImageData; alt: string; customStyle?: string }) => (
        <Image
            src={src}
            alt={alt}
            className="relative left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] transform"
        />
    )

    return (
        <>
            <div className="m-4 flex flex-col gap-4 text-slate-300">
                <div className="m-3 flex items-center justify-between" ref={divRefs}>
                    <div className="ml-1.5 flex cursor-pointer" onClick={() => setOpenWidget(!openWidget)}>
                        <i className="xi-bell xi-x"></i>
                        <span className="right-0 h-[4px] w-[4px] rounded-xl bg-red-500"></span>
                    </div>
                    <div className="flex items-center gap-6">
                        <span>Suin Hwangbo</span>
                        <span className="h-[40px] w-[40px] rounded-xl bg-[#5a8df9]">
                            <ImageElement src={person} alt="프로필이미지" />
                        </span>
                    </div>
                </div>
                <div className="m-3 rounded-3xl bg-gradient-to-br from-[#fba4ac] via-[#c3a0f1] to-[#7a95e7] p-8 text-blue-50">
                    <div className="flex flex-col gap-8">
                        <div className="flex items-start justify-between">
                            <span>ID 123.456.789</span>
                            <Image src={visa} alt="비자카드" className="absolute right-[70px] opacity-55" />
                        </div>
                        <div className="flex flex-col gap-2">
                            <span>Your Money</span>
                            <span className="text-3xl font-bold text-white">₩ 50,000</span>
                        </div>
                    </div>
                </div>
                <div className="m-3">
                    <div className="flex flex-col gap-8">
                        <p className="text-lg font-semibold">Last Transaction</p>
                        <div className="h-[420px] overflow-scroll overflow-x-hidden">
                            <TransactionList />
                        </div>
                    </div>
                </div>
                <div className="relative bottom-[15px] left-[326px] h-[60px] w-[60px] cursor-pointer rounded-full shadow-[0_0_8px_0_rgba(0,0,0,0.1)] shadow-slate-500/40">
                    <ImageElement src={chatbot} alt="챗봇" />
                </div>
            </div>
            {openWidget && <Widget type="info" />}
        </>
    )
}
