import { HttpResponse, http } from "msw"
import { datas } from "./constant"

export const handlers = [
    http.get("/api/list", ({ request }) => {
        const url = new URL(request.url)
        const page = parseInt(url.searchParams.get("page") as string)

        return HttpResponse.json({
            data: datas.map((item, index) => ({ id: (page - 1) * 10 + index + 1, ...item })),
            code: 200,
            detailMessage: "hi",
        })
    }),
]
