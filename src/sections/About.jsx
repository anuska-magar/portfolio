import { motion } from "framer-motion"
import { FaUniversity, FaCode, FaBullseye } from "react-icons/fa"

const cards = [
    {
        icon: <FaUniversity className="text-pink-600 text-2xl" />,
        title: "Who I Am",
        text: "A second-year IT student from Nepal, passionate about web development and always curious about how things are built on the web.",
    },
    {
        icon: <FaCode className="text-pink-600 text-2xl" />,
        title: "What I Learn",
        text: "React, JavaScript, HTML, CSS, Tailwind CSS, Git, and responsive design. I enjoy building projects that help me apply what I learn.",
    },
    {
        icon: <FaBullseye className="text-pink-600 text-2xl" />,
        title: "My Goal",
        text: "To keep learning and improving my skills as a web developer, and to contribute to meaningful projects that make a difference.",
    },
]

export default function About() {
    return (
        <section id="about" className="py-20 px-6 bg-gray-50/65 backdrop-blur-sm">
            <div className="max-w-6xl mx-auto">

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-14"
                >
                    <p className="text-pink-600 font-semibold text-sm uppercase tracking-widest mb-2">
                        Get to Know Me
                    </p>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900">About Me</h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {cards.map((card, index) => (
                        <motion.div
                            key={card.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.15 }}
                            className="bg-white rounded-2xl p-8 border border-gray-200 hover:shadow-md transition-shadow duration-300"
                        >
                            <div className="mb-4">{card.icon}</div>
                            <h3 className="font-bold text-gray-900 text-lg mb-3">{card.title}</h3>
                            <p className="text-gray-500 text-sm leading-relaxed">{card.text}</p>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="mt-8 bg-white rounded-2xl p-8 border border-gray-200 flex flex-col md:flex-row md:items-center gap-4"
                >
                    <div className="flex-1">
                        <p className="text-xs text-gray-400 uppercase tracking-widest font-medium mb-1">Currently Studying</p>
                        <h3 className="text-lg font-bold text-gray-900">Bachelor of Information Technology</h3>
                        <p className="text-gray-600 text-sm font-medium mt-1">Itahari International College</p>
                        <p className="text-gray-500 text-sm mt-0.5">2nd Year · Focusing on Web Development</p>
                    </div>
                    <div className="px-4 py-2 bg-pink-50 rounded-full text-pink-700 font-semibold text-sm">
                        2nd Year Student
                    </div>
                </motion.div>

            </div>
        </section>
    )
}