import { app, group, setting } from "@/asset/images"
import Image from "next/image"

export default function Section1() {
    const CardList = () =>
        [
            { image: app, color: "bg-[#9f32ff]", title: "App" },
            { image: group, color: "bg-[#ff9417]", title: "Group" },
            { image: setting, color: "bg-[#f730ee]", title: "Setting" },
        ].map(({ image, color, title }, index) => (
            <li key={color} className="w-[calc((100%-16px)/3)] rounded-3xl bg-[#292e54] p-7">
                <div className="flex items-center gap-8">
                    <div className={`h-[50px] w-[50px] ${color} rounded-xl`}>
                        <Image
                            src={image}
                            alt="app"
                            className="relative left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] transform"
                        />
                    </div>
                    <div className="flex flex-col">
                        <span className="text-sm text-slate-500">{title}</span>
                        <span className="text-3xl font-bold">{(index + 1) * 1000}</span>
                    </div>
                </div>
            </li>
        ))

    return (
        <section>
            <ul className="m-3 flex gap-6">
                <CardList />
            </ul>
        </section>
    )
}
