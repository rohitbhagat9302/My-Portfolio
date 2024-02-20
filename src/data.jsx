import {
  FaHome,
  FaUser,
  FaFolderOpen,
  FaEnvelopeOpen,
  FaBriefcase,
  FaGraduationCap,
  FaCode,
} from 'react-icons/fa';
import { FiFileText, FiUser, FiExternalLink } from 'react-icons/fi';

import Work1 from './assets/project-5.jpg';
import Work2 from './assets/project-2.jpg';
import Work3 from './assets/project-3.jpg';
import Work4 from './assets/project-4.jpeg';
import Work5 from './assets/project-1.png';
import Work6 from './assets/project-6.jpg';

import Theme1 from './assets/purple.png';
import Theme2 from './assets/red.png';
import Theme3 from './assets/blueviolet.png';
import Theme4 from './assets/blue.png';
import Theme5 from './assets/goldenrod.png';
import Theme6 from './assets/magenta.png';
import Theme7 from './assets/yellowgreen.png';
import Theme8 from './assets/orange.png';
import Theme9 from './assets/green.png';
import Theme10 from './assets/yellow.png';

export const links = [
  {
    id: 1,
    name: 'Home',
    icon: <FaHome className='nav__icon' />,
    path: '/',
  },

  {
    id: 2,
    name: 'About',
    icon: <FaUser className='nav__icon' />,
    path: '/about',
  },

  {
    id: 3,
    name: 'Portfolio',
    icon: <FaFolderOpen className='nav__icon' />,
    path: '/portfolio',
  },

  {
    id: 4,
    name: 'Contact',
    icon: <FaEnvelopeOpen className='nav__icon' />,
    path: '/contact',
  },
];

export const personalInfo = [
  {
    id: 1,
    title: 'First Name : ',
    description: 'Rohit',
  },

  {
    id: 2,
    title: 'Last Name : ',
    description: 'Bhagat',
  },

  {
    id: 3,
    title: 'Age : ',
    description: '21 Years',
  },

  {
    id: 4,
    title: 'Nationality : ',
    description: 'Indian',
  },

  {
    id: 5,
    title: 'Freelance : ',
    description: 'Available',
  },

  {
    id: 6,
    title: 'Address : ',
    description: 'Jammu, J&K',
  },

  {
    id: 7,
    title: 'Phone : ',
    description: '+91 8082860740',
  },

  {
    id: 8,
    title: 'Email : ',
    description: 'rohitbhagat9302@gmail.com',
  },

  {
    id: 9,
    title: 'Skype : ',
    description: 'not available',
  },

  {
    id: 10,
    title: 'Langages : ',
    description: 'Hindi, English',
  },
];

export const stats = [
  {
    id: 1,
    no: '1+',
    title: 'Years of <br /> Experience',
  },

  {
    id: 2,
    no: '5+',
    title: 'Completed <br /> Projects',
  },

  {
    id: 3,
    no: '20+',
    title: 'Happy <br /> Customers',
  },

  // {
  //   id: 4,
  //   no: '53+',
  //   title: ' Awards <br /> Won',
  // },
];

export const resume = [
  {
    id: 1,
    category: 'experience',
    icon: <FaBriefcase />,
    year: '2024 - PRESENT',
    title: 'Internship <span> ThinkNext Technologies</span>',
    desc: 'Currenly I join ThinkNext Technologies - mohali as a intern in the filed of MERN stack developer. ',
  },

  {
    id: 2,
    category: 'experience',
    icon: <FaBriefcase />,
    year: '2023',
    title: 'Full Stack Web Development <span> Internshala </span>',
    desc: 'I have done Full stack course from Internshala and gained experience by completing some Projects.',
  },

  {
    id: 3,
    category: 'experience',
    icon: <FaBriefcase />,
    year: '2022',
    title: 'Cyber Security <span> NIELIT Jammu </span>',
    desc: 'I have achieved hand on experience in the field of Cyber security from NIELIT jammu which is affiliated with IIT Jammu.',
  },

  // {
  //   id: 4,
  //   category: 'education',
  //   icon: <FaGraduationCap />,
  //   year: '2015',
  //   title: 'Engineering Degree <span> Oxford University </span>',
  //   desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do tempor incididunt ut labore',
  // },

  {
    id: 5,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2024',
    title: 'Bachelor Degree <span> YCET College </span>',
    desc: 'I did my B.E from YCET college jammu which comes under Jammu university and score 8.0 CGPA',
  },

  {
    id: 6,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2020',
    title: 'High Schooling <span> JKBOSE </span>',
    desc: 'I did my schooling from jammu and achieved 88%.',
  },
];

