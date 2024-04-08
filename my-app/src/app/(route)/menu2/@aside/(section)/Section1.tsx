import Widget from "@/app/_components/Widget"
import { person } from "@/asset/images"
import Image, { StaticImageData } from "next/image"
import { useState } from "react"

export default function Section1() {
    const [openWidget, setOpenWidget] = useState<boolean>(false)

    const ImageElement = ({ src, alt }: { src: StaticImageData; alt: string }) => (
        <Image
            src={src}
            alt={alt}
            className="relative left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] transform"
        />
    )

    return (
        <>
            <div className="m-3 flex items-center justify-between">
                <div className="ml-1.5 flex cursor-pointer" onClick={() => setOpenWidget(!openWidget)}>
                    <i className="xi-bell xi-x"></i>
                    <span className="right-0 h-[4px] w-[4px] rounded-xl bg-red-500"></span>
                </div>
                <div className="flex items-center gap-6">
                    <span>Suin Hwangbo</span>
                    <span className="h-[40px] w-[40px] rounded-xl bg-[#5a8df9]">
                        {/* {imageElement({ src: person, alt: "프로필이미지" })} */}
                        <ImageElement src={person} alt="프로필이미지" />
                    </span>
                </div>
            </div>
            {openWidget && <Widget type="info" />}
        </>
    )
}
