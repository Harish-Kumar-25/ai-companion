"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function ModeToggle() {
    const { theme, setTheme } = useTheme()

    const toggleTheme = () => {
        if (theme === 'light') {
            setTheme('dark');
        } else {
            setTheme('light');
        }
    }

    return (
        <div className="">
            <Button variant='secondary' size='icon' onClick={toggleTheme}>
                {theme === 'light' ?
                 <Moon className="absolute h-[1.2rem] w-[1.2rem] " />
                :
                <Sun className="absolute h-[1.2rem] w-[1.2rem] " />
            }
            </Button>
        </div>
       
    )
}
