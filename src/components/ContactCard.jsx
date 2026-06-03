import { motion } from "framer-motion"

export default function ContactCard({ icon, label, value, href }) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ y: -4, boxShadow: "0 10px 30px rgba(22,163,74,0.12)" }}
      className="bg-white border border-gray-200 rounded-2xl p-6 flex items-center gap-4 transition-all duration-300 group"
    >
      <div className="text-green-600 text-2xl group-hover:text-orange-500 transition-colors duration-200">
        {icon}
      </div>
      <div>
        <p className="text-xs text-gray-400 font-medium uppercase tracking-wide">{label}</p>
        <p className="text-gray-800 font-semibold text-sm mt-0.5">{value}</p>
      </div>
    </motion.a>
  )
}