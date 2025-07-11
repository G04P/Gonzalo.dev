import { motion } from 'framer-motion';
import { backSkills, frontSkills, otherSkills, softSkills } from '../utils/Skills-icons';
import { BiCodeAlt } from 'react-icons/bi'; 

const sectionVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const SkillsSection = ({ title, skills }) => (
  <motion.section
    variants={sectionVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    className="w-full max-w-5xl mx-auto px-4 mb-10"
  >
    <h3 className="text-2xl font-bold text-gray-300 mb-4 border-b border-gray-700 pb-2">
      {title}
    </h3>
<div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
      {skills.map((item, index) => (
        <motion.div
          key={index}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-2 px-4 py-2 rounded-xl border border-gray-600 bg-white/5 backdrop-blur-sm shadow transition-all duration-300 text-white"
        >
          <span className="text-xl">{item.icon}</span>
          <span className="text-sm font-medium">{item.name}</span>
        </motion.div>
      ))}
    </div>
  </motion.section>
);

export const Skills = () => {
  return (
    <motion.article
      className="m-6 p-4 text-white flex flex-col items-center gap-12"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="flex items-center gap-3 mb-6">
        <BiCodeAlt className="text-4xl text-indigo-400" />
        <h2 className="text-4xl font-bold tracking-wide">Skills & Dev Stack</h2>
      </div>

      <SkillsSection title="Frontend" skills={frontSkills} />
      <SkillsSection title="Backend" skills={backSkills} />
      <SkillsSection title="Soft Skills" skills={softSkills} />
      <SkillsSection title="Otras Herramientas" skills={otherSkills} />
    </motion.article>
  );
};