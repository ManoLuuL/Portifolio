import Topbar from "./components/topbar/Topbar";
import Intro from "./components/into/Intro";
import Contact from "./components/contact/Contact";
import Testimonials from "./components/testimonials/Testimonials";
import Works from "./components/work/Work";
import Portofolio from "./components/portofolio/Portofolio";
import "./App.scss";

function App() {
  return (
    <div className="app">
      <Topbar/>
      <div className="sections">
        <Intro/>
        <Portofolio/>
        <Works/>
        <Testimonials/>
        <Contact/>
      </div>
    </div>
  );
}

export default App;
