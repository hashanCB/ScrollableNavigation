"use client";

import ButtonComp from "./components/ButtonComp";
import { navLinks } from "./api/Data";

import React, { useEffect, useRef } from "react";
import ScrollableList from "./components/ScrollableList";

const Home = () => {
  return (
    <div>
      <ScrollableList />
    </div>
  );
};

export default Home;
