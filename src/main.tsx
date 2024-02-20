import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'ag-grid-enterprise'
import { App } from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
