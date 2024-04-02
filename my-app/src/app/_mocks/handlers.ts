import { HttpResponse, http } from "msw"
import { datas } from "./constant"

export const handlers = [
    http.get("/api/list", ({ request, params, cookies }) => {
        return HttpResponse.json({ data: Array(10).fill(datas).flat(), code: 200, detailMessage: "hi" })
    }),
]
