import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './Styles.scss'
import Navbar from './components/Navbar'
import Grid from './components/Grid'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Menu from "./pages/Menu"

function App() {
  return (


    <>

      <Navbar />
      <Grid />

      <Routes>
        <Route
          path="/"
          element={<h1>hi</h1>}
        />,
        <Route
          path="{menu}"
          element={<h2>hi</h2>}
        />
      </Routes>
    </>
  )
}

export default App

