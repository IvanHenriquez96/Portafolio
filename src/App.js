import React from 'react';
import Navbar from './components/Navbar';
import Titulo from './components/Titulo';
import SubTitulo from './components/SubTitulo';
import Presentacion from './components/Presentacion';
import RedesSociales from './components/RedesSociales';
import Experiencia from './components/Experiencia';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Titulo/>
      <SubTitulo/>
      <br></br>
      <RedesSociales/>
      <Presentacion/>
      <Experiencia/>
      <br></br>
      <br></br>
      <br></br>
    </div>
  );
}

export default App;
