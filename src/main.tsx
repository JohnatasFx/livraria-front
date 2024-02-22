import React from 'react';
import ReactDOM from 'react-dom/client';
import Cadastro from './pages/Cadastro.tsx';
import Listagem from './pages/Listagem.tsx';
import Editar from './pages/Editar.tsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './reset.css'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Listagem />} />
        <Route path='/cadastro' element={<Cadastro />} />
        <Route path='/editar/:id' element={<Editar />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
