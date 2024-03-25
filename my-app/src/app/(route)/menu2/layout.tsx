import React from 'react'

export default function Layout({ 
    navigation, 
    content, 
    aside 
}: { 
    navigation: React.ReactNode, 
    content: React.ReactNode, 
    aside: React.ReactNode 
}) {
    return (
        <div className="flex">
            <nav className="w-[15%] h-[100vh] bg-[#202442]">
                {navigation}
            </nav>
            <div className="w-[62%] bg-[#25294a]">
                {content}
            </div>
            <aside className="w-[23%] bg-[#202442]">
                {aside}
            </aside>
        </div>
    )
}
