import { app, group, setting } from "@/asset/images"
import Image from "next/image"

export default function Section1() {
    const CardList = () => [
            { image: app, color: "bg-[#9f32ff]", title: "App" }, 
            { image: group, color: "bg-[#ff9417]", title: "Group" }, 
            { image: setting, color: "bg-[#f730ee]", title: "Setting" }, 
        ].map(({ image, color, title }, index) => 
        <li key={color} className="w-[calc((100%-16px)/3)] bg-[#292e54] rounded-3xl p-7">   
            <div className="flex gap-8 items-center">
                <div className={`w-[50px] h-[50px] ${color} rounded-xl`}>
                    <Image src={image} alt="app" className="relative top-1/2 left-1/2 transform translate-x-[-50%] translate-y-[-50%]"/>
                </div>
                <div className="flex flex-col">
                    <span className="text-slate-500 text-sm">{title}</span>
                    <span className="text-3xl font-bold">{(index + 1) * 1000}</span>
                </div>
            </div>
        </li>
    )

    return (
        <section>
            <ul className="flex m-3 gap-6">
                <CardList />
            </ul>
        </section>
    )
}