import React from 'react'
import { IoLogoGithub } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import { MdFileDownload } from "react-icons/md";
import { CiMail } from "react-icons/ci";


export const Home = () => {
  return (
    <article className='flex flex-col justify-center m-12 p-4 gap-10'>
       <section className='flex justify-center border rounded-md w-full p-6'>
           <div className='flex flex-col gap-4'>
             <img src="/img/1702596152143.jpeg" className='size-72 object-none rounded-full' alt="" />
             <h2 className=' uppercase text-xl ml-8'>Gonzalo Alejo Perez</h2>
             <p className='text-xl ml-16 text-gray-400'>Frontend Developer</p>
             <p className='text-xl ml-16 text-gray-400'>Backend Developer</p>
             {/* <button className='border rounded-full hover:bg-blue-600 w-full h-8 flex justify-center'><MdFileDownload className='m-1.5 mt-2'/><strong className='mt-0.5'>Download Resume</strong></button> */}
             <a href="../../../public/img/Gonzalo Perez - CV-1 (1).pdf" download className='border rounded-full hover:bg-blue-600 w-full h-8 flex justify-center'>
               <MdFileDownload className='m-1.5 mt-2'/><strong className='mt-0.5'>Download Resume</strong>
             </a>
             <a href="mailto:gonzaloalejoperez@gmail.com" className='border rounded-full hover:bg-white hover:text-black w-full h-8 flex justify-center'>
               <CiMail className='m-1.5'/><strong className='mt-0.5'>Contact Me</strong>
             </a>             
             
             <div className='flex justify-center gap-8 mt-6'>
                <a href="https://www.linkedin.com/in/gonzalo-perez-1686a62a5/" className='hover:scale-105'><FaLinkedin className='size-8' /></a>
                <a href="https://github.com/G04P" className='hover:scale-105'><IoLogoGithub className='size-8' /></a>
             </div>
           </div>
       </section>
        <section className='flex flex-col justify-center border rounded-md p-6 '>
          <h2 className='text-center uppercase m-4 p-2 text-xl font-serif font-bold'>About Me</h2>
          <p className='leading-loose'>¡Hola a todos! 🌟 Nací en el emocionante año 2004 y actualmente resido en la vibrante ciudad de Buenos Aires, Argentina.
            Me adentré en el fascinante mundo de la programación a los 17 años, impulsado por una curiosidad insaciable y una pasión por la tecnología.</p>
            <p className='leading-loose'>Hoy en día, tengo el privilegio de trabajar como desarrollador full stack en Global Task, donde combino creatividad y lógica para construir soluciones digitales tanto en el front-end como en el back-end.🌐
              Mi educación en Coderhouse me ha proporcionado una sólida base en este campo y sigo hambriento de conocimiento, siempre buscando aprender más y mejorar mis habilidades.</p>
              <p className='leading-loose'>Fuera del entorno de trabajo, mi entusiasmo por la tecnología no tiene límites. Estoy constantemente explorando nuevas tendencias y herramientas para mantenerme actualizado en este mundo en constante cambio.
                La innovación y los desafíos me motivan, y estoy ansioso por conectar con otros apasionados de la tecnología.</p>
                <p className='leading-loose'>Estoy emocionado por lo que el futuro me depara y por las oportunidades de crecimiento y aprendizaje que están por venir.
                  ¡Vamos a descubrir juntos lo que el mundo digital tiene para ofrecer! 🚀</p>
        </section>
     </article>
  )
}
