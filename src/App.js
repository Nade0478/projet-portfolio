import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Contact from "./pages/contact/Contact";
import Menu from "../../component/basics/Menu";
import Footer from "../../component/basics/Footer";
import "../../styles/home.css";

function App() {
  return (
    <BrowserRouter>
      <Menu /> {/* si tu veux le menu partout */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer /> {/* si tu veux le footer partout */}
    </BrowserRouter>
  );
}

export default App;
