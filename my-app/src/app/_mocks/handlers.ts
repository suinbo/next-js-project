import { HttpResponse, RequestHandler, RequestHandlerOptions, ResponseResolver, http } from "msw"

type RequestHandlerInternalInfo = { header: string; method: string; path: string }

export class CustomRequestHandler extends RequestHandler {
    constructor(method: string, path: string, resolver: ResponseResolver<any, any>) {
        super({
            info: {
                header: `${method} ${path}`,
                method,
                path,
            } as RequestHandlerInternalInfo,
            resolver,
        })
    }

    // 'predicate' 메서드 구현
    predicate(req: any): boolean {
        const info = this.info as RequestHandlerInternalInfo

        // 이 메서드는 요청이 해당 핸들러에 대해 적합한지 여부를 결정하는 데 사용됩니다.
        // 여기서는 요청의 메서드와 경로를 비교하여 해당하는 경우에 true를 반환하도록 구현합니다.
        return req.method === info.method && req.url.pathname === info.path
    }

    // 'log' 메서드 구현
    log(req: any, error?: any): void {
        // 이 메서드는 요청에 대한 로그를 기록하는 데 사용됩니다.
        // 예를 들어, 요청 메서드와 경로를 출력하거나, 오류가 있는 경우 오류를 기록할 수 있습니다.
        console.log(`Handling ${req.method} ${req.url}`)
    }
}

// export const handlers = [
//     http.get("/user/", ({ request, params, cookies }) => {
//         return HttpResponse.json({ name: "John Maverick" })
//     }),
// ]

export const handlers = new CustomRequestHandler("GET", "/user", ({ request, params, cookies }) => {
    return HttpResponse.json({ name: "John Maverick" })
})
