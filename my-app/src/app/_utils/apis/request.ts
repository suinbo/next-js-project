import { UseQueryOptions, useInfiniteQuery, useQuery, useSuspenseQueries } from "@tanstack/react-query"
import axios, { AxiosError, AxiosRequestConfig, AxiosResponse, Method } from "axios"

export type instanceConfig = {
    baseURL: string
} & Partial<AxiosRequestConfig>

export const instance = axios.create({
    baseURL: "",
    timeout: 60000,
})

type HeaderConfig = {
    "x-api-key": string
}

type ReactQueryConfig = {
    url?: string
    params?: any
    method?: Method
    key?: string
    headers?: HeaderConfig
}

const apiRequest = (req: instanceConfig) => {
    return instance(req)
        .then((response: AxiosResponse<any, any>) => {
            const {
                data: { data, code, detailMessage },
                headers,
            } = response

            switch (code) {
                case 200:
                    return { data, headers }
                default:
                    throw new Error(detailMessage)
            }
        })
        .catch((error: AxiosError) => {
            console.log(error)
            //throw new Error(error.message)
        })
}

export const commonRequest = async (config: ReactQueryConfig) => {
    const { /*key,*/ ...apiConfig } = config
    //const token = cookie.getItem(cookie.keys.credential)

    const options = Object.assign(apiConfig, {
        baseURL: "",
        headers: Object.assign(
            {
                //Authorization: `Bearer ${encodeURIComponent(token)}`,
                "Access-Control-Allow-Headers": "x-auth-token",
            },
            config.headers
        ),
    })

    const response = await apiRequest(options)
    //token && cookie.setItem({ key: cookie.keys.credential, value: token })
    return response?.data ?? []

    // return await apiRequest(options).then(response => {
    //     //token && cookie.setItem({ key: cookie.keys.credential, value: token })
    //     return response?.data ?? []
    // })
}

/** API Request Hook */
export const useFetch = (key: ReactQueryConfig, options?: UseQueryOptions) => {
    return useQuery({
        queryKey: [key],
        queryFn: () => commonRequest({ ...key, method: "GET" }),
        enabled: !!key,
        retry: false,
        ...options,
    })
}

export const useSuspenseFetches = (keys: ReactQueryConfig[], options?: UseQueryOptions) => {
    // useQueries와 동일
    // V5 부터 suspense: boolean 옵션 제거
    return useSuspenseQueries({
        queries: keys.map(key => ({
            queryKey: [key],
            queryFn: () => commonRequest({ ...key, method: "GET" }),
            retry: false,
            ...options,
        })),
    })
}

export const useFetchUsers = (key: ReactQueryConfig) => {
    return useInfiniteQuery({
        queryKey: [key],
        queryFn: req => commonRequest({ ...key, method: "GET", params: { page: req.pageParam } }),
        initialPageParam: 1,
        // 다음 페이지 유무
        getNextPageParam: lastPageData => {
            return lastPageData[lastPageData.length - 1].id / 10 + 1
        },
    })
}

export const usePost = (key: ReactQueryConfig, options?: UseQueryOptions) => {
    return useQuery({
        queryKey: [key],
        queryFn: () => commonRequest({ ...key, method: "POST", params: key.params }),
        enabled: !!key,
        retry: false,
        ...options,
    })
}
