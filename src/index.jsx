import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Footer from './components/Footer'
import Error from './pages/Error'
import Lodging from './pages/Lodging'

ReactDOM.render(
  <div className="align-page">
    <BrowserRouter>
      <Routes>
        <Route path="/kasa" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/logment/:id" element={<Lodging />} />
        <Route path="/404" element={<Error />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </div>,
  document.getElementById('root')
)
