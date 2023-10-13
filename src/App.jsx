import "./App.css";
import Me from "./pages/Me";
import Project from "./pages/Project";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Layout from "./Layout";
import Navbar from "./components/Navbar";
import ContactInfo from "./components/ContactInfo";
function App() {
  return (
    <div className="h-screen bg-neutral-900">
      <div className="h-16 bg-slate-600">
      <Navbar/>
      </div>
      <div id="profile" className="h-fit bg-slate-400 pt-10">
      <Me/>
      </div>
      <div id="projects" className="h-fit bg-slate-400 lg:pt-24 pt-40">
      <Project/>
      </div>
      <div className="h-fit bg-slate-400">
      <ContactInfo/>
      </div>
    </div>
  );
}

export default App;
