import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter,Link, Router,Route } from 'react-router-dom'
import Home from "./pages/Home"
function App() {
 

  return (
    <div className='w-9/10 mx-auto'>
    <BrowserRouter>
      <Home/>
    </BrowserRouter>
    </div>
  )
}

export default App
