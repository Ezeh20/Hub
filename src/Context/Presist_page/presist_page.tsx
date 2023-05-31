import { ReactNode, createContext, useEffect, useState } from "react";

type ChildrenNode = {
    children: ReactNode
}

type States = {
    page: number,
    setPage: React.Dispatch<React.SetStateAction<number>>
}


export const PageCountContext = createContext<States>({
    page: 1,
    setPage: (e) => e
})


export const PageCountContextProvider = ({ children }: ChildrenNode) => {
    const storage: any = localStorage.getItem('CurrentPageCJ')
    const thePage = JSON.parse(storage)
    const [page, setPage] = useState<number>(thePage ?? 1)

    useEffect(() => {
        localStorage.setItem('CurrentPageCJ', JSON.stringify(page))
    }, [thePage, page])

    const values = { page, setPage }

    return (
        <PageCountContext.Provider value={values}>{children}</PageCountContext.Provider>
    )
}