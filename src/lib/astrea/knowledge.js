import fs from "node:fs"
import path from "node:path"
import { portfolioProjects } from "@/data/portofolioShowcase"
import { toolCategories } from "@/data/tools"
import { skillCategories } from "@/data/skills"

function readContextFile() {
  try {
    const filePath = path.join(
      process.cwd(),
      "src",
      "data",
      "astrea-context.md"
    )

    return fs.readFileSync(filePath, "utf8")
  } catch (error) {
    console.error("Astrea context error:", error)
    return ""
  }
}

function buildProjectContext() {
  if (!Array.isArray(portfolioProjects)) {
    return ""
  }

  return portfolioProjects
    .map((project) => {
      const name = project.name || project.title || "Unnamed Project"

      const technologies = Array.isArray(project.technologies)
        ? project.technologies.join(", ")
        : Array.isArray(project.tech)
          ? project.tech.join(", ")
          : ""

      const description = project.description || ""

      return [
        `Project: ${name}`,
        technologies ? `Technology: ${technologies}` : "",
        description ? `Description: ${description}` : "",
      ]
        .filter(Boolean)
        .join("\n")
    })
    .join("\n\n")
}

function buildToolsContext() {
  if (!Array.isArray(toolCategories)) {
    return ""
  }

  return toolCategories
    .map((category) => {
      const categoryName =
        category.name ||
        category.title ||
        category.category ||
        "Unknown Category"

      const tools = Array.isArray(category.tools)
        ? category.tools
        : Array.isArray(category.items)
          ? category.items
          : []

      const toolText = tools
        .map((tool) => {
          if (typeof tool === "string") {
            return `- ${tool}`
          }

          const name = tool.name || tool.title || "Unknown Tool"
          const description = tool.description || ""

          return description
            ? `- ${name}: ${description}`
            : `- ${name}`
        })
        .join("\n")

      return `Category: ${categoryName}\n${toolText}`
    })
    .join("\n\n")
}

function buildSkillsContext() {
  if (!Array.isArray(skillCategories)) {
    return ""
  }

  return skillCategories
    .map((category) => {
      const categoryName =
        category.name ||
        category.title ||
        category.category ||
        "Unknown Category"

      const skills = Array.isArray(category.skills)
        ? category.skills
        : Array.isArray(category.items)
          ? category.items
          : []

      const skillText = skills
        .map((skill) => {
          if (typeof skill === "string") {
            return `- ${skill}`
          }

          return `- ${skill.name || skill.title || "Unknown Skill"}`
        })
        .join("\n")

      return `Category: ${categoryName}\n${skillText}`
    })
    .join("\n\n")
}

const CONTEXT = readContextFile()
const PROJECTS = buildProjectContext()
const TOOLS = buildToolsContext()
const SKILLS = buildSkillsContext()

export const ASTREA_KNOWLEDGE = [
  CONTEXT,
  PROJECTS
    ? `\nSTRUCTURED PROJECT DATA\n${PROJECTS}`
    : "",
  TOOLS
    ? `\nSTRUCTURED TOOLS DATA\n${TOOLS}`
    : "",
  SKILLS
    ? `\nSTRUCTURED SKILLS DATA\n${SKILLS}`
    : "",
]
  .filter(Boolean)
  .join("\n\n")

export function getRelevantAstreaKnowledge(query = "") {
  const normalizedQuery = query.toLowerCase().trim()

  if (!normalizedQuery) {
    return ASTREA_KNOWLEDGE
  }

  const keywordGroups = [
    {
      keywords: [
        "project",
        "proyek",
        "it techmap",
        "cybersecurity role",
        "project dashboard",
        "rf calculator",
        "pmr",
      ],
      markers: ["PROJECTS", "PROJECT DATA"],
    },
    {
      keywords: [
        "tool",
        "tools",
        "software",
        "software development",
        "cyber security",
        "networking",
        "hardware",
        "embedded",
        "mikrotik",
        "wireshark",
        "router",
        "esp32",
        "arduino",
        "flipper",
      ],
      markers: ["TOOLS", "TOOLS DATA"],
    },
    {
      keywords: [
        "skill",
        "skills",
        "kemampuan",
        "frontend",
        "backend",
        "database",
        "programming",
        "git",
        "linux",
        "windows",
        "operating system",
      ],
      markers: ["SKILLS", "SKILLS DATA"],
    },
    {
      keywords: [
        "dimas",
        "dims",
        "dim",
        "mas",
        "umur",
        "usia",
        "lahir",
        "hobi",
        "game",
        "makanan",
        "minuman",
        "suka",
        "tidak suka",
      ],
      markers: ["PERSONAL INFORMATION"],
    },
    {
      keywords: [
        "website",
        "portfolio",
        "portfolio",
        "home",
        "about",
        "beyond",
        "expertise",
        "contact",
        "astrea",
        "music",
        "vinyl",
      ],
      markers: [
        "WEBSITE IDENTITY",
        "WEBSITE NAVIGATION",
        "HOME",
        "ABOUT",
        "BEYOND",
        "EXPERTISE",
      ],
    },
  ]

  const selectedGroups = keywordGroups.filter((group) =>
    group.keywords.some((keyword) => normalizedQuery.includes(keyword))
  )

  if (selectedGroups.length === 0) {
    return ASTREA_KNOWLEDGE
  }

  const selectedKeywords = selectedGroups.flatMap(
    (group) => group.keywords
  )

  const sections = ASTREA_KNOWLEDGE.split(/\n(?=# )/)

  const selectedSections = sections.filter((section) => {
    const sectionLower = section.toLowerCase()

    return (
      selectedKeywords.some((keyword) =>
        sectionLower.includes(keyword)
      ) ||
      selectedGroups.some((group) =>
        group.markers.some((marker) =>
          sectionLower.includes(marker.toLowerCase())
        )
      )
    )
  })

  if (selectedSections.length === 0) {
    return ASTREA_KNOWLEDGE
  }

  return selectedSections.join("\n\n")
}