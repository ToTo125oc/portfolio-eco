"use client";

import { motion } from "framer-motion";
import { usePathname } from 'next/navigation';
import { useEffect, useState } from "react";

export default function AnimatedLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [, setIsNavigating] = useState(false);

  useEffect(() => {
    setIsNavigating(true);
    const timer = setTimeout(() => {
      setIsNavigating(false);
    }, 450); 

    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <motion.div
      key={pathname}
      initial={{ translateY: 20, opacity: 0 }} 
      animate={{ 
        translateY: 0,
        opacity: 1 
      }}
      transition={{ ease: "easeInOut", duration: 0.75 }}
      style={{ willChange: 'transform' }}
    >
      {children}
    </motion.div>
  );
}
