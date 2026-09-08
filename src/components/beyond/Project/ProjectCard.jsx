"use client";

import { Eye } from "lucide-react";
import BorderGlow from "@/components/reactbits/BorderGlow";
import NodeDiagram from "./NodeDiagram";

const TYPE_STYLES = {
  automation: "bg-indigo-500/10 text-indigo-300 border-indigo-500/20",
  hardware: "bg-emerald-500/10 text-emerald-300 border-emerald-500/20",
  dashboard: "bg-sky-500/10 text-sky-300 border-sky-500/20",
};

export default function ProjectCard({ project, onViewDetail }) {
  const typeStyle =
    TYPE_STYLES[project.type] || TYPE_STYLES.automation;

  return (
    <BorderGlow
      backgroundColor="#0d0d14"
      borderRadius={16}
      glowRadius={36}
      glowIntensity={1}
      edgeSensitivity={30}
      coneSpread={25}
      colors={["#8b5cf6", "#6366f1", "#38bdf8"]}
      className="h-full w-full"
    >
      <div className="flex h-full flex-col gap-4 p-5">
        <div className="flex items-center justify-between gap-2">
          <span
            className={`rounded-full border px-2.5 py-0.5 text-[10px] font-medium tracking-wide ${typeStyle}`}
          >
            {project.typeLabel}
          </span>
        </div>

        <h3 className="font-sans text-base font-semibold leading-snug text-white">
          {project.title}
        </h3>

        <NodeDiagram nodes={project.nodes} />

        <p className="line-clamp-2 flex-1 font-sans text-xs leading-relaxed text-white/50">
          {project.description}
        </p>

        <button
          type="button"
          onClick={() => onViewDetail(project)}
          className="inline-flex w-fit items-center gap-1.5 rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-white/80 transition-colors hover:bg-white/10"
        >
          <Eye size={14} />
          Lihat Detail
        </button>
      </div>
    </BorderGlow>
  );
}