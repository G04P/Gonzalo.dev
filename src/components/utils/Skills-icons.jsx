// skillsIcons.tsx
import {
  IoLogoReact, IoLogoJavascript, IoLogoCss3, IoLogoHtml5, IoGitMerge
} from 'react-icons/io5';
import {
  BiLogoTypescript, BiCodeCurly
} from 'react-icons/bi';
import {
  RiNextjsFill, RiTailwindCssFill, RiEnglishInput
} from 'react-icons/ri';
import {
  FaBootstrap, FaUserTie, FaUserFriends, FaUserCog, FaUserShield,
  FaUserClock, FaUserEdit, FaUserPlus, FaUserGraduate, FaUserNinja,
  FaUserSecret, FaWindows, FaJira, FaSlack, FaDocker, FaBitbucket,
  FaGithub, FaNodeJs
} from 'react-icons/fa';
import { SiSass, SiExpress, SiMongodb, SiPostgresql, SiMacos } from 'react-icons/si';
import { DiMsqlServer } from 'react-icons/di';
import { TbBrandCSharp } from 'react-icons/tb';

export const frontSkills = [
  { icon: <IoLogoReact />, name: 'React' },
  { icon: <BiLogoTypescript />, name: 'Typescript' },
  { icon: <RiNextjsFill />, name: 'Next.js' },
  { icon: <RiTailwindCssFill />, name: 'Tailwind CSS' },
  { icon: <FaBootstrap />, name: 'Bootstrap' },
  { icon: <SiSass />, name: 'SASS' },
  { icon: <IoLogoJavascript />, name: 'JavaScript' },
  { icon: <IoLogoCss3 />, name: 'CSS' },
  { icon: <IoLogoHtml5 />, name: 'HTML' },
];

export const backSkills = [
  { icon: <FaNodeJs />, name: 'Node.js' },
  { icon: <SiExpress />, name: 'Express.js' },
  { icon: <BiCodeCurly />, name: 'REST API' },
  { icon: <DiMsqlServer />, name: 'MySQL' },
  { icon: <TbBrandCSharp />, name: '.NET' },
  { icon: <SiMongodb />, name: 'MongoDB' },
  { icon: <SiPostgresql />, name: 'PostgreSQL' },
];

export const softSkills = [
  { icon: <FaUserTie />, name: 'Problem-solving' },
  { icon: <FaUserFriends />, name: 'Teamwork' },
  { icon: <FaUserCog />, name: 'Adaptability' },
  { icon: <FaUserShield />, name: 'Resilience' },
  { icon: <FaUserClock />, name: 'Patience' },
  { icon: <FaUserEdit />, name: 'Creativity' },
  { icon: <FaUserPlus />, name: 'Self-learning' },
  { icon: <FaUserGraduate />, name: 'Communication' },
  { icon: <FaUserNinja />, name: 'Leadership' },
  { icon: <FaUserSecret />, name: 'Critical Thinking' },
];

export const otherSkills = [
  { icon: <RiEnglishInput />, name: 'English' },
  { icon: <SiMacos />, name: 'MacOS' },
  { icon: <FaWindows />, name: 'Windows' },
  { icon: <FaJira />, name: 'Jira' },
  { icon: <FaSlack />, name: 'Slack' },
  { icon: <FaDocker />, name: 'Docker' },
  { icon: <FaBitbucket />, name: 'Bitbucket' },
  { icon: <FaGithub />, name: 'GitHub' },
  { icon: <IoGitMerge />, name: 'Git' },
];