export const skills = [
  {
    id: 1,
    title: 'Html',
    percentage: '90',
  },

  {
    id: 2,
    title: 'Javascript',
    percentage: '70',
  },

  {
    id: 3,
    title: 'CSS',
    percentage: '80',
  },

  {
    id: 4,
    title: 'Java',
    percentage: '60',
  },

  {
    id: 5,
    title: 'Wordpress',
    percentage: '75',
  },

  {
    id: 6,
    title: 'Jquery',
    percentage: '50',
  },

  {
    id: 7,
    title: 'mongoDB',
    percentage: '65',
  },

  {
    id: 8,
    title: 'React',
    percentage: '70',
  },
];

export const portfolio = [
  {
    id: 1,
    img: Work1,
    title: 'Web Development',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Website',
      },
      // {
      //   icon: <FiUser />,
      //   title: 'Client : ',
      //   desc: 'Dribble',
      // },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'MERN Stack',
      },
      // {
      //   icon: <FiExternalLink />,
      //   title: 'Preview : ',
      //   desc: 'www.dribble.com',
      // },
    ],
  },

  {
    id: 2,
    img: Work2,
    title: 'Website Design',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Website',
      },
      // {
      //   icon: <FiUser />,
      //   title: 'Client : ',
      //   desc: 'Dribble',
      // },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'React JS',
      },
      // {
      //   icon: <FiExternalLink />,
      //   title: 'Preview : ',
      //   desc: 'www.dribble.com',
      // },
    ],
  },

  {
    id: 3,
    img: Work3,
    title: 'WordPress',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Website',
      },
      // {
      //   icon: <FiUser />,
      //   title: 'Client : ',
      //   desc: 'Dribble',
      // },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'WordPress',
      },
      // {
      //   icon: <FiExternalLink />,
      //   title: 'Preview : ',
      //   desc: 'www.dribble.com',
      // },
    ],
  },

  {
    id: 4,
    img: Work4,
    title: 'Video Editing',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Video',
      },
      // {
      //   icon: <FiUser />,
      //   title: 'Client : ',
      //   desc: 'Dribble',
      // },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'Adobe Premium',
      },
      // {
      //   icon: <FiExternalLink />,
      //   title: 'Preview : ',
      //   desc: 'www.dribble.com',
      // },
    ],
  },

  {
    id: 5,
    img: Work5,
    title: 'Landing Page',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Website',
      },
      // {
      //   title: 'Client : ',
      //   desc: 'Dribble',
      // },
      { 
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'React JS, Node JS',
      },
      // {
      //   title: 'Preview : ',
      //   desc: 'www.dribble.com',
      // },
    ],
  },

  {
    id: 6,
    img: Work6,
    title: 'Backend Development',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Backend',
      },
      // {
      //   icon: <FiUser />,
      //   title: 'Client : ',
      //   desc: 'Dribble',
      // },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'Node.js, Express, mongoDB',
      },
      // {
      //   icon: <FiExternalLink />,
      //   title: 'Preview : ',
      //   desc: 'www.dibble.com',
      // },
    ],
  },
];

export const themes = [
  {
    id: 1,
    img: Theme1,
    color: 'hsl(252, 35%, 51%)',
  },

  {
    id: 2,
    img: Theme2,
    color: 'hsl(4, 93%, 54%)',
  },

  {
    id: 3,
    img: Theme3,
    color: 'hsl(271, 76%, 53%)',
  },

  {
    id: 4,
    img: Theme4,
    color: 'hsl(225, 73%, 57%)',
  },

  {
    id: 5,
    img: Theme5,
    color: 'hsl(43, 74%, 49%)',
  },

  {
    id: 6,
    img: Theme6,
    color: 'hsl(339, 81%, 66%)',
  },

  {
    id: 7,
    img: Theme7,
    color: 'hsl(80, 61%, 50%)',
  },

  {
    id: 8,
    img: Theme8,
    color: 'hsl(19, 96%, 52%)',
  },

  {
    id: 9,
    img: Theme9,
    color: 'hsl(88, 65%, 43%)',
  },

  {
    id: 10,
    img: Theme10,
    color: 'hsl(42, 100%, 50%)',
  },
];
