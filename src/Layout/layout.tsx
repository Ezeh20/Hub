import { ReactNode } from "react"
//import Footer from "./Footer/footer"
import Navigation from "./Navigation/navigation"
import styles from './layout.module.scss'


type node = {
    children: ReactNode
}
const Layout = ({ children }: node) => {
    return (
        <div className={styles.layout}>
            <Navigation />
            {children}
            {/**<Footer /> */}
        </div>
    )
}

export default Layout