import { createContext, useState } from "react";
import { ChildrenNode, ID } from './type'

export const CurrentIdContext = createContext<ID>({
    result: {},
    setResult: (e: {}) => e,
    iframeKey: '',
    setIframeKey: (e) => e,
    show: false,
    setShow: (e) => e
})

export const CurrentIdProvider = ({ children }: ChildrenNode) => {

    const [result, setResult] = useState<object>({})
    const [iframeKey, setIframeKey] = useState('')
    const [show, setShow] = useState(false)

    const values = { result, setResult, iframeKey, setIframeKey, show, setShow }
    return (
        <CurrentIdContext.Provider value={values}>{children}</CurrentIdContext.Provider>
    )
}