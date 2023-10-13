import "./App.css";
import Me from "./pages/Me";
import Project from "./pages/Project";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Layout from "./Layout";
function App() {
  return (
    <div>
      <Layout>
        <div>
          <Home />
        </div>
      </Layout>
    </div>
  );
}

export default App;
