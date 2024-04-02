import { SetStateAction, useEffect, useRef } from "react"

const SELECTION_ID = "selection"

export type SelectorItem = {
    id: string
    name: string
}

export default function Selectbox({
    items = [],
    style: { top, left, width },
    setActive,
    setSelectedItem,
}: {
    items?: SelectorItem[]
    setSelectedItem: React.Dispatch<SetStateAction<SelectorItem>>
    style: { top: number; left: number; width: number }
    setActive: (state: boolean) => void
}) {
    const selectBoxRef = useRef<HTMLDivElement>(null)

    /** 외부 영역 클릭 시 숨김 처리 */
    useEffect(() => {
        const isOutsideClick = (e: MouseEvent) => {
            e.stopPropagation()
            const target = e.target as Element

            if (!selectBoxRef.current?.contains(target) || target.id.includes(SELECTION_ID)) {
                setActive(false)
            }
        }

        !!window && window.addEventListener("click", isOutsideClick)

        return () => {
            if (!window) return
            window.removeEventListener("click", isOutsideClick)
        }
    }, [])

    const ItemList = () => (
        <ul>
            {items.map(item => (
                <li
                    id={`${SELECTION_ID}_${item.id}`}
                    key={item.id}
                    className="cursor-pointer p-2 text-xs text-slate-400 hover:text-slate-100"
                    onClick={() => {
                        setSelectedItem(item)
                    }}>
                    {item.name}
                </li>
            ))}
        </ul>
    )

    return (
        <div className="absolute rounded-xl bg-[#202442] p-2" ref={selectBoxRef} style={{ top, left, width }}>
            <ItemList />
        </div>
    )
}
