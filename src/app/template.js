"use client";

import { motion } from 'framer-motion';

export default function Template({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, rotate: 2 }}
      animate={{ opacity: 1, y: 0, rotate: 0 }}
      exit={{ opacity: 0, y: -30, rotate: -2 }}
      transition={{ 
        type: "spring", 
        stiffness: 140, 
        damping: 18, 
        mass: 0.9 
      }}
      className="w-full h-full min-h-screen"
    >
      {children}
    </motion.div>
  );
}
