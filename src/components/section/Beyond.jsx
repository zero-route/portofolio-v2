"use client";

import { useState } from "react";
import GooeyNav from "@/components/reactbits/GooeyNav";

const items = [
  {
    label: "Project",
    href: "#beyond-project",
  },
  {
    label: "Hoby",
    href: "#beyond-hoby",
  },
  {
    label: "Activity",
    href: "#beyond-activity",
  },
];

export default function Beyond() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section
      id="beyond"
      className="relative w-full overflow-hidden bg-[#030305] px-5 py-24 text-white sm:px-7 sm:py-28 lg:px-10 lg:py-32 xl:px-14"
    >
      <div className="mx-auto w-full max-w-[1550px]">
        <div className="mb-12 text-center sm:mb-16">
          <h2 className="font-sans text-4xl font-bold tracking-[-0.045em] text-white sm:text-5xl">
            Beyond
          </h2>

          <p className="mt-3 font-sans text-sm text-white/40 sm:text-base">
            More about me beyond the usual portfolio.
          </p>
        </div>

        <div className="flex min-h-[160px] items-center justify-center">
          <GooeyNav
            items={items}
            particleCount={15}
            particleDistances={[90, 10]}
            particleR={100}
            initialActiveIndex={activeIndex}
            animationTime={600}
            timeVariance={300}
            colors={[1, 2, 3, 1, 2, 3, 1, 4]}
          />
        </div>

        <div className="sr-only">
          <span id="beyond-project">Project</span>
          <span id="beyond-hoby">Hoby</span>
          <span id="beyond-activity">Activity</span>
        </div>
      </div>
    </section>
  );
}