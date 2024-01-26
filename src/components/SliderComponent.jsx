import { useState } from "react";
import { people01 } from "../assets";
const SliderComponent = () => {
  const testimonial = [
    {
      img: people01,
      content_text:
        "This is a sample text this is a smaple text this is a smample text this is a ssmaple text",
      testimonial_name: "noobamster",
      text_block: "just a noob",
    },
    {
      img: people01,
      content_text: "karthi",
      testimonial_name: "noobamster",
      text_block: "just a noob",
    },
    {
      img: people01,
      content_text: "anooob",
      testimonial_name: "noobamster",
      text_block: "just a noob",
    },
  ];
  const [current, setCurrent] = useState(0);
  const length = testimonial.length;
  const previous = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };
  const next = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  return (
    <section className="flex items-center justify-center bg-black h-[100%] rounded-[40px]">
      <div>
        {testimonial.map(
          (item, index) =>
            index === current && (
              <div key={index}>
                <div className="pb-[40px] flex items-start gap-4">
                  <img src="path_to_your_apostrophe_image" alt="apostrophe" />
                  <h2 className="text-white text-2xl font-bold">
                    {item.content_text}
                  </h2>
                </div>
                <div className="flex justify-between items-end">
                  <div className="flex gap-4 items-center">
                    <div>
                      <img src={item.img} alt="testimonial_image" />
                    </div>
                    <div>
                      <h6 className="text-white">{item.testimonial_name}</h6>
                      <span className="text-white">{item.text_block}</span>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="bg-gray-800 p-3">
                      <img
                        onClick={previous}
                        src="path_to_your_previous_image"
                        alt="previous_image"
                      />
                    </div>
                    <div className="bg-gray-800 p-3">
                      <img
                        onClick={next}
                        src="path_to_your_next_image"
                        alt="next_image"
                      />
                    </div>
                  </div>
                </div>
              </div>
            )
        )}
      </div>
    </section>
  );
};

export default SliderComponent;
