This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Project

-   Framework: `Next.js` + `Tailwind CSS`
-   Library:
    -   `chart.js`
    -   `react-chartjs-2`
    -   `react-error-boundary`
-   Description: 대시보드 레이아웃 프로젝트

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Issue & Note

-   **[Console]** `intercepted a request without a matching request handler`

    ```
    [MSW] Warning: intercepted a request without a matching request handler:

    • GET /menu2
    ```

    -   MSW v0.20.0 에 도입
    -   해결
        ```
        worker.start({
            onUnhandledRequest: "bypass",  //처리되지 않은 요청을 무시하고 통과
        })
        ```

-   MSW 활성화

    -   MSW 실행 시 서버, 브라우저 환경 분기 처리 : `server.ts`, `browsers.ts`

        -   브라우저: worker 실행
        -   서버 : server 실행

    -   `layout.tsx` 하위에서 msw 동작
        -   page.tsx 외부에서 initMSW() 명시적 실행 : `MSWComponent.tsx`
            -   `MSWComponent.tsx` 내부에서 MSW 초기화 제어 시(initMSW() 상태 관리) 콘솔 Warning 발생
                ```
                Found a redundant "worker.start()" call. Note that starting the worker while mocking is already enabled will have no effect. Consider removing this "worker.start()" call.
                ```

## Note For Study

-   fetch 함수 VS react-query

    ```
    // 페이지가 마운트될 때 API 호출
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch("/api/list")
                const data = await res.json()
                console.log("data:: ", data)
            } catch (error) {
                console.error(error)
            }
        }

        fetchData()
    }, [])
    ```

    ```
    export const useFetch = (key: ReactQueryConfig, options?: UseQueryOptions) => {
        return useQuery({
        queryKey: [key],
        queryFn: () => commonRequest({ ...key, method: "GET" }),
        enabled: !!key,
        retry: false,
        ...options,
        })
    }

    const data1 = useFetch({ url: "/api/list" })
    ```

## Deploy on Vercel
