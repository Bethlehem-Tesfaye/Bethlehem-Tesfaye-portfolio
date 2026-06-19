import { aau, chat, event, expense, swen, roommatch } from "../assets";

export const RESUME_LINK =
  "https://drive.google.com/file/d/13RcRMfZogPtFcJqAej3eFNwNiE46fGsP/view?usp=sharing";

export const heroContent = {
  greeting: "Hi, my name is",
  name: "Bethlehem Tesfaye",
  emoji: "👋",
  // ✅ FIXED: More specific, backend-forward, and honest to what you actually build
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
    // ✅ FIXED: Actually says what you built and with what stack
    description:
      "Contributed to a Payroll Management System built for ERP integration. Worked across frontend and backend during the internship.",
    link: "https://swenetix.com/",
  },
  {
    id: "education-aau",
    imageSrc: aau,
    imageAlt: "Addis Ababa University",
    title: "BSc Computer Science @ Addis Ababa University",
    // ✅ FIXED: CGPA corrected to 3.71, "expected 2026" → "graduated 2026"
    description:
      "BSc in Computer Science, Addis Ababa University — Graduated 2026, CGPA 3.71/4.0.",
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
    tryThis: [
      "Create an account",
      "Create or join an event",
      "Purchase a ticket and observe real-time updates",
    ],
  },
  {
    id: "roommatch",
    imageSrc: roommatch, // add your screenshot import to assets
    imageAlt: "RoomMatch",
    title: "RoomMatch – Housing & Roommate Matching Platform",
    description:
      "A full-stack housing platform where tenants find rentals, pay rent online, and get matched with compatible roommates — all in one place.",

    highlights: [
      "Built a weighted roommate compatibility engine scoring lifestyle, budget, sleep schedule, and preferences",
      "Integrated Chapa for online rent collection with subaccount support for property owners",
      "Implemented full rental lifecycle management — request, contract, active, termination, and receipt download",
      "Delivered real-time notifications and in-app messaging using Socket.IO",
      "Built a separate admin panel for user moderation, scam reports, and platform oversight",
    ],

    features: [
      "React",
      "TypeScript",
      "Node.js",
      "MongoDB",
      "Socket.IO",
      "Chapa",
      "Better Auth",
    ],

    link: "https://room-match-smart-digital-solution-for.onrender.com/",
    githubLink:
      "https://github.com/Bethlehem-Tesfaye/Room-match-Smart-Digital-Solution-for-Housing",

    tryThis: [
      "Sign up as a tenant and browse property listings",
      "Set roommate preferences and view compatibility matches",
      "Submit a rental request and track its status",
    ],
  },
  {
    id: "expense-tracker",
    imageSrc: expense,
    imageAlt: "Expense Tracker",
    title: "Receipt OCR & Smart Categorization",
    description:
      "Upload a receipt and automatically extract, categorize, and visualize expenses.",
    highlights: [
      "Built OCR pipeline using PaddleOCR and Veryfi for receipt processing",
      "Used Gemini AI to extract and structure expense data",
      // ✅ FIXED: "proces:ing" typo corrected
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
      // ✅ FIXED: "Cloudiary" → "Cloudinary"
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
      "RESTful API design",
      "Socket.IO",
      // ✅ ADDED: Redis belongs here — you use it for pub/sub in production
      "Redis (pub/sub)",
      "Event-driven architecture",
      "Authentication / JWT",
      "Zod (schema validation)",
      "PHP",
      ".NET",
    ],
  },
  {
    id: "frontend",
    title: "Frontend Development",
    items: [
      "React",
      "TypeScript",
      "JavaScript (ES6+)",
      "HTML",
      "CSS",
      "Tailwind CSS",
      "Redux",
      "TanStack Query",
    ],
  },
  {
    id: "databases",
    title: "Database Management",
    items: [
      "PostgreSQL",
      "MongoDB (NoSQL)",
      "MySQL",
      "SQLite",
      // ✅ ADDED: Prisma is in every project, should be in skills too
      "Prisma ORM",
    ],
  },
  {
    id: "ai-integrations",
    // ✅ NEW CATEGORY: You have real AI/OCR work — this sets you apart
    title: "AI & Integrations",
    items: [
      "Gemini AI",
      "PaddleOCR",
      "Veryfi OCR",
      "Chapa (payment gateway)",
      "Cloudinary",
    ],
  },
  {
    id: "tools",
    title: "DevOps & Tools",
    items: ["Git", "GitHub", "Docker", "Postman", "Figma"],
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
  {
    href: "https://linkedin.com/in/bethlehem-tesfaye-b267932a8",
    text: "LinkedIn",
  },
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
