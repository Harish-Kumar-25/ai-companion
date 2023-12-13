export type indexConfig = typeof indexConfig
import { Home, Plus, Settings } from "lucide-react"
import { Inter as FontSans } from "next/font/google"


export const fontSans = FontSans({
    subsets: ["latin"],
    variable: "--font-sans",
})

export const indexConfig = {

    name: "AI Companion",
    description: "Make beautiful websites regardless of your design experience.",

    navItems: [
        {
            icon: Home,
            label: 'Home',
            href: '/',
            pro: false
        },
        {
            icon: Plus,
            label: 'Create',
            href: '/companion/new',
            pro: true
        },
        {
            icon: Settings,
            label: 'Settings',
            href: '/settings',
            pro: false
        },
    ]

}