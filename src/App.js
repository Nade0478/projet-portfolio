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
import CarouselTest from "./pages/portfolio/CarouselTest";
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
        {/* Pages principales */}
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cv" element={<CV />} />
        <Route path="/portfolio" element={<Portfolio />} />

        {/* Pages métier */}
        <Route path="/metier/dev" element={<Dev />} />
        <Route path="/metier/test" element={<Test />} />
        <Route path="/metier/projet" element={<Projet />} />
        <Route path="/metier/cyber" element={<Cyber />} />
        <Route path="/metier/adm" element={<Adm />} />
        <Route path="/metier/cons" element={<Cons />} />
        <Route path="/metier/div" element={<Div />} />
        <Route path="/metier/uix" element={<Uix />} />

        {/* Pages carousels */}
        <Route
          path="/portfolio/capture-conception"
          element={<CaptureConception />}
        />
        <Route
          path="/portfolio/capture-code-deploiement"
          element={<CaptureDeveloppement />}
        />
        <Route path="/portfolio/CarouselTest" element={<CarouselTest />} />
        <Route path="/portfolio/capture-projet" element={<CaptureProjet />} />
        <Route
          path="/portfolio/capture-security"
          element={<CaptureSecurity />}
        />
        <Route path="/portfolio/capture-autre" element={<CaptureAutre />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
