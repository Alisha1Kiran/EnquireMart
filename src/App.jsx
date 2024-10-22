import React from 'react'
import './App.css'
import Headerc from './components/Headerc';
import Navigation from './components/Navigation';
import { Outlet } from "react-router-dom"


const App = () => {
  return (
    <main className="mainBody">
      <Headerc/>
      <Navigation/>
      <div className="m-4">
        <Outlet/>
      </div>
      <footer className="d-flex justify-content-center align-items-center">
            CopyRight @ AlishaKiran
      </footer>
    </main>
  )
}

export default App