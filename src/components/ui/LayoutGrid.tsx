import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { cn } from "../../lib/utils";

export interface CardProps {
  id: number;
  thumbnail: string;
  category: string;
  className?: string;
  content: {
    alt: string;
    category: string;
  };
}

interface LayoutGridProps {
  cards: CardProps[];
  className?: string;
  selectedCategory?: string;
}

export function LayoutGrid({
  cards,
  className,
  selectedCategory,
}: LayoutGridProps) {
  const [selected, setSelected] = useState<CardProps | null>(null);
  const [lastSelected, setLastSelected] = useState<CardProps | null>(null);
  const [imageAspects, setImageAspects] = useState<Record<number, string>>({});
  const [hovered, setHovered] = useState<number | null>(null);

  useEffect(() => {
    // Preload images to determine aspect ratios
    cards.forEach(card => {
      const img = new Image();
      img.src = card.thumbnail;
      
      img.onload = () => {
        setImageAspects(prev => {
          // Determine if image is portrait, landscape, or square
          const aspectClass = img.height > img.width 
            ? "row-span-2" // Portrait (tall)
            : img.width > img.height * 1.2
              ? "col-span-2" // Wide landscape
              : ""; // Standard landscape or square
          
          return {...prev, [card.id]: aspectClass};
        });
      };
    });
  }, [cards]);

  const handleClick = (card: CardProps) => {
    setLastSelected(selected);
    setSelected(card);
  };

  const handleOutsideClick = () => {
    setLastSelected(selected);
    setSelected(null);
  };

  const handleMouseEnter = (id: number) => {
    setHovered(id);
  };

  const handleMouseLeave = () => {
    setHovered(null);
  };

  return (
    <div
      className={cn(
        "w-full h-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 auto-rows-max gap-4 p-4 mx-auto",
        className
      )}
    >
      {cards.map((card) => (
        <motion.div
          key={card.id}
          className={cn(
            "relative rounded-xl cursor-pointer",
            imageAspects[card.id] || "",
            card.className,
            hovered !== null && hovered !== card.id && "blur-sm scale-[0.98]"
          )}
          onClick={() => handleClick(card)}
          onMouseEnter={() => handleMouseEnter(card.id)}
          onMouseLeave={handleMouseLeave}
          layout
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          <Card 
            card={card} 
            isSelected={selected?.id === card.id} 
            isHovered={hovered === card.id}
          />
        </motion.div>
      ))}
      <motion.div
        onClick={handleOutsideClick}
        className={cn(
          "absolute inset-0 h-full w-full bg-black/40 z-10",
          selected ? "pointer-events-auto" : "pointer-events-none opacity-0"
        )}
        animate={{ opacity: selected ? 1 : 0 }}
      >
        {selected && (
          <motion.div
            className="absolute inset-0 z-20 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <SelectedCard
              card={selected}
              onClose={handleOutsideClick}
            />
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}

export const Card = ({
  card,
  isSelected,
  isHovered,
}: {
  card: CardProps;
  isSelected: boolean;
  isHovered: boolean;
}) => {
  return (
    <div
      className={cn(
        "h-full w-full rounded-xl overflow-hidden",
        isSelected ? "z-30" : "z-0"
      )}
    >
      <motion.div
        className="relative h-full w-full"
        animate={{
          scale: isSelected ? 0.95 : 1,
        }}
      >
        <div className="w-full h-full min-h-[250px]">
          <motion.img
            src={card.thumbnail}
            className="h-full w-full object-cover object-center"
            alt={card.content.alt}
          />
        </div>
        <div 
          className={cn(
            "absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60 flex flex-col justify-end p-4 transition-opacity duration-300",
            isHovered ? "opacity-100" : "opacity-70"
          )}
        >
          <h3 className="text-white text-xl font-semibold mb-1">{card.content.alt}</h3>
          <p className="text-white/80 text-sm">{card.content.category}</p>
        </div>
      </motion.div>
    </div>
  );
};

export const SelectedCard = ({
  card,
  onClose,
}: {
  card: CardProps;
  onClose: () => void;
}) => {
  return (
    <motion.div
      layoutId={`card-${card.id}`}
      className="bg-black relative max-w-5xl w-full h-auto max-h-[85vh] rounded-xl overflow-hidden"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="relative flex items-center justify-center p-0">
        <img
          src={card.thumbnail}
          className="w-full h-auto max-h-[80vh] object-contain"
          alt={card.content.alt}
        />
        <motion.button
          onClick={onClose}
          className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 backdrop-blur-sm z-10"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </motion.button>
      </div>
      <div className="absolute bottom-0 left-0 right-0 bg-black/60 backdrop-blur-sm p-4">
        <h3 className="text-white text-xl font-semibold mb-1">{card.content.alt}</h3>
        <p className="text-white/80 text-sm">{card.content.category}</p>
      </div>
    </motion.div>
  );
};
