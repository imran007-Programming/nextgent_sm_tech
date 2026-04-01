"use client";
import React, { useRef } from "react";
import { useScroll, useTransform, motion, MotionValue } from "motion/react";

export const ContainerScroll = ({
  titleComponent,
  children,
}: {
  titleComponent: string | React.ReactNode;
  children: React.ReactNode;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const rotate = useTransform(scrollYProgress, [0, 0.7], [55, 0], {
    clamp: true,
  });

  const scale = useTransform(scrollYProgress, [0, 0.7], [0.75, 1], {
    clamp: true,
  });

  const opacity = useTransform(scrollYProgress, [0, 0.4], [0.5, 1], {
    clamp: true,
  });

  const translateY = useTransform(scrollYProgress, [0, 0.7], [60, 0], {
    clamp: true,
  });

  return (
    <div ref={containerRef} className="h-[250vh]">
      <div
        className="sticky top-0 h-screen flex items-center justify-center"
        style={{ perspective: "1400px", perspectiveOrigin: "50% 40%" }}
      >
        <Card rotate={rotate} scale={scale} opacity={opacity} translateY={translateY}>
          {children}
        </Card>
      </div>
    </div>
  );
};

export const Header = ({ translate, titleComponent }: any) => {
  return (
    <motion.div style={{ translateY: translate }} className="max-w-5xl mx-auto text-center">
      {titleComponent}
    </motion.div>
  );
};

export const Card = ({
  rotate,
  scale,
  opacity,
  translateY,
  children,
}: {
  rotate: MotionValue<number>;
  scale: MotionValue<number>;
  opacity: MotionValue<number>;
  translateY: MotionValue<number>;
  children: React.ReactNode;
}) => {
  return (
    <motion.div
      style={{
        rotateX: rotate,
        scale,
        opacity,
        y: translateY,
        transformOrigin: "50% 100%",
        willChange: "transform, opacity",
      }}
      className="max-w-[75vw] w-full mx-auto rounded-2xl overflow-hidden"
    >
      {children}
    </motion.div>
  );
};
