// ScrollableList.js
import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";

export const navLinks = [
  {
    id: "home",
    title: "Home",
  },
  {
    id: "features",
    title: "Features",
  },
  {
    id: "product",
    title: "Product",
  },
  {
    id: "clients",
    title: "Clients",
  },
  // Repeat the pattern for more items
  {
    id: "item5",
    title: "Item 5",
  },
  {
    id: "item6",
    title: "Item 6",
  },
  {
    id: "item7",
    title: "Item 7",
  },
  {
    id: "item8",
    title: "Item 8",
  },
  {
    id: "item9",
    title: "Item 9",
  },
  {
    id: "item10",
    title: "Item 10",
  },
  {
    id: "item11",
    title: "Item 11",
  },
  {
    id: "item12",
    title: "Item 12",
  },
  {
    id: "item13",
    title: "Item 13",
  },
  {
    id: "item14",
    title: "Item 14",
  },
  {
    id: "item15",
    title: "Item 15",
  },
  {
    id: "item16",
    title: "Item 16",
  },
  {
    id: "item17",
    title: "Item 17",
  },
  {
    id: "item18",
    title: "Item 18",
  },
  {
    id: "item19",
    title: "Item 19",
  },
  {
    id: "item20",
    title: "Item 20",
  },
];

const ScrollableList = () => {
  const scrollContainerRef = useRef(null);

  const handleScroll = (distance) => {
    if (scrollContainerRef.current) {
      smoothScroll(scrollContainerRef.current, distance);
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
        className="flex overflow-x-scroll pb-10 mx-[65px] transition-transform relative delay-500"
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
              addclass={`flex bg-fuchsia-300 rounded-lg px-4 py-2 flex items-center whitespace-nowrap delay-150 transition-transform`}
            />
          ))}
        </div>
      </div>
      <ScrollButton direction="left" onClick={() => handleScroll(-200)} />
      <ScrollButton direction="right" onClick={() => handleScroll(200)} />
    </div>
  );
};

const ScrollButton = ({ direction, onClick }) => {
  const gradientDirection = direction === "left" ? "to-l" : "to-r";
  return (
    <div
      className={`absolute ${
        direction === "left" ? "left-3" : "right-3"
      } top-4 bg-gradient-${gradientDirection} to-transparent rounded-lg`}
    >
      <button
        onClick={onClick}
        className="px-4 py-2 text-white mr-2 rounded-full"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d={
              direction === "left"
                ? "M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18"
                : "M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
            }
          />
        </svg>
      </button>
    </div>
  );
};

const ButtonComp = ({ name, addclass }) => {
  return (
    <motion.div
      // initial={{}}
      // animate={{ opacity: 1, scale: 1, x: -100 }}
      // transition={{}}
      className={addclass}
    >
      {name}
    </motion.div>
  );
};

export default ScrollableList;
