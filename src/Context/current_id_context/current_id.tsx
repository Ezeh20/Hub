import { createContext, useEffect, useState } from "react";
import { ChildrenNode, ID } from './type';


export const MediaIdContext = createContext<ID>({
    mediaId: 0,
    setMediaId: (e: number) => e
})

export const MediaIdProvider = ({ children }: ChildrenNode) => {

    const [mediaId, setMediaId] = useState<number>(0)

    useEffect(() => {
        localStorage.setItem('mediaUIDD', JSON.stringify(mediaId))
    }, [mediaId])

    const value = { mediaId, setMediaId }
    return (
        <MediaIdContext.Provider value={value}>{children}</MediaIdContext.Provider>
    )
}
