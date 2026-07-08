import { useEffect, useState } from "react"
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
  const [trail, setTrail] = useState([])
  const [now, setNow] = useState(() => Date.now())

  useEffect(() => {
    const handleMouseMove = (event) => {
      const { innerWidth, innerHeight } = window
      const point = {
        id: Date.now() + Math.random(),
        x: (event.clientX / innerWidth) * 100,
        y: (event.clientY / innerHeight) * 100,
        createdAt: Date.now(),
      }

      setTrail((currentTrail) => [point, ...currentTrail].slice(0, 10))
    }

    const handleMouseLeave = () => {
      setTrail([])
    }

    const trimTrail = window.setInterval(() => {
      setNow(Date.now())
      const now = Date.now()
      setTrail((currentTrail) => currentTrail.filter((point) => now - point.createdAt < 650))
    }, 40)

    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("mouseleave", handleMouseLeave)
      window.clearInterval(trimTrail)
    }
  }, [])

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,228,240,0.65),_transparent_38%),radial-gradient(circle_at_bottom_right,_rgba(255,210,225,0.35),_transparent_32%),linear-gradient(180deg,_rgba(255,255,255,0.86),_rgba(255,247,249,0.82))]" />
      {hearts.map((heart, index) => (
        <motion.div
          key={`${heart.top}-${heart.left}-${index}`}
          className={`absolute ${heart.color} ${heart.foreground ? "z-20" : "z-10"} drop-shadow-[0_0_24px_rgba(244,114,182,0.3)]`}
          style={{ top: heart.top, left: heart.left }}
        >
          <motion.div
            initial={{ opacity: 0, scale: heart.foreground ? 0.9 : 0.8 }}
            animate={{
              opacity: heart.foreground ? [0.9, 1, 0.92] : [0.75, 0.98, 0.8],
              scale: heart.foreground ? [1, 1.1, 1.03] : [1, 1.06, 1.01],
              y: heart.foreground ? [0, -12, 0, 8, 0] : [0, -16, 0, 10, 0],
              x: heart.foreground ? [0, 4, 0, -3, 0] : [0, 3, 0, -2, 0],
            }}
            transition={{
              duration: heart.duration * 1.15,
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
        </motion.div>
      ))}
      {trail.map((point, index) => {
        const age = now - point.createdAt
        const fade = Math.max(0, 1 - age / 650)
        const scale = Math.max(0.55, 1 - index * 0.08)

        return (
          <motion.div
            key={point.id}
            className="absolute z-30 -translate-x-1/2 -translate-y-1/2 drop-shadow-[0_0_18px_rgba(255,255,255,0.9)]"
            style={{ left: `${point.x}%`, top: `${point.y}%` }}
            animate={{
              opacity: fade,
              scale,
              rotate: [0, -10, 10, 0],
            }}
            transition={{
              opacity: { duration: 0.08 },
              scale: { duration: 0.16 },
              rotate: { duration: 0.9, repeat: Infinity, ease: "easeInOut" },
            }}
          >
            <span className="absolute inset-0 rounded-full bg-pink-100/60 blur-lg" />
            <span className="absolute inset-0 rounded-full ring-2 ring-white/70" />
            <FaHeart
              size={Math.max(18, 34 - index * 2)}
              className="relative text-rose-700 drop-shadow-[0_0_6px_rgba(255,255,255,0.95)]"
              style={{
                stroke: "rgba(255,255,255,0.92)",
                strokeWidth: 16,
                paintOrder: "stroke fill",
              }}
            />
          </motion.div>
        )
      })}
      <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.15),transparent_35%,rgba(255,255,255,0.08)_70%,transparent)]" />
    </div>
  )
}