import { motion } from "framer-motion"
import { FaEnvelope, FaGithub, FaLinkedin, FaMapMarkerAlt } from "react-icons/fa"
import ContactCard from "../components/ContactCard"

const contacts = [
  {
    icon: <FaEnvelope />,
    label: "Email",
    value: "anuskamagarrr@gmail.com",
    href: "mailto:anuskamagarrr@gmail.com",
  },
  {
    icon: <FaGithub />,
    label: "GitHub",
    value: "github.com/anuska-magar",
    href: "https://github.com/anuska-magar",
  },
  {
    icon: <FaLinkedin />,
    label: "LinkedIn",
    value: "linkedin.com/in/anuska-magar",
    href: "https://www.linkedin.com/in/anuska-magar-128346340/",
  },
  {
    icon: <FaMapMarkerAlt />,
    label: "Location",
    value: "Dharan, Nepal",
    href: "#",
  },
]

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-green-600 font-semibold text-sm uppercase tracking-widest mb-2">
            Let's Connect
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Contact Me</h2>
          <p className="text-gray-500 mt-3 text-sm max-w-md mx-auto">
            I'm currently open to internship opportunities. Feel free to reach out!
          </p>
        </motion.div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
          {contacts.map((contact, index) => (
            <motion.div
              key={contact.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <ContactCard {...contact} />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}