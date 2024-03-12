import type { Config } from "tailwindcss"

const px0_10: { [key: number]: string } = { ...Array.from(Array(11)).map((_, i) => `${i}px`) }

const config: Config = {
    content: ["./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
    theme: {
        extend: {
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
            fontFamily: {
                roboto: ["var(--roboto)"],
            },
            container: {
                padding: "2rem",
            },
            /** Arbitrary values customizing */
            borderWidth: px0_10,
        },
    },
    plugins: [],
    /** 기본 스타일 무효화 */
    // corePlugins: {
    //     preflight: false,
    // },
}
export default config
