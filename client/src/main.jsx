import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import {AuthProvider} from './AuthContext.jsx'
import Login from './components/common/Login.jsx'
import SignUp from './components/common/SignUp.jsx'
import ProfileContent from './components/admin/Profile.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}/>
          <Route path="/login/*" element={<Login />}/>
          <Route path="/signup/*" element={<SignUp />}/>
          <Route path="/profile/:id" element={< ProfileContent/>} />
        </Routes>
      </BrowserRouter>
  </AuthProvider>
)
