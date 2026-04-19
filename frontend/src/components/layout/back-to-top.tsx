"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { useResonator } from "@/components/theme/resonator-provider";

export function BackToTop() {
  const [show, setShow] = useState(false);
  const { theme } = useResonator();

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          transition={{ duration: 0.2 }}
          onClick={scrollToTop}
          className="fixed bottom-6 left-6 z-40 p-3 rounded-xl glass-card hover:border-wuthering-accent/50 transition-all duration-300 group"
          style={{
            boxShadow: `0 4px 20px ${theme.colors.primary}30`,
          }}
          aria-label="返回顶部"
        >
          <motion.div
            animate={{ y: [0, -3, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowUp 
              className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors duration-200" 
            />
          </motion.div>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
