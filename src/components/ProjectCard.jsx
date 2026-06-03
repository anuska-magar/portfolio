import { motion } from "framer-motion"
import { FaGithub, FaCode } from "react-icons/fa"

export default function ProjectCard({ title, description, tech, github, color }) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.25 }}
      className="bg-white border border-gray-200 rounded-2xl overflow-hidden flex flex-col hover:shadow-lg transition-shadow duration-300"
    >
      {/* Colored top bar */}
      <div
        className="h-2 w-full"
        style={{ backgroundColor: color }}
      />

      <div className="p-6 flex flex-col gap-4 flex-1">
        {/* Icon + Title */}
        <div className="flex items-center gap-3">
          <div
            className="p-2 rounded-lg"
            style={{ backgroundColor: color + "20" }}
          >
            <FaCode style={{ color: color }} className="text-lg" />
          </div>
          <h3 className="font-bold text-gray-900 text-lg">{title}</h3>
        </div>

        {/* Description */}
        <p className="text-gray-500 text-sm leading-relaxed flex-1">{description}</p>

        {/* Tech Tags */}
        <div className="flex flex-wrap gap-2">
          {tech.map((t) => (
            <span
              key={t}
              className="text-xs px-3 py-1 rounded-full bg-gray-100 text-gray-600 font-medium"
            >
              {t}
            </span>
          ))}
        </div>

        {/* GitHub Button */}
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-green-600 transition-colors duration-200 mt-auto"
        >
          <FaGithub className="text-lg" />
          View on GitHub
        </a>
      </div>
    </motion.div>
  )
}