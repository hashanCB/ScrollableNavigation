"use client";

import ButtonComp from "./components/ButtonComp";
import { navLinks } from "./api/Data";

import React, { useEffect, useRef } from "react";

const Home = () => {
  const scrollContainerRef = useRef(null);

  const handleScrollLeft = () => {
    if (scrollContainerRef.current) {
      smoothScroll(scrollContainerRef.current, -200);
    }
  };

  const handleScrollRight = () => {
    if (scrollContainerRef.current) {
      smoothScroll(scrollContainerRef.current, 200);
    }
  };

  const smoothScroll = (element, distance) => {
    const start = element.scrollLeft;
    const startTime = performance.now();

    const scroll = (timestamp) => {
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / 500, 1); // Duration for smooth scroll (500ms)

      element.scrollLeft = start + distance * progress;

      if (progress < 1) {
        requestAnimationFrame(scroll);
      }
    };

    requestAnimationFrame(scroll);
  };

  return (
    <div className="flex flex-col bg-black m-auto p-auto">
      <div
        className="flex overflow-x-scroll pb-10  mx-[65px] transition-transform relative  delay-500"
        style={{
          overflowX: "scroll",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
        ref={scrollContainerRef}
      >
        <div className="flex whitespace-nowrap gap-5 m-4">
          {navLinks.map((item, index) => (
            <ButtonComp
              key={index}
              name={item.title}
              addclass={` flex   bg-fuchsia-300 rounded-lg px-4 py-2  flex items-center whitespace-nowrap  delay-150 transition-transform  `}
            />
          ))}
        </div>
      </div>
      <div className=" absolute top-4 left-3  bg-gradient-to-l from-slate-700  to-transparent rounded-lg">
        <button
          onClick={handleScrollLeft}
          className="px-4 py-2 text-white mr-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-6 h-6  "
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18"
            />
          </svg>
        </button>
      </div>
      <div className=" absolute right-3 top-4 bg-gradient-to-r from-slate-700  to-transparent rounded-lg">
        <button
          onClick={handleScrollRight}
          className="px-4 py-2 text-white mr-2 rounded-full"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Home;
