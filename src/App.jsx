import { useState, useEffect} from 'react'
import { useDispatch, useSelector } from "react-redux"
import { setTheme } from "@/store/themeSlice"
import './App.css'
import { Button } from "@/components/ui/button"
import { Routes, Route } from 'react-router-dom'
import routes from './routes'
import Navbar from './components/Navbar'
import Footer from './components/footer'
import { Toaster } from "sonner";

function App() {
  const [count, setCount] = useState(0)
    const theme = useSelector((state) => state.theme.value)

  useEffect(() => {
    const root = document.documentElement
    root.classList.remove("light", "dark")

    if (theme === "system") {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light"
      root.classList.add(systemTheme)
    } else {
      root.classList.add(theme)
    }
  }, [theme])

  return (
    <>
      <Navbar />
            <Toaster position="top-center" richColors />

      <Routes>
        {routes.map(({ path, element }, i) => (
          <Route key={i} path={path} element={element} />
        ))}
      </Routes>
      <Footer />
    </>
  )
}

export default App
