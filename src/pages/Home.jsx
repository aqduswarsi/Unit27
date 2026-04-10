import Hero from "../components/Hero";
import Products from "../components/Products";
import Footer from "../components/Footer";
import MidBanner from "../components/MidBanner";
import Features from "../components/Features";
import BrandIntro from "../components/BrandIntro";

function Home() {
  return (
    <div className="bg-white text-black min-h-screen flex flex-col dark:bg-black dark:text-white">
      
      {/* Main Content */}
      <div className="flex-grow">
        <Hero />
        <BrandIntro />
        <MidBanner />
        <Features />
        <Products />
      </div>

    </div>
  );
}

export default Home;