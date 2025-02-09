import "./App.css";
import Education from "./components/education";
import Experience from "./components/experience";
import Footer from "./components/footer";
import Hero from "./components/hero";
import Navbar from "./components/navbar";
import Projects from "./components/projects";

function App() {
  return (
    <div className="bg-background">
      <Navbar />
      <Hero />
      <Experience />
      <Education />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
