import { motion } from "framer-motion"
import { FaHeart } from "react-icons/fa"

const hearts = [
  { top: "12%", left: "8%", size: 20, color: "text-rose-400", delay: 0.2, duration: 8, foreground: false },
  { top: "18%", left: "24%", size: 16, color: "text-pink-400", delay: 0.8, duration: 9, foreground: false },
  { top: "24%", left: "78%", size: 22, color: "text-rose-500", delay: 0.4, duration: 8.5, foreground: false },
  { top: "40%", left: "14%", size: 18, color: "text-fuchsia-400", delay: 1.1, duration: 9.5, foreground: false },
  { top: "46%", left: "64%", size: 20, color: "text-pink-500", delay: 0.6, duration: 8.8, foreground: false },
  { top: "58%", left: "86%", size: 17, color: "text-rose-400", delay: 1.4, duration: 10, foreground: false },
  { top: "70%", left: "30%", size: 19, color: "text-pink-400", delay: 0.3, duration: 9.2, foreground: false },
  { top: "78%", left: "72%", size: 16, color: "text-rose-500", delay: 1.7, duration: 8.7, foreground: false },
  { top: "34%", left: "42%", size: 40, color: "text-rose-500", delay: 0.1, duration: 7.5, foreground: true },
  { top: "64%", left: "52%", size: 44, color: "text-pink-500", delay: 0.9, duration: 8, foreground: true },
  { top: "22%", left: "56%", size: 34, color: "text-fuchsia-500", delay: 1.3, duration: 7.8, foreground: true },
]

export default function HeartBackground() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,228,240,0.65),_transparent_38%),radial-gradient(circle_at_bottom_right,_rgba(255,210,225,0.35),_transparent_32%),linear-gradient(180deg,_rgba(255,255,255,0.86),_rgba(255,247,249,0.82))]" />
      {hearts.map((heart, index) => (
        <motion.div
          key={`${heart.top}-${heart.left}-${index}`}
          className={`absolute ${heart.color} ${heart.foreground ? "z-20" : "z-10"} drop-shadow-[0_0_24px_rgba(244,114,182,0.3)]`}
          style={{ top: heart.top, left: heart.left }}
          initial={{ opacity: 0, scale: heart.foreground ? 0.9 : 0.8 }}
          animate={{
            opacity: heart.foreground ? [0.9, 1, 0.92] : [0.75, 0.98, 0.8],
            scale: heart.foreground ? [1, 1.08, 1.02] : [1, 1.05, 1],
            y: [0, -4, 0],
          }}
          transition={{
            duration: heart.duration,
            delay: heart.delay,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
          }}
        >
          <span className={`absolute inset-0 rounded-full ${heart.foreground ? "bg-pink-300/20 blur-xl" : "bg-pink-300/12 blur-lg"}`} />
          <FaHeart
            size={heart.size}
            className="relative drop-shadow-[0_0_3px_rgba(255,255,255,0.45)]"
          />
        </motion.div>
      ))}
      <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.15),transparent_35%,rgba(255,255,255,0.08)_70%,transparent)]" />
    </div>
  )
}