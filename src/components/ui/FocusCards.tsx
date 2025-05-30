"use client";

import React, { useState, useEffect } from "react";
import { cn } from "../../lib/utils";
import { motion } from "framer-motion";
import { X } from "lucide-react";

export const Card = React.memo(
  ({
    card,
    index,
    hovered,
    setHovered,
    onSelect,
  }: {
    card: any;
    index: number;
    hovered: number | null;
    setHovered: React.Dispatch<React.SetStateAction<number | null>>;
    onSelect: (card: any) => void;
  }) => {
    // Track if image is portrait or landscape
    const [aspectRatio, setAspectRatio] = useState<string>("");
    
    useEffect(() => {
      const img = new Image();
      img.src = card.src;
      
      img.onload = () => {
        // Determine if image is portrait, landscape, or square
        if (img.height > img.width) {
          setAspectRatio("portrait");
        } else if (img.width > img.height * 1.2) {
          setAspectRatio("wide");
        } else {
          setAspectRatio("standard");
        }
      };
    }, [card.src]);
    
    return (
      <div
        onClick={() => onSelect(card)}
        onMouseEnter={() => setHovered(index)}
        onMouseLeave={() => setHovered(null)}
        className={cn(
          "rounded-lg relative bg-gray-900 overflow-hidden transition-all duration-300 ease-out cursor-pointer",
          aspectRatio === "portrait" ? "row-span-2" : "",
          aspectRatio === "wide" ? "col-span-2" : "",
          "min-h-[250px]",
          hovered !== null && hovered !== index && "blur-sm scale-[0.98]"
        )}
      >
        <img
          src={card.src}
          alt={card.title}
          className="object-cover absolute inset-0 h-full w-full"
        />
        <div
          className={cn(
            "absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60 flex flex-col justify-end p-4 transition-opacity duration-300",
            hovered === index ? "opacity-100" : "opacity-70"
          )}
        >
          <div className="text-xl font-medium text-white">
            {card.title}
          </div>
          <p className="text-white/80 text-sm mt-1">{card.category}</p>
        </div>
      </div>
    );
  }
);

Card.displayName = "Card";

export type FocusCardProps = {
  title: string;
  src: string;
  category?: string;
};

export function FocusCards({ cards }: { cards: FocusCardProps[] }) {
  const [hovered, setHovered] = useState<number | null>(null);
  const [selectedCard, setSelectedCard] = useState<FocusCardProps | null>(null);

  const handleCardSelect = (card: FocusCardProps) => {
    setSelectedCard(card);
  };

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 auto-rows-max gap-4 w-full">
        {cards.map((card, index) => (
          <Card
            key={card.src + index}
            card={card}
            index={index}
            hovered={hovered}
            setHovered={setHovered}
            onSelect={handleCardSelect}
          />
        ))}
      </div>

      {/* Modal View */}
      {selectedCard && (
        <div 
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
          onClick={() => setSelectedCard(null)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="relative max-w-5xl w-full max-h-[90vh] flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={() => setSelectedCard(null)}
              className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 backdrop-blur-sm z-10"
            >
              <X className="w-6 h-6" />
            </button>
            <div className="relative h-full w-full flex items-center justify-center">
              <img
                src={selectedCard.src}
                alt={selectedCard.title}
                className="max-h-[80vh] w-auto object-contain"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black/60 backdrop-blur-sm p-4">
                <h3 className="text-white text-xl font-semibold mb-1">{selectedCard.title}</h3>
                <p className="text-white/80 text-sm">{selectedCard.category}</p>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </>
  );
} 