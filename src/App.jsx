import "./App.css";
import Navbar from "./Components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Nosotros from "./Pages/Nosotros";

import Footer from "./Components/Footer";
import Botones from "./Components/Botones";
import AmenidadesHome from "./Pages/AmenidadesHome";
import Financiamento from "./Pages/Financiamiento";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Nosotros />} path="/nosotros" />
        <Route element={<AmenidadesHome />} path="/amenidades" />
        <Route element={<Financiamento />} path="/financiamiento" />
      </Routes>
      <Botones />
      <Footer />
    </>
  );
}

export default App;
