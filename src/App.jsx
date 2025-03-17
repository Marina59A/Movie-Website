import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/home'
import Header from './components/Header/header'
// import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
      <Header />
        <Routes>
        <Route index element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
