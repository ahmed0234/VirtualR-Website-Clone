import FeaturesSection from "./Components/FeaturesSection";
import Footer from "./Components/Footer";
import HeroSection from "./Components/HeroSection";
import Navbar from "./Components/Navbar";
import Price from "./Components/Price";
import Tertimonials from "./Components/Tertimonials";
import Workflow from "./Components/Workflow";

function App() {
  return (

    <>
      <Navbar />
      <div className="max-w-7xl mx-auto pt-14 lg:pt-20 px-6">
        <HeroSection />
        <FeaturesSection />
        <Workflow />
        <Price />
        <Tertimonials />
        <Footer />
      </div>

      

    </>
  );
}

export default App;
