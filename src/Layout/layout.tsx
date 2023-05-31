import { ReactNode } from "react"
import Navigation from "./Navigation/navigation"
import styles from './layout.module.scss'
import Fixed from "../Components/Fixed_menu/fixed"

type node = {
    children: ReactNode
}
const Layout = ({ children }: node) => {
    return (
        <div className={styles.layout}>
            <Navigation />
            {children}
            <Fixed />
        </div>
    )
}

export default Layout