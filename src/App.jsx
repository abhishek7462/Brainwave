import ButtonGradient from "./assets/svg/ButtonGradient";
import Header from "./components/Header/Header.jsx";
import Button from "./components/Button/Button";

import "./index.css";
import Benefits from "./components/Benefits/Benefits.jsx";
// import GenerativeAI from "./components/GenerativeAI";
import GenerativeSection from "./components/GenerativeSection/GenerativeSection.jsx";
import Pricing from "./components/Pricing/Pricing.jsx";
import Roadmap from "./components/Roadmap/Roadmap.jsx";
import Hero from "./components/Hero/Hero.jsx";
import Footer from "./components/Footer/Footer.jsx";

const App = () => {
  return (
    <>
      {/* <div className="container"> */}
      <Header />
      <Hero />
      <Benefits />
      <GenerativeSection />
      <Pricing />
      <Roadmap />
      <Footer />
      {/* </div> */}
    </>
  );
};

export default App;
