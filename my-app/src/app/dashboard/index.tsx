import Link from "next/link"

export default function Dashboard({ children }: { children?: React.ReactNode }) {
    return (
        <section>
            <Link href="/">Home</Link>
            <Link href="/menu1">Menu 1</Link>
            <Link href="/menu2">Menu 2</Link>
            {children}
        </section>
    )
}
