import { useState } from 'react'
import './assets/css/index.css'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import Index from './Page/Index'
import HeaderTop from './Complements/HeaderTop'
import Footer from './Complements/Footer'

function App() {

  return (
    <>

      <HeaderTop />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Index />} />
        </Routes>
      </BrowserRouter>

      <Footer />
    </>
  )
}

export default App
