"use client";

import React from "react";
import { motion } from "framer-motion";
import { Camera, Film, Aperture, Focus, Image, Zap, Circle } from "lucide-react";

export function FloatingElements() {
  const elements = [
    { Icon: Camera, delay: 0, x: "10%", y: "20%" },
    { Icon: Film, delay: 2, x: "80%", y: "15%" },
    { Icon: Aperture, delay: 4, x: "15%", y: "70%" },
    { Icon: Focus, delay: 1, x: "85%", y: "60%" },
    { Icon: Image, delay: 3, x: "20%", y: "40%" },
    { Icon: Zap, delay: 5, x: "75%", y: "80%" },
    { Icon: Circle, delay: 2.5, x: "90%", y: "35%" },
    { Icon: Camera, delay: 4.5, x: "5%", y: "85%" },
    { Icon: Film, delay: 1.5, x: "25%", y: "10%" },
    { Icon: Aperture, delay: 3.5, x: "70%", y: "25%" },
    { Icon: Focus, delay: 6, x: "30%", y: "75%" },
    { Icon: Image, delay: 0.5, x: "95%", y: "70%" },
    { Icon: Zap, delay: 2.8, x: "12%", y: "50%" },
    { Icon: Circle, delay: 5.2, x: "60%", y: "5%" },
    { Icon: Camera, delay: 3.8, x: "45%", y: "90%" },
    { Icon: Film, delay: 1.2, x: "88%", y: "45%" },
    { Icon: Aperture, delay: 4.8, x: "35%", y: "25%" },
    { Icon: Focus, delay: 0.8, x: "65%", y: "85%" },
    { Icon: Image, delay: 6.2, x: "8%", y: "35%" },
    { Icon: Zap, delay: 2.2, x: "92%", y: "55%" },
    { Icon: Circle, delay: 5.8, x: "40%", y: "15%" },
    { Icon: Camera, delay: 3.2, x: "78%", y: "95%" },
    { Icon: Film, delay: 1.8, x: "18%", y: "60%" },
    { Icon: Aperture, delay: 4.2, x: "55%", y: "35%" },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {elements.map((element, index) => {
        const { Icon, delay, x, y } = element;
        
        return (
          <motion.div
            key={index}
            className="absolute text-white/30"
            style={{
              left: x,
              top: y,
            }}
            initial={{ 
              opacity: 0, 
              scale: 0,
              rotate: 0 
            }}
            animate={{ 
              opacity: [0, 0.8, 0],
              scale: [0, 1, 0],
              rotate: [0, 180, 360],
              y: [-20, 20, -20],
            }}
            transition={{
              duration: 8,
              delay: delay,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
            }}
          >
            <Icon size={32} strokeWidth={1.5} />
          </motion.div>
        );
      })}
      
      {/* Additional smaller elements */}
      {Array.from({ length: 15 }).map((_, index) => (
        <motion.div
          key={`dot-${index}`}
          className="absolute w-2 h-2 bg-white/40 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: 6,
            delay: Math.random() * 3,
            repeat: Infinity,
            repeatType: "loop",
          }}
        />
      ))}
    </div>
  );
} 