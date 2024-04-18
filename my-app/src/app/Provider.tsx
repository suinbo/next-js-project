"use client"

import React from "react"
import { HydrationBoundary, QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { RecoilRoot } from "recoil"

export default function Provider({ children }: { children: React.ReactElement }) {
    const queryClient = new QueryClient({
        defaultOptions: {
            queries: {
                refetchOnWindowFocus: false,
            },
        },
    })

    return (
        <RecoilRoot>
            <QueryClientProvider client={queryClient}>
                <HydrationBoundary>{children}</HydrationBoundary>
            </QueryClientProvider>
        </RecoilRoot>
    )
}
