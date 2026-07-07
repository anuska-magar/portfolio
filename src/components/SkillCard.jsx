import { motion } from "framer-motion"
import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaGit, FaGithub, FaMobileAlt,
} from "react-icons/fa"
import { SiTailwindcss } from "react-icons/si"

const iconMap = {
  html: <FaHtml5 className="text-orange-500 text-3xl" />,
  css: <FaCss3Alt className="text-blue-500 text-3xl" />,
  js: <FaJs className="text-yellow-400 text-3xl" />,
  react: <FaReact className="text-cyan-400 text-3xl" />,
  tailwind: <SiTailwindcss className="text-teal-400 text-3xl" />,
  git: <FaGit className="text-orange-600 text-3xl" />,
  github: <FaGithub className="text-gray-800 text-3xl" />,
  responsive: <FaMobileAlt className="text-pink-600 text-3xl" />,
}

export default function SkillCard({ name, icon }) {
  return (
    <motion.div
      whileHover={{ y: -5, boxShadow: "0 10px 30px rgba(219,39,119,0.15)" }}
      className="bg-white border border-gray-200 rounded-2xl p-6 flex flex-col items-center gap-3 cursor-default transition-all duration-300"
    >
      {iconMap[icon]}
      <p className="text-gray-700 font-medium text-sm">{name}</p>
    </motion.div>
  )
}