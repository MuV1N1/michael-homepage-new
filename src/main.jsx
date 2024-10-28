import { StrictMode } from 'react'
import React from 'react';
import { createRoot } from 'react-dom/client'
import './css/index.css'

import { NavBar } from './components/NavBar';

//Render the whole page
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <p>Test on laptop</p>
    <NavBar />

  </StrictMode>,
)
