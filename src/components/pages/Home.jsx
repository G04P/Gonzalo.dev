import { motion } from 'framer-motion'
import { FaLinkedin } from 'react-icons/fa'
import { IoLogoGithub } from 'react-icons/io'
import Typewriter from 'typewriter-effect'

export const Home = () => {
  const aboutMe = [
    <>
      Soy Gonzalo Perez, desarrollador <span className="font-semibold">full stack</span> con base en Buenos Aires, Argentina. Actualmente formo parte del equipo de <span className="font-semibold">GlobalTask</span>, donde trabajo con tecnologías como <span className="font-semibold">.NET</span> en el backend y <span className="font-semibold">Blazor</span> en el frontend, combinando rendimiento, diseño y estructura limpia.
    </>,
    <>
      También tengo experiencia desarrollando interfaces con <span className="font-semibold">React.js</span>, lo cual me permite adaptarme fácilmente a distintos entornos y stacks. Me considero fuerte en el <span className="font-semibold">frontend</span> y sólido en el <span className="font-semibold">backend</span>, siempre buscando entregar soluciones completas y eficientes.
    </>,
    <>
      He trabajado en arquitecturas basadas en <span className="font-semibold">microservicios</span>, lo que me dio una mejor comprensión del diseño escalable y la comunicación entre sistemas. Últimamente también estoy explorando y adaptándome al mundo de la <span className="font-semibold">inteligencia artificial</span>, integrando herramientas modernas para enriquecer la experiencia de usuario.
    </>,
    <>
      Este portfolio refleja no solo mi experiencia, sino también el disfrute que encuentro al combinar <span className="font-semibold">diseño</span>, <span className="font-semibold">código</span> y propósito. ¡Gracias por visitar! 🚀
    </>
  ];

  return (
    <motion.article 
      className='flex flex-col justify-center items-center m-12 p-4 gap-10'
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
    >

      <motion.section 
        className='flex justify-center border rounded-2xl shadow-xl w-full max-w-4xl p-8 bg-white/5 backdrop-blur-md'
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className='flex flex-col items-center gap-6 text-white'>
          <motion.img 
            src="/img/perfil.png" 
            className='w-40 h-40 object-cover rounded-full border-4 border-white shadow-md hover:scale-105 transition-transform duration-300' 
            alt="Foto de perfil" 
            whileHover={{ scale: 1.08 }}
          />

          <motion.h2 
            className='uppercase text-2xl font-bold text-center tracking-wide'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Gonzalo Alejo Perez
          </motion.h2>

          <div className='text-lg text-gray-300'>
            <Typewriter
              options={{
                strings: ['Frontend Developer 💻', 'Backend Developer ⚙️', 'Fullstack Developer 🚀'],
                autoStart: true,
                loop: true,
              }}
            />
          </div>

          <div className='flex flex-col sm:flex-row gap-4 mt-4 w-full justify-center'>
            <motion.a 
              href="/Gonzalo-Alejo-Perez-CV.pdf"
              download 
              className='bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-2 rounded-full shadow hover:scale-105 transition-all text-center'
              whileTap={{ scale: 0.95 }}
            >
              📄 Descargar CV
            </motion.a>

            <motion.a 
              href="mailto:gonzaloalejoperez@gmail.com" 
              className='bg-gradient-to-r from-white to-gray-100 text-black px-6 py-2 rounded-full border shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 text-center'
              whileTap={{ scale: 0.95 }}
            >
              ✉️ Contactar
            </motion.a>
          </div>

          <div className='flex justify-center gap-6 mt-6'>
            <motion.a 
              href="https://www.linkedin.com/in/gonzalo-perez-1686a62a5/" 
              className='hover:scale-110 transition-transform text-blue-400'
              whileHover={{ scale: 1.2 }}
            >
              <FaLinkedin className='size-7' />
            </motion.a>
            <motion.a 
              href="https://github.com/G04P" 
              className='hover:scale-110 transition-transform text-gray-200'
              whileHover={{ scale: 1.2 }}
            >
              <IoLogoGithub className='size-7' />
            </motion.a>
          </div>
        </div>
      </motion.section>

      <motion.hr 
        className="border-t border-gray-500 w-2/3 opacity-50"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
      />

      <motion.section 
        className='max-w-4xl text-white text-lg leading-relaxed tracking-wide p-4 space-y-6'
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.2 }}
      >
        <motion.h2 
          className='text-2xl text-center font-bold mb-4'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Sobre mí
        </motion.h2>

        {aboutMe.map((text, i) => (
          <motion.p 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            className='text-gray-300'
          >
            {text}
          </motion.p>
        ))}
      </motion.section>
    </motion.article>
  )
}
