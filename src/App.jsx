import ButtonGradient from "./assets/svg/ButtonGradient";
import Header from "./components/Header/Header";
import Button from "./components/Button/Button";

import "./index.css";
import Benefits from "./components/Benefits/Benefits";
// import GenerativeAI from "./components/GenerativeAI";
import GenerativeSection from "./components/GenerativeSection/GenerativeSection";
import Pricing from "./components/Pricing/Pricing";
import Roadmap from "./components/Roadmap/Roadmap";
import Hero from "./components/Hero/Hero";

const App = () => {
  return (
    <>
      <Header />
      <Hero />
      <Benefits />
      <GenerativeSection />
      <Pricing />
      <Roadmap />
    </>
  );
};

export default App;
