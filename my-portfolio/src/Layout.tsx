// src/Layout.tsx
import React from "react";
import { motion } from "framer-motion";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <motion.div
      className="bg-gray-50 text-gray-900 font-sans"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      {children}
    </motion.div>
  );
};

export default Layout;
