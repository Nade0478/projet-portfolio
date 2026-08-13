import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/home/Home";
import Contact from "./pages/contact/Contact";
import CV from "./pages/cv/CV";
import Portfolio from "./pages/portfolio/Portfolio";

// Pages métier
import Dev from "./pages/metier/Dev";
import Tests from "./pages/metier/Test";
import Projet from "./pages/metier/Projet";
import Cyber from "./pages/metier/Cyber";
import Adm from "./pages/metier/Adm";
import Cons from "./pages/metier/Cons";
import Div from "./pages/metier/Div";

// Pages carousels
import CaptureDeploiement from "./pages/portfolio/CarouselDeploiement";
import CaptureConception from "./pages/portfolio/CarouselConception";
import CaptureTest from "./pages/portfolio/CarouselTest";
import CaptureAutre from "./pages/portfolio/CarouselAutre";
import CaptureProjet from "./pages/portfolio/CarouselProjet"; 
import CaptureSecurity from "./pages/portfolio/CarouselSecurity";

import Menu from "./component/basics/Menu";
import Footer from "./component/basics/Footer";
import "./styles/Pages.css";
import Uix from "./pages/metier/Uix";



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
        <Route path="/uix" element={<Uix />} />

        {/*  Ajout des routes carousels */}
        <Route path="/capture-conception" element={<CaptureConception />} />
        <Route path="/capture-deploiement" element={<CaptureDeploiement />} />
        <Route path="/capture-test" element={<CaptureTest />} />
        <Route path="/capture-projet" element={<CaptureProjet />} />
        <Route path="/capture-security" element={<CaptureSecurity />} />
        <Route path="/capture-autre" element={<CaptureAutre />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
