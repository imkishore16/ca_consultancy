import React, { useState, useEffect } from "react";
import { FaStar, FaChevronLeft, FaChevronRight } from "react-icons/fa";
// import useNavigation from "../hooks/useNavigation";
// import { useNavigation } from "@react-navigation/native";
import SliderComponent from "./SliderComponent";

import styles from "../style";

// const testimonials = [
//   {
//     name: "Jess Santiago",
//     role: "UI Designer II UX designer course",
//     rating: 4,
//     review:
//       "Nuliam dolen dolor justio elit pharetra accumsan eget neque. Et fusce maecenas-sagittis enim. Non mattis nates purus mi facilisis enean comon. Fermentum sit ultricies vel ipsum tellus aliquet velit urna,...",
//     image: "",
//   },
//   {
//     name: "Cali Huffman",
//     role: "Student on UI/UX designer co...",
//     rating: 5,
//     review:
//       "Ac scelerisque sed telles aliquamn lacusm egestas vestib congue et natoque pulvinem bibendum est...",
//     image: "",
//   },
// ];

const Review = () => {
  // const { currentRoute, setCurrentRoute } = useNavigation();
  // const [index, setIndex] = useState(0);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setIndex((prevIndex) => {
  //       if (prevIndex === testimonials.length - 1) {
  //         return 0;
  //       } else {
  //         return prevIndex + 1;
  //       }
  //     });
  //   }, 5000);
  //   return () => clearInterval(interval);
  // }, []);

  // const handlePrev = () => {
  //   setIndex((prevIndex) => {
  //     if (prevIndex === 0) {
  //       return testimonials.length - 1;
  //     } else {
  //       return prevIndex - 1;
  //     }
  //   });
  // };

  // const handleNext = () => {
  //   setIndex((prevIndex) => {
  //     if (prevIndex === testimonials.length - 1) {
  //       return 0;
  //     } else {
  //       return prevIndex + 1;
  //     }
  //   });
  // };

  // const handleDot = (i) => {
  //   setIndex(i);
  // };

  return (
    <section id="review" className={`md:flex-row flex-col `}>
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
        <div className="p-8">
          <div></div>
          <p className="text-xl text-gray-700 font-semibold">
            "Partner with CSR Consultancy Services and leverage Our expertise in
            tax audit, internal operations streamlining, tax advisory, and more
            for a holistic approach to financial success."
          </p>
        </div>
        <SliderComponent />

        {/* <div class="bg-gray-900 text-white p-4 rounded">
            <div class="inline-block mx-2">
              <p class="text-xl">20+</p>
              <p>PROJECTS COMPLETED</p>
            </div>
            <div class="inline-block mx-2 border-l border-r border-gray-500 px-2">
              <p class="text-xl">10+</p>
              <p>ACTIVE CLIENTS</p>
            </div>
            <div class="inline-block mx-2 border-r border-gray-500 px-2">
              <p class="text-xl">15+</p>
              <p>CUPS OF COFFEE</p>
            </div>
            <div class="inline-block mx-2">
              <p class="text-xl">20+</p>
              <p>HAPPY CLIENTS</p>
            </div>
          </div> */}
      </div>
    </section>
  );
};

export default Review;
