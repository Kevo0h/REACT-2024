import React from "react";
import Nav from './components/layout/Nav';
import Footer  from "./components/layout/Footer";

import HomePage from './pages/HomePage';
import ContactoPage  from "./pages/ContactoPage";
import ServiciosPage from './pages/ServiciosPage';


import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
   <div className="App">
  <BrowserRouter>
    <Nav/>
      <Routes> 
        <Route path="/" element={<HomePage/>}/>
        <Route path="/servicios" element={<ServiciosPage/>}/>
        <Route path="/contacto" element={<ContactoPage/>}/>
      </Routes> 
    </BrowserRouter>
    <Footer/>
   
  </div>
  );
}

export default App;
