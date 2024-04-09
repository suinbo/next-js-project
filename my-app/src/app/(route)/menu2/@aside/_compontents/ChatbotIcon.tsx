import Image, { StaticImageData } from "next/image"

export default function ChatbotIcon({ src, alt }: { src: StaticImageData; alt: string }) {
    return (
        <Image
            src={src}
            alt={alt}
            className="relative left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] transform"
        />
    )
}
