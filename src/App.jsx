import { BrowserRouter } from "react-router-dom";
import { Analytics } from "@vercel/analytics/next";
import {
  About,
  Experience,
  Documentations,
  Certificates,
  Hero,
  Navbar,
  Tech,
  Works,
  Footer,
} from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Works />
        <Tech />
        <Documentations />
        <Certificates />
        <div className="relative z-0">
          <Footer />
          <Analytics />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
