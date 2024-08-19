import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const PixelatedImage = ({ src, alt, onAnimationComplete }) => {
  const [cells, setCells] = useState([]);
  const gridSize = 20;

  useEffect(() => {
    const newCells = [];
    for (let i = 0; i < gridSize * gridSize; i++) {
      newCells.push({
        id: i,
        delay: Math.random() * 0.4,
      });
    }
    setCells(newCells);
  }, [src]);

  return (
    <div className="relative h-full w-full">
      <Image
        src={src}
        alt={alt}
        layout="fill"
        objectFit="cover"
        quality={100}
      />
      <div className="absolute inset-0 grid grid-cols-9 grid-rows-9">
        {cells.map((cell) => (
          <motion.div
            key={cell.id}
            className="bg-white"
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            transition={{
              duration: 0.4,
              delay: cell.delay,
              ease: [0.26, 0.08, 0.25, 1],
            }}
            onAnimationComplete={(definition) => {
              if (cell.id === cells.length - 1 && definition === "animate") {
                onAnimationComplete();
              }
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default PixelatedImage;
