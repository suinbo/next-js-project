import { useState } from "react"

export default function SearchBox() {
    const [inputValue, setInputValue] = useState<string>("")
    
    return (
        <div className="flex justify-between items-center w-[60%] bg-[#202442] rounded-full px-8 py-4">
            <input 
                type="text" 
                className="bg-transparent w-[95%]"
                value={inputValue} 
                onChange={e => setInputValue(e.target.value)}
            />
            <i className="xi-search xi-x text-slate-600 hover:text-slate-300"></i>
        </div>
    )
}