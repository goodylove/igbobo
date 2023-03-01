import React, { useEffect, useState } from "react";
import img from "../components/assets/Component 5.png";
import { motion, transform } from "framer-motion";

const Animate = () => {
  const [x, setX] = useState(0);
  const [y, sety] = useState(-1200);

  useEffect(() => {
    const interval = setTimeout(() => {
      sety(0);
      setX(35);
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
