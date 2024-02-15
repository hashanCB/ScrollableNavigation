"use client";
import React, { useEffect, useRef } from "react";

const AnimatedBox = () => {
  const scrollContainerRef = useRef(null);

  const handleScrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft -= 100;
    }
  };

  const handleScrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft += 100;
    }
  };

  useEffect(() => {
    const handleWheel = (e) => {
      e.preventDefault();
    };

    // Add event listener to window to prevent global scroll
    window.addEventListener("wheel", handleWheel, { passive: false });

    // Cleanup function to remove event listener when component unmounts
    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, []);

  return (
    <div className="flex flex-col bg-white m-auto p-auto">
      <div
        className="flex overflow-x-scroll pb-10 transition-transform  delay-100"
        style={{
          overflowX: "scroll",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
        ref={scrollContainerRef}
      >
        <div className="flex flex-nowrap lg:ml-40 md:ml-20 ml-10 ">
          {[...Array(8)].map((_, index) => (
            <div key={index} className="inline-block px-3">
              <div className="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-teal-400 hover:shadow-xl transition-shadow duration-300 ease-in-out"></div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center mt-2">
        <button
          onClick={handleScrollLeft}
          className="px-4 py-2 bg-blue-500 text-white mr-2"
        >
          Scroll Left
        </button>
        <button
          onClick={handleScrollRight}
          className="px-4 py-2 bg-blue-500 text-white"
        >
          Scroll Right
        </button>
      </div>
    </div>
  );
};

export default AnimatedBox;
