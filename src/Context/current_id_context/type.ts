
import { ReactNode } from 'react'

export type ChildrenNode = {
    children: ReactNode
}
export type ID = {
    result: {},
    setResult: React.Dispatch<React.SetStateAction<{}>>,
    iframeKey: string,
    setIframeKey: React.Dispatch<React.SetStateAction<string>>,
    show: boolean,
    setShow: React.Dispatch<React.SetStateAction<boolean>>
}

