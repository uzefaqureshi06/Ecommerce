import React from 'react'
import Navbar from './components/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Footer from './components/Footer'

import './App.css'
import Products from './pages/Products'
import Details from './pages/Details'
import ShoppingCart from './pages/ShoppingCart'
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/products' element={<Products/>} />
          <Route path='/details/:id' element={<Details/>} />
          <Route path='/cart' element={<ShoppingCart/>} />

        </Routes>
        <Footer />
      </BrowserRouter>

    </>
  )
}

export default App



