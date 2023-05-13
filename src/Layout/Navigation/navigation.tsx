import styles from './navigation.module.scss'
import logo from '../../../public/main-logo.svg'
import CustomSelect from '../../Components/Custom_select/custom_select'
import Fixed from '../../Components/Fixed_menu/fixed'

const Navigation = () => {

    return (
        <div className={styles.navigation}>
            <header className={`${styles.header} bg`}>
                <nav className={styles.nav}>
                    <div className={styles.logo}>
                        <img src={logo} alt="logo" />
                    </div>
                    <div className={styles.menu}>
                        the menu
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