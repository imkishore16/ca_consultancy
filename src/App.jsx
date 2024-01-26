import styles from "./style";
import { Hero, Navbar, About, Review, SliderComponent } from "./components";
import { background } from "./assets";

const App = () => (
  // <div className="bg-white w-full overflow-hidden">
  <div className="bg-cover bg-center bg-[url('./assets/background.png')]">
    <div className={`${styles.paddingX} ${styles.flexCenter} bg-black`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    {/* <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
        </div>
      </div> */}
    {/* <div className="bg-cover bg-center bg-[url('./assets/background.jpg')]"> */}
    <div className={`${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
        <About />
        <Review />
      </div>
    </div>

    {/*  */}
  </div>
);

export default App;
