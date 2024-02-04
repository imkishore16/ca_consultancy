import "./App.css";
import Service from "./components/service";
import About from "./components/about";
import Test from "./components/test";
import Home from "./components/home";
// import Navbar from "./components/navbar";
import Carousal from "./components/Carousal";
import Foot from "./components/foot";
import Footer from "./components/Footer";
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
        <Footer />
      </div>
    </>
  );
}

export default App;
