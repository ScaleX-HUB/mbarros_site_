import React, { useCallback, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export interface CardImage {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  thumbSrc?: string;
  thumbWidth?: number;
  thumbHeight?: number;
}

export interface CardStack3DProps {
  images: CardImage[];
  className?: string;
  cardWidth?: number;
  cardHeight?: number;
  adjacentMode?: "peek" | "hidden";
  spacing?: {
    x?: number;
    y?: number;
  };
  defaultFrontIndex?: number | null;
  frontIndex?: number | null;
  onFrontIndexChange?: (index: number | null) => void;
  autoFrontCycleMs?: number;
  allowDeselect?: boolean;
}

interface CardProps extends Omit<CardImage, "width" | "height"> {
  index: number;
  isHovered: boolean;
  isMobile: boolean;
  isFront?: boolean;
  frontCardIndex: number | null;
  onClick: (index: number) => void;
  cardBoxWidth: number;
  cardBoxHeight: number;
  imageWidth?: number;
  imageHeight?: number;
  adjacentMode: "peek" | "hidden";
  spacing: { x?: number; y?: number };
}

const Card = ({
  src,
  thumbSrc,
  alt,
  index,
  isHovered,
  isMobile,
  isFront,
  frontCardIndex,
  onClick,
  cardBoxWidth,
  cardBoxHeight,
  imageWidth,
  imageHeight,
  thumbWidth,
  thumbHeight,
  adjacentMode,
  spacing,
}: CardProps) => {
  const shouldUseThumb = !isFront && Boolean(thumbSrc);
  const resolvedSrc = shouldUseThumb ? thumbSrc! : src;
  const resolvedWidth = shouldUseThumb
    ? thumbWidth ?? imageWidth ?? cardBoxWidth
    : imageWidth ?? cardBoxWidth;
  const resolvedHeight = shouldUseThumb
    ? thumbHeight ?? imageHeight ?? cardBoxHeight
    : imageHeight ?? cardBoxHeight;

  return (
    <motion.div
      className={cn("absolute overflow-hidden rounded-xl bg-black shadow-lg", isFront && "z-20")}
      style={{
        width: cardBoxWidth,
        height: cardBoxHeight,
        transformStyle: "preserve-3d",
        transformOrigin: isMobile ? "top center" : "left center",
        zIndex: isFront ? 20 : 5 - index,
        filter:
          isFront || frontCardIndex === null || adjacentMode === "hidden"
            ? "none"
            : "blur(8px)",
        opacity:
          !isFront && frontCardIndex !== null && adjacentMode === "peek"
            ? 0.4
            : 1,
        pointerEvents:
          !isFront && frontCardIndex !== null && adjacentMode === "hidden"
            ? "none"
            : "auto",
      }}
      initial={{
        rotateY: 0,
        x: 0,
        y: 0,
        scale: 1,
        boxShadow: "0px 0px 15px rgba(0, 0, 0, 0.1)",
      }}
      animate={
        isFront
          ? adjacentMode === "hidden"
            ? {
                scale: 1,
                rotateY: 0,
                x: 0,
                y: 0,
                z: 20,
                boxShadow: "0px 12px 30px rgba(0, 0, 0, 0.45)",
              }
            : {
                scale: 1.2,
                rotateY: 0,
                x: 0,
                y: isMobile ? 0 : -50,
                z: 50,
                boxShadow: "0px 15px 40px rgba(0, 0, 0, 0.5)",
              }
          : frontCardIndex !== null
            ? adjacentMode === "hidden"
              ? {
                  rotateY: 0,
                  x: 0,
                  y: 0,
                  z: 0,
                  scale: 1,
                  opacity: 0,
                  boxShadow: "none",
                  transition: { duration: 0.18, ease: "easeOut" },
                }
              : {
                  rotateY: isMobile ? 0 : -10,
                  x: isMobile ? 0 : index * 10,
                  y: isMobile ? index * 10 : index * -6,
                  z: index * 10,
                  scale: 0.98,
                  boxShadow: `6px 10px 18px rgba(0, 0, 0, ${0.15 + index * 0.04})`,
                  transition: { type: "spring", stiffness: 260, damping: 26 },
                }
          : isHovered
            ? {
                rotateY: isMobile ? 0 : -45,
                x: isMobile ? 0 : index * (spacing.x ?? 50),
                y: isMobile ? index * (spacing.y ?? 50) : index * -5,
                z: index * 15,
                scale: 1.05,
                boxShadow: `10px 20px 30px rgba(0, 0, 0, ${0.2 + index * 0.05})`,
                transition: {
                  type: "spring",
                  stiffness: 300,
                  damping: 50,
                  delay: index * 0.1,
                },
              }
            : {
                rotateY: 0,
                x: 0,
                y: 0,
                z: 0,
                scale: 1,
                boxShadow: "0px 0px 15px rgba(0, 0, 0, 0.1)",
                transition: {
                  type: "spring",
                  stiffness: 300,
                  damping: 20,
                  delay: (4 - index) * 0.1,
                },
              }
      }
      onClick={() => onClick(index)}
    >
      <img
        src={resolvedSrc}
        alt={alt}
        width={resolvedWidth}
        height={resolvedHeight}
        className="h-full w-full object-contain rounded-xl"
        loading={isFront ? "eager" : "lazy"}
        decoding="async"
        draggable={false}
      />
    </motion.div>
  );
};

export function CardStack3D({
  images,
  className,
  cardWidth = 320,
  cardHeight = 192,
  adjacentMode = "peek",
  spacing = { x: 50, y: 50 },
  defaultFrontIndex = null,
  frontIndex,
  onFrontIndexChange,
  autoFrontCycleMs,
  allowDeselect = true,
}: CardStack3DProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [frontCardIndex, setFrontCardIndex] = useState<number | null>(() => {
    if (defaultFrontIndex === null || defaultFrontIndex === undefined) return null;
    if (images.length === 0) return null;
    return Math.min(Math.max(defaultFrontIndex, 0), images.length - 1);
  });

  const isControlled = frontIndex !== undefined;
  const currentFrontIndex = isControlled ? frontIndex! : frontCardIndex;

  const setFrontIndex = useCallback((next: number | null) => {
    if (!isControlled) setFrontCardIndex(next);
    onFrontIndexChange?.(next);
  }, [isControlled, onFrontIndexChange]);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (!autoFrontCycleMs) return;
    if (images.length <= 1) return;

    // In controlled mode, only cycle if parent can receive updates.
    if (isControlled && !onFrontIndexChange) return;

    // Ensure we have a front card when cycling.
    setFrontIndex(currentFrontIndex === null ? 0 : currentFrontIndex);

    const id = window.setInterval(() => {
      setFrontIndex(((currentFrontIndex ?? 0) + 1) % images.length);
    }, autoFrontCycleMs);

    return () => window.clearInterval(id);
  }, [
    autoFrontCycleMs,
    currentFrontIndex,
    images.length,
    isControlled,
    onFrontIndexChange,
    setFrontIndex,
  ]);

  return (
    <div className={cn("flex justify-center items-center", className)}>
      <div
        className="relative"
        style={{ width: cardWidth, height: cardHeight, perspective: 1000 }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {images.map((image, index) => {
          const { width: imgWidth, height: imgHeight, ...rest } = image;
          return (
            <Card
              key={`${image.src}-${index}`}
              {...rest}
              imageWidth={imgWidth}
              imageHeight={imgHeight}
              index={index}
              isHovered={isHovered}
              isMobile={isMobile}
              isFront={currentFrontIndex === index}
              frontCardIndex={currentFrontIndex}
              onClick={(idx) => {
                if (currentFrontIndex === idx) {
                  setFrontIndex(allowDeselect ? null : idx);
                  return;
                }
                setFrontIndex(idx);
              }}
              cardBoxWidth={cardWidth}
              cardBoxHeight={cardHeight}
              adjacentMode={adjacentMode}
              spacing={spacing}
            />
          );
        })}
      </div>
    </div>
  );
}
