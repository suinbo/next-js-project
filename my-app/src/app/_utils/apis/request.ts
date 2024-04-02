import axios, { AxiosError, AxiosRequestConfig, AxiosResponse, Method } from "axios"

export type instanceConfig = {
    baseURL: string
} & Partial<AxiosRequestConfig>

export const instance = axios.create({
    baseURL: "",
    timeout: 60000,
})

type HeaderConfig = {
    regionCd?: string
    langCd?: string
    ctsLangCd?: string
    adminId?: string
    Authorization?: string
    "Access-Control-Allow-Headers"?: string
    "content-type"?: string
}

type ReactQueryConfig = {
    url?: string
    data?: any
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
