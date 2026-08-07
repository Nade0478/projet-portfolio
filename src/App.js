import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/home/Home";
import Contact from "./pages/contact/Contact";
import CV from "./pages/cv/CV";
import Portfolio from "./pages/portfolio/Portfolio";

// Pages métier
import Dev from "./pages/metier/Dev";
import Tests from "./pages/metier/Tests";
import Projet from "./pages/metier/Projet";
import Cyber from "./pages/metier/Cyber";
import Adm from "./pages/metier/Adm";
import Cons from "./pages/metier/Cons";
import Div from "./pages/metier/Div";

// Pages carrousels
import CaptureDeploiement from "./pages/portfolio/CarouselDeploiement";
import CaptureConception from "./pages/portfolio/CarouselConception";
import CaptureTests from "./pages/portfolio/CarouselTests";

import Menu from "./component/basics/Menu";
import Footer from "./component/basics/Footer";
import "./styles/Pages.css";

function App() {
  return (
    <BrowserRouter>
      <Menu />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cv" element={<CV />} />
        <Route path="/portfolio" element={<Portfolio />} />

        <Route path="/dev" element={<Dev />} />
        <Route path="/tests" element={<Tests />} />
        <Route path="/projet" element={<Projet />} />
        <Route path="/cyber" element={<Cyber />} />
        <Route path="/adm" element={<Adm />} />
        <Route path="/cons" element={<Cons />} />
        <Route path="/div" element={<Div />} />

        {/*  Ajout des routes carrousels */}
        <Route path="/captures-conception" element={<CaptureConception />} />
        <Route path="/captures-deploiement" element={<CaptureDeploiement />} />
        <Route path="/captures-tests" element={<CaptureTests />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
