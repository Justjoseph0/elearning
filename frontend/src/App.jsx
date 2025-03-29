import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import LandingPage from './pages/LandingPage'
import React from 'react'
import HomePage from './pages/HomePage'
import Layout from './components/AppLayouts/Layout/Layout'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />} >
            <Route index element={<LandingPage />} />
            <Route path='/home' element={<HomePage />} />
          </Route>
        </Routes>
    
    </BrowserRouter>
    
  )
}

export default App
