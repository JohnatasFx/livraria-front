import React from 'react';
import ReactDOM from 'react-dom/client';
import Cadastro from './pages/Cadastro.tsx';
import Listagem from './pages/Listagem.tsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './reset.css'
import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Listagem />
  },
  {
    path: "/cadastro",
    element: <Cadastro />
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
)
