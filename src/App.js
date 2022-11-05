import React from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Header from './components/Header'
import Home from './components/Home'
import { Toaster } from 'react-hot-toast'
import "./styles/App.scss"
import Cart from './components/Cart'

function App() {
  return (
    <BrowserRouter>
    <Header />
      <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route exact path="/cart" element={<Cart />}/>
      </Routes>
      <Toaster />
    </BrowserRouter>
  )
}

export default App