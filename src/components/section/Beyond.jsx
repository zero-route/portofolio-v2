"use client";

import GooeyNav from "../reactbits/GooeyNav";

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
  return (
    <section
      id="beyond"
      className="relative min-h-screen overflow-hidden bg-[#030305] px-5 py-24 text-white sm:px-7 lg:px-10 xl:px-14"
    >
      <div className="mx-auto flex min-h-[70vh] w-full max-w-7xl flex-col items-center justify-center">
        <GooeyNav
          items={items}
          particleCount={15}
          particleDistances={[90, 10]}
          particleR={100}
          initialActiveIndex={0}
          animationTime={600}
          timeVariance={300}
          colors={[1, 2, 3, 1, 2, 3, 1, 4]}
        />
      </div>
    </section>
  );
}