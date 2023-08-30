import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './Styles.scss'
import Navbar from './components/Navbar'
import Grid from './components/Grid'
import { Routes, Route } from "react-router-dom"
import Footer from './components/Footer'
import About from './pages/About'
import Menu from './pages/Menu'
import Drinks from './pages/Drinks'

function App() {
  return (
    <>


      <Navbar />
      <Grid />
      <Footer />



    </>
  )
}

export default App

{/* <Routes>
        <Route path='/About' element={<About />} />
        <Route path='/Menu' element={<Menu />} />
        <Route path='/Drinks' element={<Drinks />} />

      </Routes> */}