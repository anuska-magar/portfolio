import { motion } from "framer-motion"
import profileImg from "../assets/profile.jpeg"

export default function Hero() {
  const scrollToProjects = () => {
    document.getElementById("projects").scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-20 pb-16 px-6 bg-white"
    >
      <div className="max-w-6xl mx-auto w-full">
        <div className="flex flex-col-reverse md:flex-row items-center gap-12">

          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="flex-1 text-center md:text-left"
          >
            <p className="text-green-600 font-semibold text-sm uppercase tracking-widest mb-3">
              Hello, I'm
            </p>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-4">
              Anuska Magar
            </h1>

            <h2 className="text-xl md:text-2xl font-semibold text-orange-500 mb-6">
              Frontend Developer & IT Student
            </h2>

            <p className="text-gray-500 text-base md:text-lg leading-relaxed max-w-lg mx-auto md:mx-0 mb-8">
              Passionate IT student focused on building modern and responsive
              web applications using React, while continuously learning and
              improving my development skills. Currently seeking internship
              opportunities.
            </p>

            <button
              onClick={scrollToProjects}
              className="bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-green-200"
            >
              View Projects
            </button>
          </motion.div>

          {/* Right: Avatar */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="flex-shrink-0"
          >
            <div className="relative w-60 h-60 md:w-72 md:h-72">
              {/* Decorative circle behind */}
              <div className="absolute inset-0 rounded-full bg-green-50 border-2 border-green-100 scale-110" />
              
              {/* Floating orange dot */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                className="absolute top-2 right-2 w-4 h-4 rounded-full bg-orange-400 z-10"
              />

              {/* Floating green dot */}
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="absolute bottom-4 left-2 w-3 h-3 rounded-full bg-green-400 z-10"
              />

              {/* Profile image placeholder */}
              <div className="relative w-full h-full rounded-full bg-gradient-to-br from-green-100 to-green-50 border-4 border-white shadow-xl flex items-center justify-center overflow-hidden">
                <img src={profileImg} alt="Anuska Magar" className="w-full h-full object-cover" />
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}