"use client";
import React, { ReactNode, useRef, useState } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Card, CardHeader, CardTitle, CardContent } from "./card";

export const StickyScroll = ({
  content,
  contentClassName,
  side = "right",
}: {
  content: {
    title: string;
    description: string | ReactNode;
    content?: React.ReactNode | unknown;
  }[];
  side?: "right" | "left";
  contentClassName?: string;
}) => {
  const [activeCard, setActiveCard] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    container: ref,
    offset: ["start start", "end start"],
  });
  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength);
    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint);
        if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
          return index;
        }
        return acc;
      },
      0,
    );
    setActiveCard(closestBreakpointIndex);
  });
  // const linearGradients = [
  //   "linear-gradient(to bottom right, var(--cyan-500), var(--emerald-500))",
  //   "linear-gradient(to bottom right, var(--pink-500), var(--indigo-500))",
  //   "linear-gradient(to bottom right, var(--orange-500), var(--yellow-500))",
  // ];

  // const [backgroundGradient, setBackgroundGradient] = useState(
  //   linearGradients[0],
  // );

  // useEffect(() => {
  //   setBackgroundGradient(linearGradients[activeCard % linearGradients.length]);
  // }, [activeCard]);

  const renderSide = () => (
    <div
      className="relative overflow-y-auto flex items-start px-4 w-[40%]"
      ref={ref}
    >
      <div>
        {content.map((item, index) => (
          <Card
            key={item.title + index}
            className={cn(
              "my-10 py-4 px-4 border-none bg-transparent shadow-none transition-all duration-300",
              activeCard === index
                ? "opacity-100 scale-100"
                : "opacity-60 scale-95"
            )}
          >
            <CardHeader className="p-0 mb-2">
              <CardTitle className="text-xl font-bold text-foreground">
                {item.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0 text-muted-foreground text-base">
              {item.description}
            </CardContent>
          </Card>
        ))}
        <div className="h-40" />
      </div>
    </div>
  );

  return (
    <Card className="h-full bg-background dark:bg-background border border-border rounded-lg py-10 mb-4">
      <motion.div className="h-[500px] z-0 flex justify-evenly relative space-x-20 rounded-md px-10">
        {side === "left" && renderSide()}
        <div
          className={cn(
            "hidden h-full lg:block w-[50%] rounded-md sticky top-6 overflow-hidden",
            contentClassName,
          )}
        >
          {React.isValidElement(content[activeCard].content) || typeof content[activeCard].content === 'string' ? content[activeCard].content : null}
        </div>
        {side === "right" && renderSide()}
      </motion.div>
    </Card>
  );
};
