import { childrenNode } from './types'
import styles from './container.module.scss'

const Container = ({ children, variant }: childrenNode) => {
    return (
        <div className={variant ? styles.containerAlt : styles.container}>
            {children}
        </div>
    )
}

export default Container