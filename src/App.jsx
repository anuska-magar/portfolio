import Navbar from "./components/Navbar"
import Hero from "./sections/Hero"
import About from "./sections/About"
import Skills from "./sections/Skills"
import Projects from "./sections/Projects"
import Contact from "./sections/Contact"
import { FaGithub, FaLinkedin } from "react-icons/fa"
import logoImg from "./assets/logo.png"
import HeartBackground from "./components/HeartBackground"

function Footer() {
  return (
    <footer className="bg-gray-50/65 backdrop-blur-sm border-t border-gray-200/70 py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">

        <div className="text-center md:text-left">
          <img src={logoImg} alt="Anuska Magar" className="h-10 w-auto" />
          <p className="text-gray-400 text-sm mt-1">Anuska Magar · Full Stack Developer</p>
        </div>

        <div className="flex gap-4">
          <a
            href="https://github.com/anuska-magar"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-pink-600 transition-colors duration-200 text-xl"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/anuska-magar-128346340/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-pink-600 transition-colors duration-200 text-xl"
          >
            <FaLinkedin />
          </a>
        </div>

      </div>
      <p className="text-center text-gray-400 text-xs mt-6">
        © {new Date().getFullYear()} Anuska Magar. All rights reserved.
      </p>
    </footer>
  )
}

function App() {
  return (
    <div className="relative isolate min-h-screen font-sans text-gray-900">
      <HeartBackground />
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </div>
  )
}

export default App