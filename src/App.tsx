import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './components/auth/login'
import MainLayout from './components/mainLayout/mainLayout'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { OpenRoutes } from './routing/OpenRoutes';
import { PrivateRoutes } from "./routing/PrivateRoutes";
import Home from './components/page/home';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/admin" element={<MainLayout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
