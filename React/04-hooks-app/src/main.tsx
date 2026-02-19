import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HooksApp } from './HooksApp'
import './index.css'
import { TrafficLight } from './01-useState/TrafficLigth'
// import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <App /> */}
    {/* <HooksApp></HooksApp>
     */}

     <TrafficLight></TrafficLight>
  </StrictMode>,
)
