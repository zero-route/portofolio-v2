"use client";

import { useState } from "react";
import GooeyNav from "../reactbits/GooeyNav";
import ProjectPanel from "../beyond/Project/ProjectPanel";
import HobyPanel from "../beyond/Hoby/HobyPanel";

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
      className="relative min-h-screen overflow-hidden bg-[#030305] px-5 py-24 text-white sm:px-7 lg:px-10 xl:px-14"
    >
      <div className="mx-auto flex min-h-[70vh] w-full max-w-7xl flex-col items-center">
        <div className="pt-24 text-center sm:pt-28">
          <h2 className="text-[3.2rem] font-bold tracking-[-0.05em] sm:text-[4rem] lg:text-[4.5rem]">
            Beyond
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/55 sm:text-lg">
            Where curiosity goes further.
          </p>
        </div>

        <div className="mt-40 flex items-center justify-center sm:mt-48">
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

        <div className="mt-16 w-full">
          {activeTab === 0 && <ProjectPanel />}

          {activeTab === 1 && <HobyPanel />}

          {activeTab === 2 && (
            <p className="text-center text-sm text-white/40">
              Activity — coming soon.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}