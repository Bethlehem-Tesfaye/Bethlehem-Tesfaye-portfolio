import { aau, auth, chat, event, expense, house, res, swen } from "../assets";

export const RESUME_LINK =
  "https://drive.google.com/file/d/1pBfRRrPAmKcU7uzxakewv9khdvu5EC5g/view";

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
  githubLink?: string;
  features?: string[];
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
    title: "Event Management App (Eventlight)",
    description:
      "Full-stack event management platform featuring Better Auth authentication, real-time notifications with Socket.IO, and secure ticket payments via Chapa gateway.",
    features: [
      "Better Auth",
      "Socket.IO",
      "Chapa gateway",
      "React",
      "TypeScript",
      "node.js",
      "PostgreSQL(prisma)",
      "TanStack Query",
      "shadcn/ui",
    ],
    link: "https://frontend-event-mangment-pr-64.onrender.com",
    githubLink:
      "https://github.com/Bethlehem-Tesfaye/complete-mern-Authentication-system",
  },
  {
    id: "expense-tracker",
    imageSrc: expense,
    imageAlt: "Expense Tracker",
    title: "Automated Expense Tracker with Receipt OCR & Analytics",
    description:
      "Full-stack expense tracking platform that automates receipt processing with OCR and uses an LLM (Gemini) to structure and categorize expense data, with analytics dashboards for spending insights.",
    features: [
      "OCR(PaddleOCR)",
      "Advanced OCR (Veryfi API)",
      "Gemini AI",
      "Analytics Dashboard & Charts",
      "React",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "TanStack Query",
    ],
    link: "YOUR_DEPLOYMENT_LINK",
    githubLink: "YOUR_GITHUB_LINK",
  },
  {
    id: "blink-chat-app",
    imageSrc: chat,
    imageAlt: "Blink Real-Time Messaging Platform",
    title: "Blink – Real-Time Messaging Platform",
    description:
      "Blink is a scalable full-stack real-time messaging platform that enables instant group communication. The frontend is built with React and TypeScript, while the backend uses Node.js, Express, and Prisma with PostgreSQL for data persistence. Real-time messaging is powered by Socket.IO with Redis pub/sub for event distribution across servers. The platform includes secure authentication, media uploads via Cloudinary, and production deployment using Render and cloud services.",
    features: [
      "Socket.IO",
      "Redis",
      "React",
      "Node.js ",
      "Prisma ORM",
      "PostgreSQL ",
      "TypeScript",
    ],
    link: "https://real-time-messaging-platform.onrender.com",
    githubLink:
      "https://github.com/Bethlehem-Tesfaye/Real-Time-Messaging-Platform",
  },
  {
    id: "complete-mern-auth",
    imageSrc: auth,
    imageAlt: "MERN Auth",
    title: "Complete MERN Authentication System",
    description:
      "A full-featured authentication system with OTP verification, password reset, and protected routes.",
    link: "https://complete-mern-authentication-system-1.onrender.com",
    githubLink:
      "https://github.com/Bethlehem-Tesfaye/complete-mern-Authentication-system",
  },
  {
    id: "restaurant-app",
    imageSrc: res,
    imageAlt: "Restaurant App",
    title: "Restaurant Management App",
    description:
      "Responsive restaurant web app for customers and admin management (PHP + MySQL).",
    link: "https://phpresturnatwebapp.infinityfreeapp.com",
    githubLink: "https://github.com/Bethlehem-Tesfaye/resturant-app-php-mysql",
  },

  {
    id: "real-estate",
    imageSrc: house,
    imageAlt: "Real Estate App",
    title: "Real Estate App",
    description:
      "Property listings with detailed information and map-based exploration.",
    link: "https://real-estate-react.onrender.com",
    githubLink: "https://github.com/Bethlehem-Tesfaye/real-estate-react",
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
    href: "https://t.me/yourhandle",
    type: "link",
  },
];
