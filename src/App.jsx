import "./App.css";
import Service from "./components/service";
import About from "./components/about";
import Test from "./components/test";
import Home from "./components/home";
// import Navbar from "./components/navbar";
import Carousal from "./components/Carousal";
import Foot from "./components/foot";
import Footer from "./components/Footer";
import 'rsuite/dist/rsuite-no-reset.min.css';
import Contact from "./components/contact";
function App() {
  return (
    <>
      <div
        style={{
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundImage: "url('src/images/background.png')",
        }}
      >
        {/* <Navbar /> */}
        <Home />
        <About />
        <Service />
        <Test />
        <Carousal />
        <Foot />
        <Contact></Contact>
        <Footer />
      </div>
    </>
  );
}

export default App;
