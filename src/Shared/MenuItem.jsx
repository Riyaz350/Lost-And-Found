import * as React from "react";
import { motion } from "framer-motion";
import './styles.css'


const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    }
  },
  closed: {
    y: -50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 }
    }
  }
};

const colors = [
    {
        name:'hello'
    },
    {
        name:'hello'
    },
    {
        name:'hello'
    },
    {
        name:'hello'
    },
    {
        name:'hello'
    },
];

export const MenuItem = ({ i }) => {
  const style = { border: `2px solid ${colors[i]}` };
  return (
    <motion.li
    className="text-3xl"
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <h1>{colors[i].name}</h1>
    </motion.li>
  );
};
