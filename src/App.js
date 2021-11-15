import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './views/Home'
import Usuario from './views/Usuario';
import Planes from './views/Planes';
import Gracias from './views/Gracias';

import ProyectoState from './context/proyectoState';

function App() {
  return (
    <ProyectoState>
      <BrowserRouter history>
        <Routes>
          <Route exact path="/" element={< Home/>} />
          <Route exact path="/bienvenido" element={<Usuario />} />
          <Route exact path="/planes" element={<Planes />} />
          <Route exact path="/gracias" element={<Gracias />} />
        </Routes>
      </BrowserRouter>
    </ProyectoState>
  );
}

export default App;