import { transactions } from "@/app/_mocks/constant"
import { addCommaOnNum } from "@/app/_utils/constant"
import { chatbot, person } from "@/asset/images"
import Image from "next/image"

export default function Aside() {
    const TransactionList = () => {
        const iconElement: { [key: string]: React.ReactElement } = {
            plus: <i className="xi-plus-circle xi-2x text-red-500"></i>,
            minus: <i className="xi-minus-circle xi-2x text-blue-500"></i>,
        }

        return transactions.map(({ place, type, won }, index) => (
            <li key={index} className="mb-7 mr-8 flex items-center justify-between">
                <span className="flex gap-8">
                    {iconElement[type]}
                    <a href="">{place}</a>
                </span>
                <span>
                    <a>₩ {addCommaOnNum(won)}</a>
                </span>
            </li>
        ))
    }

    return (
        <div className="m-4 flex flex-col gap-4 text-slate-300">
            <div className="m-3 flex items-center justify-between">
                <div className="flex cursor-pointer">
                    <i className="xi-bell xi-x"></i>
                    <span className="right-0 h-[4px] w-[4px] rounded-xl bg-red-500"></span>
                </div>
                <div className="flex items-center gap-6">
                    <span>Suin Hwangbo</span>
                    <span className="h-[40px] w-[40px] rounded-xl bg-[#5a8df9]">
                        <Image
                            src={person}
                            alt="프로필이미지"
                            className="relative left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] transform"
                        />
                    </span>
                </div>
            </div>
            <div className="m-3 rounded-3xl bg-gradient-to-br from-[#fba4ac] to-[#8099e6] p-8 text-blue-50">
                <div className="flex flex-col gap-8">
                    <div>ID 123.456.789</div>
                    <div className="flex flex-col gap-2">
                        <span>Your Money</span>
                        <span className="text-3xl font-bold text-white">₩ 50,000</span>
                    </div>
                </div>
            </div>
            <div className="m-3">
                <div className="flex flex-col gap-8">
                    <p className="text-xl">Last Transaction</p>
                    <div>
                        <ul className="h-[420px] overflow-scroll overflow-x-hidden">
                            <TransactionList />
                        </ul>
                    </div>
                </div>
            </div>
            <div className="bottom-[14px] left-[326px] h-[60px] w-[60px] cursor-pointer rounded-full shadow-[0_0_8px_0_rgba(0,0,0,0.1)] shadow-slate-500/40">
                <Image
                    src={chatbot}
                    alt="챗봇"
                    className="relative left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] transform"
                />
            </div>
        </div>
    )
}
