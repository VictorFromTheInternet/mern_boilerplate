import * as React from 'react'
import * as ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'
import App from './App.jsx'
import Record from './components/RecordList'
import RecordList from './components/RecordList'
import './index.css'

// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <RecordList />
      }
    ]
  }
]  
)
