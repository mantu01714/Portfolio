import { Github, Linkedin, Mail } from 'lucide-react';
import { NavLink, Project, SkillCategory, SocialLink } from './types';
import leetCodeIcon from "./assets/leetcode.svg";
import gfgIcon from "./assets/gfg.svg";

export const NAV_LINKS: NavLink[] = [
  { label: '#home', href: '#home' },
  { label: '#projects', href: '#projects' },
  { label: '#skills', href: '#skills' },
  { label: '#about', href: '#about' },
  { label: '#contact', href: '#contact' },
];

export const HERO_DATA = {
  name: "Mantu",
  role: "software engg.",
  subRole: "full-stack developer.",
  tagline: "He turns vision into scalable products engineered with clean code.",
  status: "Open for new opportunities",
  resumeUrl: "/MANTU_KUMAR.pdf" 
};

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'HireUNex– Job Portal',
    description: 'A full-stack job portal built with React, Node.js, Express, MongoDB, and Clerk. Features secure role-based authentication, job listings, applications, and live dashboards. Improved application-tracking efficiency by 30% for 50+ test users.',
    techStack: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Postman', 'Clerk'],
    imageUrl: '/HireUNex.png',
    liveUrl: 'https://hire-u-nex-client.vercel.app/',
    githubUrl: 'https://github.com/mantu01714/HireUNex'
  },
  {
    id: '2',
    title: 'interviewUNex–AI Interview Assistant',
    description: 'AI-powered interview platform built with Next.js, Supabase, Stripe, and OpenRouter. Includes credit-based usage, real-time dashboards, and an optimized 25% faster UI with reusable React components.',
    techStack: ['Next.js', 'Supabase', 'Stripe', 'Vapi', 'OpenRouter'],
    imageUrl: '/interviewUNex.png',
    liveUrl: 'https://interview-u-nex.vercel.app/',
    githubUrl: 'https://github.com/mantu01714/interviewUNex'
  },
  {
    id: '3',
    title: 'JaiswalMart - E-Commerce Platform',
    description: 'Full-stack e-commerce application using Java, Spring Boot, and AWS. Features secure authentication, product & order management, AWS S3 storage, AWS RDS (MySQL), and deployment on Elastic Beanstalk for scalable cloud hosting.',
    techStack: ['Java 17', 'Spring Boot', 'Spring Web', 'HTML5', 'CSS3', 'Thymeleaf', 'MySQL', 'AWS Web Services'],
    imageUrl: '/JaiswalMart.png',
    liveUrl: 'http://jaiswal-mart.eu-north-1.elasticbeanstalk.com/',
    githubUrl: 'https://github.com/mantu01714/JaiswalMart'
  },
  {
    id: '4',
    title: 'AlgoVision - DSA Visualization Platform',
    description: 'Interactive platform built with React, JavaScript, and TailwindCSS to visualize core DSA concepts like sorting, searching, trees, and graphs. Includes real-time animations using Framer Motion and step-by-step algorithm walkthroughs for intuitive learning.',
    techStack: ['HTML', 'CSS', 'JavaScript', 'react.js', 'Vercel', 'Tailwind CSS'],
    imageUrl: '/Algovision.png',
    liveUrl: 'https://algo-vision-dsa.vercel.app/',
    githubUrl: 'https://github.com/mantu01714/AlgoVision'
  },
  {
    id: '5',
    title: 'Smart Weather App',
    description: 'Responsive weather dashboard built with HTML, CSS, and JavaScript using the OpenWeatherMap API. Features geolocation-based weather, city search, 5-day forecast, real-time map view, dynamic charts, light/dark themes, and searchable history for an improved user experience.',
    techStack: ['HTML', 'CSS', 'JavaScript', 'OpenWeatherMap API',],
    imageUrl: '/SmartWeather.png',
    liveUrl: 'https://sensational-crostata-ce2ac5.netlify.app/',
    githubUrl: 'https://github.com/Vansh12970/VanshProtfolio'
  },
  {
    id: '6',
    title: 'AI Summarizer - Text Compression Tool',
    description: 'Built an AI-powered text summarization app using the HuggingFace Inference API to generate concise summaries from long text. Designed a clean and responsive UI with smooth interactions, supporting multiple summary lengths and one-click copy functionality for better usability.',
    techStack: ['HTML', 'CSS', 'JavaScript', 'HuggingFace Inference API'],
    imageUrl: '/Summerizar.png',
    liveUrl: 'https://summarizer-web.vercel.app/',
    githubUrl: 'https://github.com/mantu01714/summarizer-web'
  }
];

export const SKILLS: SkillCategory[] = [
  {
    title: 'Programming Languages',
    skills: ['C++', 'Java', 'JavaScript', 'SQL']
  },
  {
    title: 'Frontend Development',
    skills: ['HTML5', 'CSS3', 'TailwindCSS', 'React.js', 'Next.js']
  },
  {
    title: 'Backend Development',
    skills: ['Node.js', 'Express.js', 'Spring', 'Spring Boot', 'REST APIs']
  },
  {
    title: 'Databases',
    skills: ['MongoDB', 'MySQL', 'PostgreSQL', 'Supabase', 'Hibernate ORM']
  },
  {
    title: 'Core CS',
    skills: ['Data Structures & Algorithms', 'DBMS', 'OOPs']
  },
  {
    title: 'Software Development Practices',
    skills: ['Agile Methodology', 'SDLC', 'CI/CD', 'Jenkins']
  },
  {
    title: 'Tools & Platforms',
    skills: ['AWS (S3, RDS, EC2, Elastic Beanstalk)', 'VS Code', 'Postman', 'Git/GitHub', 'Vercel']
  }
];


export const SOCIAL_LINKS: SocialLink[] = [
  { platform: 'Github', url: 'https://github.com/mantu01714', icon: Github },
  { platform: 'LinkedIn', url: 'https://www.linkedin.com/in/mantu-kumar-960228249/', icon: Linkedin },
  { platform: 'LeetCode', url: 'https://leetcode.com/u/mantukumar7070', icon: leetCodeIcon },
  { platform: 'GFG', url: 'https://www.geeksforgeeks.org/user/mantukumar7070', icon: gfgIcon },
];

// Separate link for the left sidebar message icon
export const CONTACT_LINK = {
  platform: 'Message',
  url: '#contact',
  icon: Mail
};