import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import Home from './Pages/Home'
import { BrowserRouter, Routes, Route } from "react-router";
import Register from './Pages/Register'
import Products from './Pages/Products'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Register" element={<Register />} />
      <Route path="/Products" element={<Products />} />
    </Routes>
    </>
  )
}

export default App
