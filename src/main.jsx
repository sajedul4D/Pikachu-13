import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider } from 'react-router-dom'
import router from './Home.jsx'
import { APIProvider } from '@vis.gl/react-google-maps'
import { googleMaps } from './GoogleMaps.js'


createRoot(document.getElementById('root')).render(
  <StrictMode>
 
  
 <APIProvider apiKey={googleMaps}><RouterProvider router={router}></RouterProvider></APIProvider>
  </StrictMode>
)
