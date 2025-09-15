import { useState } from 'react'

import { useDispatch, useSelector } from "react-redux"
import { setTheme } from "@/store/themeSlice"
import './App.css'
import { Button } from "@/components/ui/button"

function App() {
  const [count, setCount] = useState(0)
  const dispatch = useDispatch()
    const theme = useSelector((state) => state.theme.value)

  return (
    <>
      <Button onClick={() => setCount(count+1)}>count up</Button>
      <h1>{count}</h1>
      <Button variant="outline" onClick={()=>dispatch(setTheme("dark"))}>change</Button>
      <h2>The set theme is {theme}</h2>
    </>
  )
}

export default App
