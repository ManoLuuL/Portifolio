import Topbar from "./components/topbar/Topbar";
import Intro from "./components/into/Intro";
import Contact from "./components/contact/Contact";
import Testimonials from "./components/testimonials/Testimonials";
import Works from "./components/works/Works";
import Portofolio from "./components/portofolio/Portofolio";
import "./App.scss";
import { useState } from "react";

function App() {
  const[menuOpen, setMenuOpen] = useState(false)
  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="sections">
        <Intro />
        <Portofolio />
        <Works />
        <Testimonials />
        <Contact />
      </div>
    </div>
  );
}

export default App;
