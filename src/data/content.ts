import { aau, auth, chat, event, expense, house, res, swen } from "../assets";

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
      "Built a full-stack event management platform with secure ticketing, real-time updates, and a custom authentication flow designed for reliable user onboarding and payments.",
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
    highlights: [
      "Designed a custom authentication and recovery system using Better Auth with OTP verification and secure session creation",
      "Handled payment workflows with Chapa, ensuring reliable transaction flow and user feedback on payment status",
      "Implemented real-time event updates using Socket.IO to improve user engagement and system responsiveness",
      "Modeled relational data using PostgreSQL and Prisma for efficient querying of events, tickets, and users",
    ],
    link: "https://frontend-event-mangment.onrender.com",
    githubLink: "https://github.com/Bethlehem-Tesfaye/Event-mangment",
  },
  {
    id: "expense-tracker",
    imageSrc: expense,
    imageAlt: "Expense Tracker",
    title: "Automated Expense Tracker with Receipt OCR & Analytics",
    description:
      "Built an intelligent expense tracking system that transforms raw receipt data into structured financial insights using OCR and AI-driven processing.",

    highlights: [
      "Designed a multi-step OCR pipeline combining PaddleOCR and Veryfi to improve accuracy across diverse receipt formats",
      "Integrated an LLM (Gemini) to extract, normalize, and categorize unstructured receipt data into structured records",
      "Handled noisy and inconsistent OCR outputs to ensure reliable downstream processing",
      "Built an end-to-end data flow from extraction → processing → storage → analytics",
      "Developed analytics dashboards to visualize spending patterns and user insights",
    ],
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
    link: "https://github.com/Bethlehem-Tesfaye/Automated-Expense-Tracker",
    githubLink:
      "https://github.com/Bethlehem-Tesfaye/Automated-Expense-Tracker",
  },
  {
    id: "blink-chat-app",
    imageSrc: chat,
    imageAlt: "Blink Real-Time Messaging Platform",
    title: "Blink – Real-Time Messaging Platform",
    description:
      "Designed and built a scalable real-time messaging system supporting group communication with consistent message delivery across distributed servers.",
    features: [
      "Socket.IO",
      "Redis",
      "React",
      "Node.js ",
      "Prisma ORM",
      "PostgreSQL ",
      "TypeScript",
    ],
    highlights: [
      "Implemented Redis pub/sub to synchronize Socket.IO events across multiple server instances",
      "Designed backend architecture for horizontal scalability and real-time reliability",
      "Handled media uploads with optimized Cloudinary integration",
      "Built secure authentication and session handling for real-time environments",
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
      "Built a full authentication system supporting OTP verification, password recovery, and protected routes with role-based access control.",

    highlights: [
      "Implemented OTP-based email verification for secure user onboarding",
      "Designed password reset flow with token-based validation",
      "Protected routes with authentication guards on both frontend and backend",
    ],

    features: [
      "MongoDB",
      "Express.js",
      "React",
      "Node.js",
      "JWT Authentication",
    ],

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
      "Developed a responsive restaurant web application for menu browsing and administrative management using a PHP and MySQL backend.",

    highlights: [
      "Implemented admin features for managing menu items and orders",
      "Designed a responsive UI for customer browsing and interaction",
      "Integrated backend with MySQL for persistent data storage",
    ],

    features: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],

    link: "https://phpresturnatwebapp.infinityfreeapp.com",
    githubLink: "https://github.com/Bethlehem-Tesfaye/resturant-app-php-mysql",
  },

  {
    id: "real-estate",
    imageSrc: house,
    imageAlt: "Real Estate App",
    title: "Real Estate App",
    description:
      "Built a property listing platform with detailed views and map-based exploration to help users browse and discover real estate listings.",

    highlights: [
      "Implemented property listing and detail pages with structured data display",
      "Integrated map-based exploration for improved user navigation",
      "Designed responsive UI for browsing listings across devices",
    ],

    features: ["React", "JavaScript", "CSS", "API Integration"],

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
    href: "https://t.me/TThenightmarepainter",
    type: "link",
  },
];
