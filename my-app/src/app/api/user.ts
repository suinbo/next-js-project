import { NextApiRequest, NextApiResponse } from "next"

//TODO: 개발 환경에서는 MSW 모킹 API 동작
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        console.log(req)
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: "Internal server error" })
    }
}
