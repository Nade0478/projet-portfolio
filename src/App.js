import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./component/home/Home";
import Contact from "./component/home/Contact";
import Portfolio from "./component/home/Portfolio";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
