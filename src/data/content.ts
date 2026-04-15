import { aau, auth, chat, event, expense, swen } from "../assets";

export const RESUME_LINK =
  "https://drive.google.com/file/d/13RcRMfZogPtFcJqAej3eFNwNiE46fGsP/view?usp=sharing";

export const heroContent = {
  greeting: "Hi, my name is",
  name: "Bethlehem Tesfaye",
  emoji: "👋",
  intro:
    "Full-Stack & Backend Developer building efficient web applications and solving complex problems with clean code.",
  // highlight: ",
  callToAction: "Have a project or opportunity?",
  linkText: "Get In Touch",
};

export const ASSETS = {
  marqueeBannerPng:
    "https://2tbvn4haj0.ufs.sh/f/jTupBFNKiwOdYQmj72MQnJx6waY0mdLOvijU4ZgC9fyrzhDB",
  noiseLight:
    "https://2tbvn4haj0.ufs.sh/f/jTupBFNKiwOdIOeZYna9fZUb5QXuMdGaP9yYqsJ6mljEhpAI",
};

export interface ExperienceItem {
  id: string;
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
  link: string;
}

export interface ProjectItem {
  id: string;
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
  link: string;
  highlights?: string[];
  githubLink?: string;
  features?: string[];
  tryThis?: string[];
}

export const experiences: ExperienceItem[] = [
  {
    id: "swenetix-intern",
    imageSrc: swen,
    imageAlt: "Swenetix",
    title: "Intern (Fullstack Dev) @ Swenetix Tech",
    description:
      "Contributed to a Payroll Management System built for ERP integration. Worked across frontend and backend during the internship.",
    link: "https://swenetix.com/",
  },
  {
    id: "education-aau",
    imageSrc: aau,
    imageAlt: "Addis Ababa University",
    title: "BSc Computer Science @ Addis Ababa University",
    description:
      "Currently pursuing BSc in Computer Science with a CGPA of 3.73 (expected 2026).",
    link: "https://www.aau.edu.et",
  },
];

export const projects: ProjectItem[] = [
  {
    id: "eventlight",
    imageSrc: event,
    imageAlt: "Eventlight",
    title: "Eventlight – Real-Time Event & Ticketing Platform",
    description:
      "Users can create events, sell tickets, and receive real-time updates on purchases and activity.",

    highlights: [
      "Implemented secure authentication with OTP verification and account recovery",
      "Integrated Chapa payments for seamless ticket purchasing",
      "Enabled real-time updates using Socket.IO for live event activity",
      "Designed backend with PostgreSQL and Prisma for efficient data handling",
    ],

    features: [
      "React",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "Socket.IO",
      "Chapa",
      "Prisma",
    ],

    link: "https://frontend-event-mangment.onrender.com",
    githubLink: "https://github.com/Bethlehem-Tesfaye/Event-mangment",

    // NEW (important)
    tryThis: [
      "Create an account",
      "Create or join an event",
      "Purchase a ticket and observe real-time updates",
    ],
  },
  {
    id: "expense-tracker",
    imageSrc: expense,
    imageAlt: "Expense Tracker",
    title: "Expense Tracker – Receipt OCR & Smart Categorization",
    description:
      "Upload a receipt and automatically extract, categorize, and visualize expenses.",

    highlights: [
      "Built OCR pipeline using PaddleOCR and Veryfi for receipt processing",
      "Used Gemini AI to extract and structure expense data",
      "Handled noisy OCR outputs to ensure reliable data processing",
      "Developed analytics dashboard to visualize spending patterns",
    ],

    features: [
      "React",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "OCR",
      "Gemini AI",
    ],

    link: "https://automated-expense-tracker-app.onrender.com",
    githubLink:
      "https://github.com/Bethlehem-Tesfaye/Automated-Expense-Tracker",

    tryThis: [
      "Upload a receipt image",
      "View extracted and categorized expenses",
      "Check analytics dashboard",
    ],
  },
  {
    id: "blink-chat-app",
    imageSrc: chat,
    imageAlt: "Blink Messaging",
    title: "Blink – Real-Time Messaging Platform",
    description:
      "Chat in real-time with instant message delivery across multiple users and sessions.",

    highlights: [
      "Implemented real-time messaging using Socket.IO",
      "Used Redis pub/sub for cross-server message synchronization",
      "Handled media uploads with Cloudinary",
      "Built secure authentication for real-time communication",
    ],

    features: ["React", "Node.js", "Socket.IO", "Redis", "PostgreSQL"],

    link: "https://real-time-messaging-platform.onrender.com",
    githubLink:
      "https://github.com/Bethlehem-Tesfaye/Real-Time-Messaging-Platform",

    tryThis: [
      "Open app in two tabs",
      "Send messages between users",
      "Test real-time updates",
    ],
  },
  {
    id: "complete-mern-auth",
    imageSrc: auth,
    imageAlt: "MERN Auth",
    title: "MERN Authentication System",
    description:
      "Secure authentication system with OTP verification and password recovery.",

    highlights: [
      "Implemented OTP-based email verification",
      "Built password reset flow with token validation",
      "Protected frontend and backend routes",
    ],

    features: ["MongoDB", "Express", "React", "Node.js", "JWT"],

    link: "https://complete-mern-authentication-system-1.onrender.com",
    githubLink:
      "https://github.com/Bethlehem-Tesfaye/complete-mern-Authentication-system",
  },
];

