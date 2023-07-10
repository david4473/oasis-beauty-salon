"use client";
import React, { useRef, useState } from "react";
import testimonialData from "../utils/testimonialData.json";

const Testimonial_section = () => {
  const [index, setIndex] = useState(1);
  const [translate, setTranslate] = useState();
  const container = useRef();
  const length = 3;

  const handleNext = () => {
    setIndex((prevIndex) => (index < length ? prevIndex + 1 : 1));
    container.current.style.transform = `translateX(-${
      index === 3 ? 0 : 100 * index
    }%)`;
  };

  const handlePrev = () => {
    setIndex((prevIndex) => (index > 1 ? prevIndex - 1 : length));
    container.current.style.transform = `translateX(-${100 * (index - 1)}%)`;
    console.log(index);
  };

  return (
    <section>
      <div className="bg-[#F6E7D8] p-6 mt-32">
        <div className="max-w-4xl mx-auto">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">CUSTOMERS REVIEWS</h3>
          </div>
          <div className="flex items-center justify-around">
            <div onClick={handleNext} className="order-3">
              <img
                className="w-20 aspect-square cursor-pointer"
                src="/images/arrow-next.svg"
                alt="next chevron button"
              />
            </div>
            <div onClick={handlePrev}>
              <img
                className="w-20 aspect-square cursor-pointer"
                src="/images/arrow-prev.svg"
                alt="previous chevron button"
              />
            </div>
            <div className="overflow-hidden">
              <div className="flex transition duration-700" ref={container}>
                {testimonialData.testimonials.map((t) => (
                  <div
                    key={t.id}
                    className="flex flex-col items-center justify-center gap-4 shrink-0 w-full"
                  >
                    <div className="flex items-center justify-center flex-col">
                      <img
                        className="w-20 aspect-square rounded-full"
                        src={t.image}
                        alt="testimonial image"
                      />
                      <p>{t.name}</p>
                    </div>
                    <div className="flex items-center">
                      {Array.from(Array(5).keys()).map(() => {
                        return (
                          <img
                            className="w-5 "
                            src="/images/star.svg"
                            alt="rating star"
                          />
                        );
                      })}
                    </div>
                    <div className="max-w-xl text-center">
                      <p>{t.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {index}
          <div className="flex gap-1 items-center justify-center mt-6">
            <div className="w-6 h-2 bg-[#BF7C63] rounded-full cursor-pointer"></div>
            <div className="w-2 h-2 bg-[#BF7C63] rounded-full cursor-pointer"></div>
            <div className="w-2 h-2 bg-[#BF7C63] rounded-full cursor-pointer"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial_section;
