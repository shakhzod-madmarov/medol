import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";

import { Store } from "./pages/Store";
import { AboutCompany } from "./pages/AboutCompany";
import { Products } from "./pages/Produts";
import { Services } from "./pages/Services";
import { PromotionsNews } from "./pages/PromotionsNews";
import { Contact } from "./pages/Contact";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/store" element={<Store />} />
          <Route path="/" element={<AboutCompany />} />
          <Route path="/products" element={<Products />} />
          <Route path="/services" element={<Services />} />
          <Route path="/promotions-and-news" element={<PromotionsNews />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
