import { motion } from 'framer-motion'

export const Footer = () => {
  return (
    <motion.footer
      className="w-full py-6 mt-10 text-center text-gray-400 text-sm border-t border-gray-700 bg-white/5 backdrop-blur-md"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      <p>
        © {new Date().getFullYear()} <span className="text-white font-medium">Gonzalo.dev</span> — Todos los derechos reservados.
      </p>
    </motion.footer>
  );
};
