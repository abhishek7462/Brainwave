import ButtonGradient from "./assets/svg/ButtonGradient";
import Header from "./components/Header";
import Button from "./components/Button";

import "./index.css";
import Benefits from "./components/Benefits";
// import GenerativeAI from "./components/GenerativeAI";
import GenerativeSection from "./components/GenerativeSection";
import Pricing from "./components/Pricing";
import Roadmap from "./components/Roadmap";
import Hero from "./components/Hero";

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
