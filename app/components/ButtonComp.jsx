"use client";
import React from "react";

import { motion } from "framer-motion";

const ButtonComp = ({ name, addclass }) => {
  return (
    <motion.div
      //   initial={{}}
      //   animate={{ opacity: 1, scale: 1, x: -100 }}
      //   transition={{}}
      className={addclass}
    >
      {name}
    </motion.div>
  );
};

export default ButtonComp;
