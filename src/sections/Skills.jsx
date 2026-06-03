import { motion } from "framer-motion"
import SkillCard from "../components/SkillCard"
import { skills } from "../data/skills"

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-6 bg-white">
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
            Technologies I Work With
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">My Skills</h2>
        </motion.div>

        {/* Skill Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
            >
              <SkillCard name={skill.name} icon={skill.icon} />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}