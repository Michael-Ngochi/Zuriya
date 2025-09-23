import { useDispatch, useSelector } from "react-redux"
import { MdDarkMode, MdLightMode, MdComputer } from "react-icons/md"
import { setTheme } from "../store/themeSlice"

const Themeselector = () => {
  const dispatch = useDispatch()
  const theme = useSelector((state) => state.theme.value)

  const handleToggle = () => {
    const nextTheme =
      theme === "light" ? "dark" : theme === "dark" ? "system" : "light"
    dispatch(setTheme(nextTheme))
  }

  const getIcon = () => {
    if (theme === "light") return <MdLightMode  size={20} />
    if (theme === "dark") return <MdDarkMode className="text-primary" size={20} />
    return <MdComputer size={20} />
  }

  return (
    <button
      onClick={handleToggle}
      className="flex items-center gap-2 p-2 rounded-md border hover:bg-gray-100 transition"
      title={`Current theme: ${theme}. Click to change.`}
    >
      {getIcon()}
      {/* <span className="capitalize">{theme}</span> */}
    </button>
  )
}

export default Themeselector
