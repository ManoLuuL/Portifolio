import Topbar from "./components/topbar/Topbar";
import Intro from "./components/into/Intro";
import Contact from "./components/contact/Contact";
import Academic from "./components/academic/Academic";
import Works from "./components/work/Works";
import Portofolio from "./components/portofolio/Portofolio";
import "./App.scss";
import { useState } from "react";
import Menu from "./components/menu/Menu";

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="sections">
        <Intro />
        <Portofolio />
        <Works />
        <Academic />
        <Contact />
      </div>
    </div>
  );
}

export default App;
