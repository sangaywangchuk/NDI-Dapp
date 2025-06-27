"use client";

import { Button } from "@/components/ui/button";
import { motion } from "motion/react";
import { useRouter } from "next/navigation";

export const NotFoundComponent = () => {
  const router = useRouter();

  const handleGoHome = () => {
    router.push("/dashboard");
  };

  return (
    <div className="flex flex-1 items-center justify-center bg-background">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center space-y-6"
      >
        <div className="relative">
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            className="text-9xl font-bold text-primary"
          >
            404
          </motion.div>
          <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-primary rounded-full" />
        </div>

        <h1 className="text-3xl font-semibold tracking-tight">
          Oops! Page Not Found
        </h1>
        <p className="text-muted-foreground max-w-md mx-auto">
          The page you are looking for might have been removed, had its name
          changed, or is temporarily unavailable.
        </p>

        <Button
          onClick={handleGoHome}
          className="mt-6"
          size="lg"
          aria-label="Go back to home page"
        >
          Go Back Home
        </Button>
      </motion.div>
    </div>
  );
};
