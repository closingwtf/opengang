"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";

export function InViewDiv({
  children,
  ...props
}: { children: React.ReactNode } & any) {
  const containerRef = useRef<HTMLDivElement>(null);
  let isInView = useInView(containerRef, { once: true, amount: 0.4 });

  return (
    <div ref={containerRef} {...props}>
      {isInView ? children : null}
    </div>
  );
}
