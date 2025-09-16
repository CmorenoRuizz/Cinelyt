import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import TestTailwind from './testtailwind'
import BackendConnection from './components/BackendConnection'


createRoot(document.getElementById('root')!).render(
  <StrictMode>    
    <BackendConnection />
    <TestTailwind />
  </StrictMode>,
)
