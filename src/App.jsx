import { Routes, Route } from "react-router-dom";
import Home from "../home/index.jsx";
import About from "../about/index.jsx";
import Work from "../work/index.jsx";
import Contact from "../contact/index.jsx";
import Services from "../services/index.jsx";
import Imprint from "../imprint/index.jsx";
import DataProtection from "../data-protection/index.jsx";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/work" element={<Work />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/services" element={<Services />} />
      <Route path="/imprint" element={<Imprint />} />
      <Route path="/data-protection" element={<DataProtection />} />
    </Routes>
  );
}
