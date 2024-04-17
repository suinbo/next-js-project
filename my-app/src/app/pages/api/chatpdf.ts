import { instance, instanceConfig } from "@/app/_utils/apis/request"
import { AxiosError, AxiosResponse } from "axios"

const apiRequest = (req: instanceConfig) => {
    return instance(req)
        .then((response: AxiosResponse<any, any>) => {
            const { data, headers } = response
            return { data, headers }
        })
        .catch((error: AxiosError) => {
            console.log(error)
        })
}

export const chatPDFRequest = async (config: any) => {
    const { /*key,*/ ...apiConfig } = config

    const options = Object.assign(apiConfig, {
        baseURL: "https://api.chatpdf.com",
        method: "POST",
        headers: {
            "x-api-key": process.env.NEXT_PUBLIC_API_KEY,
        },
    })

    const response = await apiRequest(options)
    return response?.data ?? []
}

export async function getSourceId(req: FormData) {
    return chatPDFRequest({ url: "/v1/sources/add-file", data: req })
}

export async function getChatAnswer(sourceId: string, content: string) {
    return chatPDFRequest({
        url: "/v1/chats/message",
        data: {
            sourceId,
            messages: [
                {
                    role: "user",
                    content,
                },
            ],
        },
    })
}

/** 커스텀 훅 */
// export const useSourceId = (req: FormData) => {
//     const [sourceId, setSourceId] = useState(null)

//     useEffect(() => {
//         const fetchSourceId = async () => {
//             const response = await chatPDFRequest({ url: "/v1/sources/add-file", data: req })
//             setSourceId(response?.sourceId)
//         }

//         fetchSourceId()
//     }, [req])

//     return sourceId
// }
