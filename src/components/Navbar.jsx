import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import logoImg from "../assets/logo.png"

const navLinks = ["Home", "About", "Skills", "Projects", "Contact"]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  // Track scroll for navbar shadow
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Track which section is currently visible
  useEffect(() => {
    const sectionIds = navLinks.map((link) => link.toLowerCase())

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      {
        rootMargin: "-40% 0px -55% 0px", // triggers when section is in the middle of screen
        threshold: 0,
      }
    )

    sectionIds.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  const handleNavClick = (link) => {
    const id = link.toLowerCase()
    const section = document.getElementById(id)
    if (section) {
      section.scrollIntoView({ behavior: "smooth" })
    }
    setMenuOpen(false)
  }

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md" : "bg-white/80 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <img src={logoImg} alt="Logo" className="h-9 w-auto" />

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-8">
          {navLinks.map((link) => {
            const isActive = activeSection === link.toLowerCase()
            return (
              <li key={link}>
                <button
                  onClick={() => handleNavClick(link)}
                  className={`relative font-medium text-sm transition-colors duration-200 ${
                    isActive ? "text-green-600" : "text-gray-600 hover:text-green-600"
                  }`}
                >
                  {link}

                  {/* Underline indicator */}
                  {isActive && (
                    <motion.span
                      layoutId="underline"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-green-600 rounded-full"
                    />
                  )}
                </button>
              </li>
            )
          })}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex flex-col gap-1.5 cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className={`block w-6 h-0.5 bg-gray-700 transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`}></span>
          <span className={`block w-6 h-0.5 bg-gray-700 transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}></span>
          <span className={`block w-6 h-0.5 bg-gray-700 transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}></span>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white border-t border-gray-100 px-6 py-4"
        >
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => {
              const isActive = activeSection === link.toLowerCase()
              return (
                <li key={link}>
                  <button
                    onClick={() => handleNavClick(link)}
                    className={`font-medium transition-colors duration-200 ${
                      isActive
                        ? "text-green-600"
                        : "text-gray-600 hover:text-green-600"
                    }`}
                  >
                    {link}
                  </button>
                </li>
              )
            })}
          </ul>
        </motion.div>
      )}
    </motion.nav>
  )
}