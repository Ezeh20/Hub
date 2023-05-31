import { createContext, useEffect, useState } from "react";

import { values, childrenNode } from './types'

export const ThemeContext = createContext<values>({
    theme: 'dark',
    setTheme: (e: string) => e,
})

export const ThemeContextProvider = ({ children }: childrenNode) => {
    //get the current state saved in localStorage
    const currentTheme = localStorage.getItem('cjMovies-Theme')
    //set the initial state to 'light' if the Countries-Theme key exists in localStorage
    const [theme, setTheme] = useState(currentTheme ?? 'dark')

    //presist the theme state in local storage
    useEffect(() => {
        localStorage.setItem('cjMovies-Theme', theme)
    }, [theme])

    const value = { theme, setTheme }
    return (
        <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
    )
}