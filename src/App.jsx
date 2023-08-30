import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './Styles.scss'
import Navbar from './components/Navbar'
import Grid from './components/Grid'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Menu from "./pages/Menu"
import Footer from './components/Footer'

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

