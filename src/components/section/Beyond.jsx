"use client";

import { useState } from "react";
import GooeyNav from "../reactbits/GooeyNav";
import ProjectPanel from "../beyond/Project/ProjectPanel";
import HobyPanel from "../beyond/Hoby/HobyPanel";
import ActivityPanel from "../beyond/Activity/ActivityPanel";

const items = [
  {
    label: "Project",
    href: "#",
  },
  {
    label: "Hoby",
    href: "#",
  },
  {
    label: "Activity",
    href: "#",
  },
];

export default function Beyond() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section
      id="beyond"
      className="relative overflow-hidden bg-[#030305] px-5 py-16 text-white sm:px-7 sm:py-20 lg:px-10 xl:px-14"
    >
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center">
        <div className="pt-8 text-center sm:pt-10">
          <h2 className="text-[3.2rem] font-bold tracking-[-0.05em] sm:text-[4rem] lg:text-[4.5rem]">
            Beyond
          </h2>

          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/45 sm:text-base">
            Where curiosity goes further.
          </p>
        </div>

        <div className="mt-20 flex items-center justify-center sm:mt-24">
          <GooeyNav
            items={items}
            particleCount={15}
            particleDistances={[90, 10]}
            particleR={100}
            initialActiveIndex={0}
            animationTime={600}
            timeVariance={300}
            colors={[1, 2, 3, 1, 2, 3, 1, 4]}
            onChange={(index) => setActiveTab(index)}
          />
        </div>

        <div className="mt-10 w-full sm:mt-12">
          {activeTab === 0 && <ProjectPanel />}

          {activeTab === 1 && <HobyPanel />}

          {activeTab === 2 && <ActivityPanel />}
        </div>
      </div>
    </section>
  );
}