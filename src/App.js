import React from 'react';
import Navbar from './components/Navbar';
import Titulo from './components/Titulo';
import SubTitulo from './components/SubTitulo';
import Presentacion from './components/Presentacion';
import RedesSociales from './components/RedesSociales';
import Experiencia from './components/Experiencia';
import Intereses from './components/Intereses';
import Proyectos from './components/Proyectos';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Titulo/>
      <SubTitulo/>
      <br></br>
      <p className="d-flex justify-content-center">iv.henriquez.96@gmail.com</p>
      <RedesSociales/>
      <Presentacion/>
      <br></br>
      <Experiencia/>
      <br></br>
      <Intereses/>
      <br></br>
      <Proyectos/>
      <br></br>
    </div>
  );
}

export default App;
