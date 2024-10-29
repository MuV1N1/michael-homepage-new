import { StrictMode } from 'react'
import React from 'react';
import { createRoot } from 'react-dom/client'
import './css/index.css'

import { NavBar } from './components/NavBar';
import BannerComponent from './components/BannerComponent';

//Render the whole page
createRoot(document.getElementById('root')).render(
  <>
    <NavBar />
    <BannerComponent /> 
  </>
)
