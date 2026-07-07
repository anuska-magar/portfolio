import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import ProjectCard from "../components/ProjectCard"
import { projects } from "../data/projects"

const filters = ["All", "React", "JavaScript", "UI Design"]

export default function Projects() {
  const [active, setActive] = useState("All")

  const filtered = active === "All"
    ? projects
    : projects.filter((p) => p.category.includes(active))

  return (
    <section id="projects" className="py-20 px-6 bg-gray-50/65 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <p className="text-pink-600 font-semibold text-sm uppercase tracking-widest mb-2">
            What I've Built
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">My Projects</h2>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActive(filter)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                active === filter
                  ? "bg-pink-600 text-white shadow-md"
                  : "bg-white text-gray-600 border border-gray-200 hover:border-pink-400 hover:text-pink-600"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence>
            {filtered.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
              >
                <ProjectCard {...project} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  )
}