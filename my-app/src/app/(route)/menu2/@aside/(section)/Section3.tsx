import { useIntersect } from "@/app/_hooks/useIntersect"
import { useFetchUsers } from "@/app/_utils/apis/request"
import { addCommaOnNum } from "@/app/_utils/constant"
import { useEffect, useState } from "react"

type ListProp = {
    id: string
    place: string
    type: string
    won: number
    description: string
}

export default function Section3() {
    const [list, setList] = useState<ListProp[]>([])
    const { data, isFetching, hasNextPage, fetchNextPage, isFetchingNextPage } = useFetchUsers({
        url: `/api/list`,
        params: { id: 1 },
    })

    useEffect(() => {
        if (data) {
            const { pageParams, pages } = data
            setList(prev => [...prev, ...pages[pageParams.length - 1]])
        }
    }, [data])

    /** observer 스크롤 감지 후 API 호출 */
    const ref = useIntersect(
        async (entry, observer) => {
            observer.unobserve(entry.target)
            fetchNextPage()

            // if (hasNextPage && !isFetchingNextPage) {
            //     fetchNextPage()
            // }
        },
        { threshold: 0 }
    )

    const TransactionList = () => {
        const iconElement: { [key: string]: React.ReactElement } = {
            plus: <i className="xi-plus-circle xi-x text-red-500"></i>,
            minus: <i className="xi-minus-circle xi-x text-blue-500"></i>,
        }

        return list.map(({ place, type, won, description }, index) => (
            <div key={index} className="mb-8 mr-8 flex items-center justify-between">
                <div className="flex items-center gap-7" ref={ref}>
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

    return (
        <div className="m-3">
            <div className="flex flex-col gap-8">
                <p className="text-lg font-semibold">Last Transaction</p>
                <div className="h-[420px] overflow-scroll overflow-x-hidden">
                    <TransactionList />
                </div>
            </div>
        </div>
    )
}
