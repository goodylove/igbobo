import React, { useEffect, useState } from "react";
import img from "../components/assets/Component 5.png";
import { motion } from "framer-motion";

const Animate = () => {
  const [x, setX] = useState(0);
  const [y, sety] = useState(-800);

  useEffect(() => {
    const interval = setTimeout(() => {
      sety(0);
      setX(-60);
    }, 2000);
    return () => clearInterval(interval);
  }, []);
  return (
    <motion.div animate={{ x, y }} transition={{ type: "spring" }}>
      <img src={img} alt="" />
    </motion.div>
  );
};

export default Animate;
