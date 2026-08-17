import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/home/Home";
import Contact from "./pages/contact/Contact";
import CV from "./pages/cv/CV";
import Portfolio from "./pages/portfolio/Portfolio";

// Pages métier
import Dev from "./pages/metier/Dev";
import Test from "./pages/metier/Test";
import Projet from "./pages/metier/Projet";
import Cyber from "./pages/metier/Cyber";
import Adm from "./pages/metier/Adm";
import Cons from "./pages/metier/Cons";
import Div from "./pages/metier/Div";
import Uix from "./pages/metier/Uix";

// Pages carousels
import CaptureDeveloppement from "./pages/portfolio/CarouselDeveloppement";
import CaptureConception from "./pages/portfolio/CarouselConception";
import CaptureTest from "./pages/portfolio/CarouselTest"; // ✔️ le bon import
import CaptureAutre from "./pages/portfolio/CarouselAutre";
import CaptureProjet from "./pages/portfolio/CarouselProjet";
import CaptureSecurity from "./pages/portfolio/CarouselSecurity";

import Menu from "./component/basics/Menu";
import Footer from "./component/basics/Footer";
import "./styles/Pages.css";

function App() {
  return (
    <BrowserRouter basename="/projet-portfolio">
      <Menu />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projet-portfolio" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cv" element={<CV />} />
        <Route path="/portfolio" element={<Portfolio />} />
        {/* Pages métier */}
        <Route path="/dev" element={<Dev />} />
        <Route path="/test" element={<Test />} />
        <Route path="/projet" element={<Projet />} />
        <Route path="/cyber" element={<Cyber />} />
        <Route path="/adm" element={<Adm />} />
        <Route path="/cons" element={<Cons />} />
        <Route path="/div" element={<Div />} />
        <Route path="/uix" element={<Uix />} />
        {/* Pages carousels */}
        <Route path="/capture-conception" element={<CaptureConception />} />
        <Route
          path="/capture-developpement"
          element={<CaptureDeveloppement />}
        />
        <Route path="/capture-test" element={<CaptureTest />} />{" "}
        {/* ✔️ UNE SEULE ROUTE */}
        <Route path="/capture-projet" element={<CaptureProjet />} />
        <Route path="/capture-security" element={<CaptureSecurity />} />
        <Route path="/capture-autre" element={<CaptureAutre />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
