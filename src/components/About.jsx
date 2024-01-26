// import { discount, robot, paperplane, dottedline, handshake } from "../assets";
// import styles from "../style";

// const About = () => {
//   return (
//     <section
//       id="about"
//       className={`justify-center md:flex-row flex-col ${styles.paddingY} justify-center`}
//     >
//       <div className={`xl:px-0 sm:px-16 px-6 flex justify-center`}>
//         <div class="flex bg-zinc-900 text-white p-8 w-[80%] h-[100%] rounded-[40px] justify-center">
//           <div class="flex flex-col">
//             <div className="flex flex-row items-center">
//               <img src={paperplane} alt="immage" className="w-48 h-48" />

//               <div className="flex flex-col flex-1 justify-center items-center">
//                 <h1 className="text-center mb-8 ss:text-[42px] text-[22px]">
//                   About us
//                 </h1>
//                 <p className="text-center ss:text-[19px] text-[12px]">
//                   We at CSR consultancy services, wish to bestow to those who
//                   believe in us!
//                 </p>
//                 <p className="text-center ss:text-[19px] text-[12px]">
//                   We act as mentor & guide to your success in business while you
//                   sit back and relax!
//                 </p>
//               </div>
//             </div>
//             <div className="flex flex-row w-full">
//               <div className="bg-white w-[50%]  ml-2 mr-4 my-4 rounded-[40px]">
//                 <p className="text-center font-poppins text-black mx-16 my-8">
//                   Hey, we are Chaithanya & Sadagopan, During our stint with
//                   different clienteles, working with large corporates &
//                   individuals who run any entity, being the most passionate
//                   entrepreneurs, noticed that there is huge gap between
//                   operation & management in the finance & compliance functions.
//                   Being entrepreneurs ourselves, we have built our business
//                   around solving these problems for other entrepreneurs. Our
//                   services & scope has been specifically designed with the
//                   objective of making the business owners work toward their
//                   goals. If you are an entrepreneur who is looking to leave your
//                   mark in this world, we would love to work with you.
//                 </p>
//               </div>
//               <div className="flex flex-col w-[50%]  ml-2 mr-4 my-4 ">
//                 <div className="bg-white flex-grow rounded-[40px] ">
//                   <p className="text-center font-poppins text-black mx-16 my-8">
//                     Sadagopan M S Expertizing in GST & Income-tax, he loves
//                     management consulting as his prime cup of tea, leveraging
//                     all his acumen. He loves imparting financial literacy.
//                   </p>
//                 </div>
//                 <img
//                   className="self-end w-64 h-48 mt-8"
//                   src={dottedline}
//                   alt="dotted lines"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;

import React from "react";
import { discount, robot, paperplane, dottedline, handshake } from "../assets";
import styles from "../style";

const About = () => {
  return (
    <section
      id="about"
      className={`justify-center md:flex-row flex-col ${styles.paddingY} justify-center`}
    >
      <div className={`xl:px-0 sm:px-16 px-6 flex justify-center`}>
        <div class="flex bg-zinc-900 text-white p-8 w-full md:w-[80%] h-[100%] rounded-[40px] justify-center">
          <div class="flex flex-col">
            <div className="grid grid-cols-2 md:flex md:flex-row items-center">
              <img src={paperplane} alt="image" className="w-48 h-48 md:mr-4" />

              <div className="flex flex-col flex-1 justify-center items-center">
                <h1 className="text-center mb-8 text-[22px] md:text-[42px]">
                  About us
                </h1>
                <p className="text-center text-[12px] md:text-[19px]">
                  We at CSR consultancy services, wish to bestow to those who
                  believe in us!
                </p>
                <p className="text-center text-[12px] md:text-[19px]">
                  We act as mentor & guide to your success in business while you
                  sit back and relax!
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 md:flex md:flex-row w-full">
              <div className="bg-white w-full md:w-[50%]  ml-2 mr-4 my-4 rounded-[40px]">
                <p className="text-center font-poppins text-black mx-16 my-8">
                  Hey, we are Chaithanya & Sadagopan, During our stint with
                  different clienteles, working with large corporates &
                  individuals who run any entity, being the most passionate
                  entrepreneurs, noticed that there is huge gap between
                  operation & management in the finance & compliance functions.
                  Being entrepreneurs ourselves, we have built our business
                  around solving these problems for other entrepreneurs. Our
                  services & scope has been specifically designed with the
                  objective of making the business owners work toward their
                  goals. If you are an entrepreneur who is looking to leave your
                  mark in this world, we would love to work with you.
                </p>
              </div>
              <div className="flex flex-col w-full md:w-[50%]  ml-2 mr-4 my-4 ">
                <div className="bg-white flex-grow rounded-[40px] ">
                  <p className="text-center font-poppins text-black mx-16 my-8">
                    Sadagopan M S Expertizing in GST & Income-tax, he loves
                    management consulting as his prime cup of tea, leveraging
                    all his acumen. He loves imparting financial literacy.
                  </p>
                </div>
                <img
                  className="self-end w-64 h-48 mt-8 md:hidden"
                  src={dottedline}
                  alt="dotted lines"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
