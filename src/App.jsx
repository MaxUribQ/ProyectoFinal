import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './componentes/Header';
import Footer from './componentes/Footer';
import General from './componentes/General';
import Explorar from './componentes/Explorar';
import Guias from './componentes/Guias';
import Login from './componentes/Login';
import Register from './componentes/Register';

export default function App() {
  return (
    <Router>
      <div className="app-container">
        
        <Header />
        
        <main>
          <Routes>
            <Route path="/" element={<General />} />
            <Route path="/explorar" element={<Explorar />} />
            <Route path="/guias" element={<Guias />} />
            <Route 
              path="/login" 
              element={
                <Login 
                  title="Iniciar Sesion" 
                  usernamePlaceholder="Usuario" 
                  passwordPlaceholder="Contraseña" 
                  buttonText="Ingresar" 
                  termsText="Aceptas los términos de servicio y políticas de privacidad." 
                  correctPassword="1234" 
                />
              } 
            />
            <Route path="/register" element={<Register />} />
            
            {/* Rutas no encontradas */}
            <Route path="*" element={<General />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}
