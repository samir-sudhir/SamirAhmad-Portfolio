import {
  logo,
  backend,
  creator,
  mobile,
  web,
  github,
  menu,
  close,
  css,
  project1,
  project2,
  project3,
  mysql,
  express,
  aws,
  mui,
  gsap,
  framer,
  figma,
  git,
  html,
  javascript,
  mongodb,
  nodejs,
  reactjs,
  redux,
  tailwind,
  threejs,
  firstTestimonial,
  secondTestimonial,
  thirdTestimonial,
} from "../assets";

import novatoreIcon from "../assets/company/novatore.png";
import pfIcon from "../assets/company/programmersforce.png";
// Custom tech stack logos
import php from "../assets/tech/php.png";
import laravel from "../assets/tech/laravel.png";
import python from "../assets/tech/python.png";
import django from "../assets/tech/django.png";
import nextjs from "../assets/tech/nextjs.png";
import docker from "../assets/tech/docker.png";
import postgresql from "../assets/tech/postgresql.png";
import bitbucket from "../assets/tech/bitbucket.png";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full-Stack Developer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Cloud Operations",
    icon: web,
  },
];

const technologies = [
  // Core Languages
  { name: "PHP", icon: php },
  { name: "Python", icon: python },
  { name: "JavaScript", icon: javascript },

  // Frontend
  { name: "React JS", icon: reactjs },
  { name: "Next JS", icon: nextjs },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "Material UI", icon: mui },
  { name: "HTML 5", icon: html },
  { name: "CSS 3", icon: css },

  // Backend
  { name: "Laravel", icon: laravel },
  { name: "Django", icon: django },
  { name: "Express JS", icon: express },
  { name: "Node JS", icon: nodejs },

  // Databases
  { name: "MySQL", icon: mysql },
  { name: "PostgreSQL", icon: postgresql },
  { name: "MongoDB", icon: mongodb },

  // Cloud & DevOps
  { name: "AWS", icon: aws },
  { name: "Docker", icon: docker },

  // Tools
  { name: "Git", icon: git },
  { name: "Bitbucket", icon: bitbucket },
  { name: "Redux Toolkit", icon: redux },
];

const experiences = [
  {
    title: "Associate Software Engineer",
    company_name: "Novatore Solutions",
    icon: novatoreIcon, // place logo in /assets/company/
    iconBg: "#383E56",
    date: "Feb 2025 – Present",
    points: [
      "Developed SaaS platform modules in Laravel for financial reconciliation and payouts.",
      "Implemented job scheduling and queues for large-scale data processing.",
      "Optimized pipelines for consistency across monthly financial cycles.",
      "Collaborated with teams to ensure reliable and efficient system operations.",
    ],
  },
  {
    title: "Backend Development Trainee",
    company_name: "Programmers Force",
    icon: pfIcon,
    iconBg: "#E6DEDD",
    date: "Aug 2024 – Nov 2024",
    points: [
      "Built backend services in Laravel and designed secure RESTful APIs.",
      "Integrated authentication and authorization using JWT.",
      "Optimized SQL queries and implemented database indexing for better performance.",
      "Contributed to agile sprints, participated in code reviews, and maintained documentation.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make our work managed through semi-auto operation in our management system , but Samir proved me wrong.",
    name: "Naem Stark",
    designation: "Operation Manager",
    company: "SleeckManage",
    image: firstTestimonial,
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Samir does.",
    name: "Richard Freick",
    designation: "Ecommerce Business",
    company: "justbuyz",
    image: secondTestimonial,
  },
  {
    testimonial:
      "Samir not only improved our site but helped us understand the process. The project was delivered on time, and the results were beyond expectations!",
    name: "James Wang",
    designation: "CTO",
    company: "FactThrise",
    image: thirdTestimonial,
  },
];

const projects = [
  {
    name: "PrepPro - AI Based Quiz Generator",
    description:
      "An AI-powered platform that generates quizzes from textual content using NLP. Built with Python (Django REST API) and Next.js for interactive dashboards with real-time analytics and user feedback tracking.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "django",
        color: "green-text-gradient",
      },
      {
        name: "nextjs",
        color: "white-text-gradient",
      },
      {
        name: "nlp",
        color: "pink-text-gradient",
      },
    ],
    image: project2, // You can replace with a screenshot of PrepPro
    source_code_link: "https://github.com/", // add repo link if public
  },
  {
    name: "MiHRM - HR Management System",
    description:
      "A secure and scalable HR management system featuring attendance, payroll, and leave management modules, 2FA integrated, automated payroll processing, and insightful analytics dashboards.",
    tags: [
      {
        name: "laravel",
        color: "red-text-gradient",
      },
      {
        name: "Vue js",
        color: "blue-text-gradient",
      },
      {
        name: "mysql",
        color: "green-text-gradient",
      },
    ],
    image: project3, // Replace with your MiHRM screenshot
    source_code_link: "https://github.com/", // add repo link if available
  },
  {
    name: "Privado - Secure  Chat App",
    description:
      "A private chat application built using React, and Pusher for real-time communication. Features end-to-end message delivery, notifications, and a responsive modern UI for seamless chatting across devices.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Firebase",
        color: "red-text-gradient",
      },
      {
        name: "pusher",
        color: "green-text-gradient",
      },
    ],
    image: project1, // Replace with your Privado screenshot
    source_code_link: "https://github.com/", // add repo link if you want
  },
];

export { services, technologies, experiences, testimonials, projects };
