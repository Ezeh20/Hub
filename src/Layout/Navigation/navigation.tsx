import styles from './navigation.module.scss'
import logo from '../../../public/main-logo.svg'
import CustomSelect from '../../Components/Custom_select/custom_select'
import { Link, NavLink } from 'react-router-dom'
import menuData from './data'

const Navigation = () => {

    return (
        <div className={styles.navigation}>
            <header className={`${styles.header}`}>
                <nav className={styles.nav}>
                    <Link className={styles.logo} to='/'>
                        <img src={logo} alt="logo" />
                    </Link>
                    <div className={styles.menu}>
                        {
                            menuData.map(itm => {
                                const { id, text, to } = itm
                                return (
                                    <ul className={styles.ul} key={id}>
                                        <li className={styles.li}>
                                            <NavLink key={id} to={to} className={({ isActive }) => {
                                                return isActive
                                                    ? `${`${styles.link} ${styles.active}`}`
                                                    : `${styles.link}`
                                            }}>
                                                <p>{text}</p>
                                            </NavLink>
                                            <div className={styles.line} />
                                        </li>
                                    </ul>
                                )
                            })
                        }
                    </div>
                    <CustomSelect />
                </nav>
            </header>


        </div>
    )
}

export default Navigation

/**
 * <select value={theme} onChange={(e) => setTheme(e.target.value)}>
                <option value={`light`}>Light</option>
                <option value={`dark`}>Dark</option>
            </select>
 */