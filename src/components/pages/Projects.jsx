import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Panel de administración',
    description: 'Dashboard moderno con autenticación y manejo de usuarios.',
    url: 'https://dashboard-project.vercel.app/',
    tech: ['React', 'Tailwind', 'Node']
  },
  {
    title: 'Catálogo interactivo',
    description: 'Frontend responsive con filtros dinámicos.',
    url: 'https://catalogo-productos.vercel.app/',
    tech: ['Next.js', 'SASS']
  }
];

export const Projects = () => {
  return (
    <section className="max-w-5xl mx-auto px-4 py-12 text-white">
      <motion.h2
        className="text-2xl font-bold text-center mb-10"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Proyectos
      </motion.h2>

      <div className="grid sm:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <motion.a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            key={index}
            className="block bg-white/5 border border-gray-600 rounded-lg p-6 hover:scale-[1.02] transition-transform backdrop-blur-md shadow-md"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <h3 className="text-lg font-semibold text-blue-400">{project.title}</h3>
            <p className="text-gray-300 text-sm mt-2">{project.description}</p>
            <div className="flex gap-2 flex-wrap mt-3 text-xs text-gray-400">
              {project.tech.map((tech, i) => (
                <span key={i} className="border border-gray-500 rounded-full px-2 py-0.5">{tech}</span>
              ))}
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
};
