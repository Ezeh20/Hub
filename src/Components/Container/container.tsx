import { childrenNode } from './types'
import styles from './container.module.scss'

const Container = ({ children }: childrenNode) => {
    return (
        <div className={styles.container}>
            {children}
        </div>
    )
}

export default Container