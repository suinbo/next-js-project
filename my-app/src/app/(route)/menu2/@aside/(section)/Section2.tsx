import { visa } from "@/asset/images"
import Image from "next/image"

export default function Section2() {
    return (
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
    )
}
