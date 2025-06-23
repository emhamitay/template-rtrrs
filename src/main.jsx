import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route } from "react-router";

//Pages
import Redirect from './pages/redirect/Redirect.jsx';
import Protected from './pages/redirect/Protected.jsx';
import LoginLayout from './pages/login/Layout.jsx';
import Login from './pages/login/Login.jsx';

//Document
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Redirect />} />
        <Route path='/login' element={<LoginLayout />}>
          <Route index element={<Login />} />
        </Route>
        <Route path='/app' element={<Protected> Insert Layout Here </Protected> } >
          {/* Here nest children of app layout */}
        </Route>
      </Routes>
  </BrowserRouter>
  </StrictMode>,
)
