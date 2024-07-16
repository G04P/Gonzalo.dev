import styles from '../styles/Skills.module.css';
import { IoLogoReact } from "react-icons/io5";
import { BiLogoTypescript } from "react-icons/bi";
import { RiNextjsFill } from "react-icons/ri";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaBootstrap } from "react-icons/fa6";
import { SiSass } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { IoLogoCss3 } from "react-icons/io5";
import { IoLogoHtml5 } from "react-icons/io5";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { BiCodeCurly } from "react-icons/bi";
import { TbBrandCSharp } from "react-icons/tb";
import { DiMsqlServer } from "react-icons/di";
import { SiMongodb } from "react-icons/si";
import { SiPostgresql } from "react-icons/si";
import { FaUserTie } from "react-icons/fa";
import { FaUserFriends } from "react-icons/fa";
import { FaUserCog } from "react-icons/fa";
import { FaUserShield } from "react-icons/fa";
import { FaUserClock } from "react-icons/fa";
import { FaUserEdit } from "react-icons/fa";
import { FaUserPlus } from "react-icons/fa";
import { FaUserGraduate } from "react-icons/fa";
import { FaUserNinja } from "react-icons/fa";
import { FaUserSecret } from "react-icons/fa";
import { RiEnglishInput } from "react-icons/ri";
import { SiMacos } from "react-icons/si";
import { FaWindows } from "react-icons/fa6";
import { FaJira } from "react-icons/fa6";
import { FaSlack } from "react-icons/fa6";
import { FaDocker } from "react-icons/fa6";
import { FaBitbucket } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { IoGitMerge } from "react-icons/io5";
import CardSkills from '../card/CardSkills';

export const Skills = () => {
  const frontSkills = [
    {
      icon: <IoLogoReact />,
      name: 'React',
    },
    {
      icon: <BiLogoTypescript />,
      name: 'Typescript',
    },
    {
      icon: <RiNextjsFill />,
      name: 'Next.js',
    },
    {
      icon: <RiTailwindCssFill />,
      name: 'Tailwind CSS',
    },
    {
      icon: <FaBootstrap />,
      name: 'Bootstrap',
    },
    {
      icon: <SiSass />,
      name: 'SASS',
    },
    {
      icon: <IoLogoJavascript />,
      name: 'JavaScript',
    },
    {
      icon: <IoLogoCss3 />,
      name: 'CSS',
    },
    {
      icon: <IoLogoHtml5 />,
      name: 'HTML',
    },
  ];
  const backSkills = [
    {
      icon: <FaNodeJs />,
      name: 'Node.js',
    },
    {
      icon: <SiExpress />,
      name: 'Express.js',
    },
    {
      icon: <BiCodeCurly />,
      name: 'REST API',
    },
    {
      icon: <DiMsqlServer />,
      name: 'MySQL',
    },
    {
      icon: <TbBrandCSharp />,
      name: '.NET',
    },
    {
      icon: <SiMongodb />,
      name: 'MongoDB',
    },
    {
      icon: <SiPostgresql />,
      name: 'PostgreSQL',
    },
  ];
  const softSkills = [
    {
      icon: <FaUserTie />,
      name: 'Problem-solving',
    },
    {
      icon: <FaUserFriends />,
      name: 'Teamwork',
    },
    {
      icon: <FaUserCog />,
      name: 'Adaptability',
    },
    {
      icon: <FaUserShield />,
      name: 'Resilience',
    },
    {
      icon: <FaUserClock />,
      name: 'Patience',
    },
    {
      icon: <FaUserEdit />,
      name: 'Creativity',
    },
    {
      icon: <FaUserPlus />,
      name: 'Self-learning',
    },
    {
      icon: <FaUserGraduate />,
      name: 'Communication',
    },
    {
      icon: <FaUserNinja />,
      name: 'Leadership',
    },
    {
      icon: <FaUserSecret />,
      name: 'Critical Thinking',
    }
  ];
  const otherSkills = [
    {
      icon: <RiEnglishInput />,
      name: 'English',
    },
    {
      icon: <SiMacos />,
      name: 'MacOS',
    },
    {
      icon: <FaWindows />,
      name: 'Windows',
    },
    {
      icon: <FaJira />,
      name: 'Jira',
    },
    {
      icon: <FaSlack />,
      name: 'Slack',
    },
    {
      icon: <FaDocker />,
      name: 'Docker',
    },
    {
      icon: <FaBitbucket />,
      name: 'Bitbucket',
    },
    {
      icon: <FaGithub />,
      name: 'GitHub',
    },
    {
      icon: <IoGitMerge />,
      name: 'Git',
    },
  ];
  return (
    <article className=' m-6 p-4 text-white flex flex-col justify-center gap-10'>
      <h3 className="md:pl-56 text-xl text-bold  pt-4 text-left opacity-50"><strong>Frontend</strong></h3>
      <div className="flex flex-wrap justify-center max-w-3xl mx-auto">
        {frontSkills.map((item, index) => (
          <CardSkills key={index} icon={item.icon} name={item.name} />
        ))}
      </div>
      <h3 className="md:pl-56 text-xl text-bold pt-4 text-left opacity-50"><strong>Backend</strong></h3>
      <div className="flex flex-wrap justify-center max-w-3xl mx-auto">
        {backSkills.map((item, index) => (
          <CardSkills key={index} icon={item.icon} name={item.name} />
        ))}
      </div>
      <h3 className="md:pl-56 text-xl text-bold pt-4 text-left opacity-50"><strong>Soft Skills</strong></h3>
      <div className="flex flex-wrap justify-center max-w-3xl mx-auto">
        {softSkills.map((item, index) => (
          <CardSkills key={index} icon={item.icon} name={item.name} />
        ))}
      </div>
      <h3 className="md:pl-56 text-xl text-bold pt-4 text-left opacity-50"><strong>Other Skills</strong></h3>
      <div className="flex flex-wrap justify-center max-w-3xl mx-auto">
        {otherSkills.map((item, index) => (
          <CardSkills key={index} icon={item.icon} name={item.name} />
        ))}
      </div>
    </article>
  );
};