export interface SkillCategory {
  id: string;
  title: string;
  items: string[];
}

export const skills: SkillCategory[] = [
  {
    id: "backend",
    title: "Backend Development",
    items: [
      "Node.js",
      "Express.js",
      "PHP",
      ".NET",
      "RESTful API design",
      "Socket.IO",
      "Authentication / JWT",
      "Zod (schema validation)",
    ],
  },
  {
    id: "frontend",
    title: "Frontend Development",
    items: [
      "HTML",
      "CSS",
      "JavaScript (ES6+)",
      "TypeScript",
      "React",
      "Tailwind CSS",
      "Redux",
      "React Query",
      "TanStack Query",
    ],
  },
  {
    id: "databases",
    title: "Database Management",
    items: ["MongoDB (NoSQL)", "MySQL", "PostgreSQL", "SQLite", "Prisma ORM"],
  },
  {
    id: "tools",
    title: "Version Control & Tools",
    items: ["Git", "GitHub", "Postman", "Redis", "Docker", "Figma"],
  },
];

export const musicContent = {
  title: "Code & Coffee",
  description: "A collection of songs that I've been listening to recently.",
  playlistUrl:
    "https://open.spotify.com/embed/playlist/3HeUA4YBM5p2J4FMcVKdK8?utm_source=generator",
};
export const menuItems = [
  { href: "#Experience", text: "Experience" },
  { href: "#Skills", text: "Skills" },
  { href: "#Projects", text: "Projects" },
  { href: "#Contact", text: "Contact" },
  {
    href: RESUME_LINK,
    text: "Resume",
    isExternal: true,
  },
];

export const footerLinks = [
  { href: "tel:+251973840133", text: "+251 973 840 133" },
  { href: "mailto:bethlehem.tesfaye15@gmail.com", text: "Email" },
  { href: "linkedin.com/in/bethlehem-tesfaye-b267932a8", text: "LinkedIn" },
  { href: "https://github.com/Bethlehem-Tesfaye", text: "GitHub" },
];

export const contactMethods = [
  {
    id: "phone",
    title: "+251 973 840 133",
    subtitle: "Call or WhatsApp",
    href: "tel:+251973840133",
    type: "phone",
  },
  {
    id: "email",
    title: "bethlehem.tesfaye15@gmail.com",
    subtitle: "Send an email",
    href: "mailto:bethlehem.tesfaye15@gmail.com",
    type: "email",
  },
  {
    id: "linkedin",
    title: "LinkedIn",
    subtitle: "Connect on LinkedIn",
    href: "https://linkedin.com/in/bethlehem-tesfaye-b267932a8",
    type: "link",
  },
  {
    id: "github",
    title: "GitHub",
    subtitle: "View projects",
    href: "https://github.com/Bethlehem-Tesfaye",
    type: "link",
  },
  {
    id: "telegram",
    title: "Telegram",
    subtitle: "Message me",
    href: "https://t.me/TThenightmarepainter",
    type: "link",
  },
];
