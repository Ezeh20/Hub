import { useContext } from "react"
import { ThemeContext } from "./Context/theme_context"
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";

function App() {

  const { theme, setTheme } = useContext(ThemeContext)
  return (
    <>
      {
        theme === 'light' ? <BsFillSunFill /> : <BsFillMoonFill />
      }
      <select value={theme} name="" id="" onChange={e => setTheme(e.target.value)}>
        <option>light</option>
        <option>dark</option>
      </select>
    </>
  )
}

export default App
