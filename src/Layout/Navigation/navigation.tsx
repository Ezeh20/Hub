import { useContext } from 'react'
import styles from './navigation.module.scss'
import { ThemeContext } from '../../Context/theme_context'

const Navigation = () => {
    const { theme, setTheme } = useContext(ThemeContext)
    console.log(theme)
    return (
        <div className={styles.navigation}>
            <p>navigation</p>
            <select value={theme} onChange={(e) => setTheme(e.target.value)}>
                <option value={`light`}>Light</option>
                <option value={`dark`}>Dark</option>
            </select>
        </div>
    )
}

export default Navigation