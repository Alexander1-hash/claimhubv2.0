import About from "./About";
import Blog from "./Blog";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Footer from "./Footer";
import Mission from "./Mission";
import Steps from "./Steps";
import Testimonials from "./Testimonials";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Mission />
      <Steps />
      <Testimonials />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
