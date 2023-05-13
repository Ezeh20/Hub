import { useContext, useState } from 'react'
import { ThemeContext } from '../../Context/theme_context'
import styles from './custom_select.module.scss'
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { RiMoonFoggyFill, RiSunFoggyFill } from "react-icons/ri";


const CustomSelect = () => {
  const { theme, setTheme } = useContext(ThemeContext)
  const [selectTheme, setSelectTheme] = useState<boolean>(false)
  const options = [
    { id: 1, name: 'Light', known: 'light', icon: <RiSunFoggyFill /> },
    { id: 2, name: 'Dark', known: 'dark', icon: <RiMoonFoggyFill /> }
  ]

  const pickHandler = (opt: string) => {
    setTheme(opt)
    setSelectTheme(curr => !curr)
  }
  return (
    <div className={styles.select}>
      <div className={styles.currentSelected} onClick={() => setSelectTheme(curr => !curr)}>
        {
          theme && theme === 'light' ?
            <RiSunFoggyFill className={styles.icon} /> :
            <RiMoonFoggyFill className={styles.icon} />
        }
        <MdOutlineKeyboardArrowDown
          className={!selectTheme ?
            `${styles.icon}` :
            `${`${styles.icon} ${styles.iconAlt}`}`}
        />
      </div>
      {
        selectTheme && <div className={selectTheme ? `${styles.options}` : ''}>
          {
            options.map(itm => {
              const { id, name, icon, known } = itm
              return (
                <div key={id} className={styles.rep} onClick={() => pickHandler(known)}>
                  {icon}
                  <p>{name}</p>
                </div>
              )
            })
          }
        </div>
      }
    </div>
  )
}

export default CustomSelect