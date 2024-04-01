async function initMSW() {
    if (typeof window === "undefined") {
        console.log("server")
        const { server } = await import("./server")

        // 노드 환경에서 사용하는 Mock Server 옵션 추가
        server.listen()
    } else {
        console.log("browsers")
        let { worker } = await import("./browsers")

        /**
         * Service Worker Mocking 옵션 [onUnhandledRequest]
         * @option bypass : 처리되지 않은 요청을 실제 서버로 전달
         * @option error : 처리되지 않은 요청에 대해 오류를 반환
         */
        worker.start({
            onUnhandledRequest: "bypass",
        })
    }
}

export { initMSW }
