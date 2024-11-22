"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

export const Logo = () => {
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimating(false);
    }, 4500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Link className="flex items-center p-2" href="/">
      <span
        className={`font-black text-md dark:text-yellow-400 mt-1 ${
          isAnimating ? "animate-bounce" : ""
        }`}
      >
        stats.
      </span>
      <span
        className={`text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 ${
          isAnimating ? "animate-pulse" : ""
        }`}
      >
        closing
      </span>
      <span
        className={`font-black text-md dark:text-yellow-400 mt-1 ${
          isAnimating ? "animate-bounce" : ""
        }`}
      >
        .wtf
      </span>
    </Link>
  );
};
