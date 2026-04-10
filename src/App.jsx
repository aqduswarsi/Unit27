import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import ProductsPage from "./pages/ProductsPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import Welcome from "./pages/Welcome";
import ScrollToTop from "./components/ScrollToTop";
import SearchPage from "./pages/SearchPage";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />

      <div className="bg-white text-black dark:bg-black dark:text-white min-h-screen flex flex-col">
        
        {/* Navbar */}
        <Navbar />

        {/* Pages */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/welcome" element={<Welcome />} />
          </Routes>
        </main>

        {/* Footer */}
        <Footer />

      </div>
    </BrowserRouter>
  );
}

export default App;