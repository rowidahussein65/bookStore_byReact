import "./App.css";
import { Route, Routes } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import Edit from "./pages/Edit";
import Details from "./pages/Details";
import Create from "./pages/Create";
import Delete from "./pages/Delete";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Edit/:id" element={<Edit />} />
        <Route path="/Details/:id" element={<Details />} />
        <Route path="/Create" element={<Create />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/Delete/:id" element={<Delete />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
