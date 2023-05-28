import styles from './fixed.module.scss'
import menuDataFixed from './data'
import { NavLink } from 'react-router-dom'


const Fixed = () => {
    return (
        <div className={`${styles.fixed} bg`}>
            {
                menuDataFixed.map(itm => {
                    const { id, icon, text, to } = itm
                    return (
                        <ul key={id} className={styles.ul}>
                            <li className={styles.li}>
                                <NavLink to={to} className={({ isActive }) => {
                                    return isActive
                                        ? `${`${styles.lists} ${styles.active}`}`
                                        : `${styles.lists} textFixed`
                                }}>
                                    <div className={`${styles.spann}`}>
                                        <span className={`${styles.icon}`}>{icon}</span>
                                        <span className={styles.text}>{text}</span>
                                    </div>
                                </NavLink>
                            </li>
                        </ul>
                    )
                })
            }
        </div >
    )
}

export default Fixed