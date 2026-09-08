"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";
import ProjectDetailModal from "./ProjectDetailModal";

export default function ProjectPanel() {
  const [selected, setSelected] = useState(null);

  return (
    <>
      <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{
              opacity: 0,
              x: index % 2 === 0 ? -70 : 70,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.7,
              delay: index * 0.12,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <ProjectCard
              project={project}
              onViewDetail={setSelected}
            />
          </motion.div>
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