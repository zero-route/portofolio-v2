"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";
import ProjectDetailModal from "./ProjectDetailModal";

export default function ProjectPanel() {
  const [selected, setSelected] = useState(null);

  return (
    <>
      <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onViewDetail={setSelected}
          />
        ))}
      </div>

      <AnimatePresence>
        {selected && (
          <ProjectDetailModal
            project={selected}
            onClose={() => setSelected(null)}
          />
        )}
      </AnimatePresence>
    </>
  );
}
