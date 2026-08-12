import About from "./components/About";
import Journey from "./components/CareerJourney";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import SelectedWork from "./components/SelectedWork";
import Skills from "./components/Skills";

function App() {
  return (
    <>
    <Navbar/>
    <main>
      <Hero/>
      <SelectedWork/>
      <About/>
      <Journey/>
      <Skills/>
      <Contact/>
    </main>
    <Footer/>
    </>
  );
}

export default App;