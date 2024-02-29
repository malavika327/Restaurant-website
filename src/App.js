import "./App.css";
import Home from "./components/home";
import About from "./components/About";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Footer from "./components/Footer.js";


function App() {
  return (
    <div className="App">
      <Home />
      <About />
   <Work />
   <Contact />
  <Footer />
     </div>
  );
}

export default App;