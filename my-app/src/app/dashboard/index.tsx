import Link from "next/link"

export default function Dashboard({ children }: { children?: React.ReactNode }) {
    return (
        <section>
            <nav>
                <Link href="/">Home</Link>
            </nav>
            <nav>
                <Link href="/menu1">Menu 1</Link>
            </nav>
            <nav>
                <Link href="/menu2">Menu 2</Link>
            </nav>
            {children}
        </section>
    )
}
