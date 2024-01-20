import styles from "../style";
import { discount, robot, handshake } from "../assets";
import GetStarted from "./GetStarted";

const Hero = () => {
  return (
    <section id="home" className={`md:flex-row flex-col ${styles.paddingY}`}>
      <div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
      >
        {/* children */}
        <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
          <img src={discount} alt="discount" className="w-[32px] h-[32px]" />
          <p className={`${styles.paragraph} ml-2`}>
            <span className="text-white">Write </span> Something{" "}
            <span className="text-white">here </span> cool design
          </p>
        </div>

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[52px] text-[32px] text-black ss:leading-[70.8px] leading-[55px] w-full">
            Stratergic Excellence, <br className="sm:block hidden" />{" "}
            <span className="text-gradient-orange">Financial Finesse </span>{" "}
          </h1>
        </div>

        <h1 className="font-poppins font-semibold ss:text-[52px] text-[32px] text-black ss:leading-[70.8px] leading-[55px] w-full">
          Elevating Your Business in style
        </h1>
        {/* <div className="ss:flex hidden md:mr-4 mr-0 mt-6">
          <GetStarted />
        </div> */}
      </div>
      <p
        className={`text-black max-w-[100%] mt-5 text-center ml-48 mr-48 font-poppins font-normal text-[18px] leading-[30.8px]`}
      >
        We are business consultant is company with a wide array of skills who
        assists business owners with their endeavors. Consultants are
        knowledgeable because of their education and previous experience.
      </p>

      <div
        className={`flex-1 flex ${styles.flexCenter} md:my-0 my-4 relative w-[100%]`}
      >
        <img
          src={handshake}
          alt="handwshke"
          className="w-[100%] h-[100%]  relative z-[5]"
        />

        {/* gradient start */}
        {/* <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" /> */}
        {/* <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" /> */}
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        {/* gradient end */}
      </div>

      <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted />
      </div>
    </section>
  );
};

export default Hero;
