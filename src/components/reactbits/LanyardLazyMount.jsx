"use client";

import { useEffect, useRef, useState } from "react";
import Lanyard from "@/components/features/lanyard/Lanyard";

export default function LanyardLazyMount({ rootMargin = "200px", ...lanyardProps }) {
  const [visible, setVisible] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const node = containerRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { rootMargin }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [rootMargin]);

  return (
    <div ref={containerRef} className="h-full w-full">
      {visible ? <Lanyard {...lanyardProps} /> : null}
    </div>
  );
}
