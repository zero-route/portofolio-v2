"use client";

import { useEffect, useRef, useState } from "react";

function useInViewport(threshold = 0.15) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold]);

  return [ref, inView];
}

export default function NodeDiagram({ nodes = [] }) {
  const [wrapperRef, inView] = useInViewport();

  return (
    <div
      ref={wrapperRef}
      className="flex items-center gap-1.5 overflow-x-auto pb-1"
      style={{ scrollbarWidth: "none" }}
    >
      {nodes.map((label, index) => (
        <div key={label + index} className="flex shrink-0 items-center gap-1.5">
          <div className="min-w-[92px] max-w-[140px] rounded-lg border border-white/10 bg-white/[0.04] px-2.5 py-2 text-center text-[10px] leading-snug text-white/75">
            {label}
          </div>

          {index < nodes.length - 1 && (
            <div className="relative h-px w-6 shrink-0 bg-white/15">
              <span
                className={`node-pulse-dot ${inView ? "" : "node-pulse-paused"}`}
                style={{ animationDelay: `${index * 0.25}s` }}
              />
            </div>
          )}
        </div>
      ))}

      <style jsx>{`
        .node-pulse-dot {
          position: absolute;
          top: 50%;
          left: 0%;
          width: 5px;
          height: 5px;
          border-radius: 9999px;
          background: linear-gradient(90deg, #8b5cf6, #38bdf8);
          transform: translate(-50%, -50%);
          animation: node-flow 1.8s linear infinite;
          box-shadow: 0 0 6px rgba(139, 92, 246, 0.8);
        }

        .node-pulse-paused {
          animation-play-state: paused;
          opacity: 0;
        }

        @keyframes node-flow {
          0% {
            left: 0%;
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            left: 100%;
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}
