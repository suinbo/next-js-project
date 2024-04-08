import { useCallback, useEffect, useRef, useState } from "react"

type IntersectHandler = (entry: IntersectionObserverEntry, observer: IntersectionObserver) => void

/**
 * Intersecton Observer 커스텀 훅
 * @param onIntersect
 * @param options
 * - scroll 영역 안에서 옵저버 사용시 스크롤 영역 자체를 root로 사용
 * - observer: 스크롤 영역 내의 요소들이 스크롤되는 동안 교차하는 상태를 관찰
 *
 * @returns ref
 */
export const useIntersect = (onIntersect: IntersectHandler, options?: IntersectionObserverInit) => {
    const ref = useRef<HTMLDivElement>(null)

    const callback = useCallback(
        (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    onIntersect(entry, observer)
                }
                // observer.unobserve(entry.target)
            })
        },
        [onIntersect]
    )

    useEffect(() => {
        if (!ref.current) return
        const observer = new IntersectionObserver(callback, options)
        observer.observe(ref.current)

        return () => observer.disconnect()
    }, [ref, options, callback])

    return ref
}
