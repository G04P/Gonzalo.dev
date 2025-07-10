import { motion } from 'framer-motion'

const experiences = [
  {
    company: 'GlobalTask',
    role: 'Full Stack Developer',
    period: '2024 - Presente',
    description: 'Desarrollo de soluciones en .NET, Blazor y React. Enfoque en microservicios y mantenimiento de código productivo.'
  },
  {
    company: 'Mastellone Proveedores MH',
    role: 'Full Stack Developer',
    period: '2024 - Presente',
    description: 'Soporte y mejoras en aplicaciones internas utilizando .NET y ReactJS.'
  },
  {
    company: 'Periodo de Prueba',
    role: 'Full Stack Developer',
    period: '2024 (Abril) - 2024 (Julio)',
    description: 'Features y mejoras en web  utilizando Nest JS y ReactJS.'
  }
];

export const Experience = () => {
  return (
    <section className="max-w-4xl mx-auto px-4 py-12 text-white">
      <motion.h2
        className="text-2xl font-bold text-center mb-10"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Experiencia
      </motion.h2>

      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            className="bg-white/5 border border-gray-600 rounded-lg p-6 backdrop-blur-md shadow-md"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <h3 className="text-lg font-semibold text-blue-400">{exp.role}</h3>
            <p className="text-gray-300">{exp.company} · {exp.period}</p>
            <p className="text-gray-400 mt-2 text-sm">{exp.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
