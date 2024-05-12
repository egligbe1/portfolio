import Navbar from "./components/Navbar/Navbar";
import Intro from "./components/Intro/intro";
import Skills from "./components/Skills/skills";
import Portfolio from "./components/Portfolio/portfolio";
import Contact from "./components/Contact/contact";
import Footer from "./components/Footer/footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Skills />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
