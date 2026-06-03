import Navbar from "./components/Navbar"
import Hero from "./sections/Hero"
import About from "./sections/About"
import Skills from "./sections/Skills"
import Projects from "./sections/Projects"
import Contact from "./sections/Contact"
import { FaGithub, FaLinkedin } from "react-icons/fa"

function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        <div className="text-center md:text-left">
          <p className="text-xl font-bold text-green-600">AM</p>
          <p className="text-gray-400 text-sm mt-1">Anuska Magar · Frontend Developer</p>
        </div>

        <div className="flex gap-6 text-sm text-gray-500">
          {["home", "about", "skills", "projects", "contact"].map((id) => (
            <button
              key={id}
              onClick={() => document.getElementById(id).scrollIntoView({ behavior: "smooth" })}
              className="hover:text-green-600 capitalize transition-colors duration-200"
            >
              {id}
            </button>
          ))}
        </div>

        <div className="flex gap-4">
          <a
            href="https://github.com/anuska-magar"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-green-600 transition-colors duration-200 text-xl"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/anuska-magar"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-green-600 transition-colors duration-200 text-xl"
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
    <div className="font-sans">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

export default App