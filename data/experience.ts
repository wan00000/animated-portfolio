import type { ExperienceItem } from "@/types/portfolio";

export const workExperience: ExperienceItem[] = [
  {
    id: 1,
    role: "SAP Integration Engineer",
    organization: "Infineon Technologies Malaysia",
    period: "Oct 2025 - Present",
    summary:
      "Supporting reliable enterprise hybrid-cloud integration platforms across SAP and non-SAP environments.",
    contributions: [
      "Resolve incidents affecting enterprise integration flows and middleware services.",
      "Support monitoring and deployment activities across hybrid-cloud integration platforms.",
      "Troubleshoot SAP and non-SAP integrations to maintain service reliability.",
    ],
    capabilities: ["Integration", "Cloud Operations", "Middleware", "Incident Resolution", "Troubleshooting"],
    logo: "/infineon1.png",
  },
  {
    id: 2,
    role: "IT Intern",
    organization: "Texas Instruments Electronics Malaysia",
    period: "Mar 2025 - Aug 2025",
    summary:
      "Contributed to software development, application maintenance and process automation work.",
    contributions: [
      "Supported the development and maintenance of internal software applications.",
      "Worked on automation and application enhancement tasks.",
      "Contributed to system and API integration activities.",
    ],
    capabilities: ["Web Development", "Automation", "System Integration", "API Integration", "Solution Design"],
    logo: "/ti.jpeg",
  },
  {
    id: 3,
    role: "Web Designer",
    organization: "Soloreen Ventures Enterprises",
    period: "Sep 2024 - Mar 2025",
    summary:
      "Designed practical, user-friendly interfaces for websites and web applications.",
    contributions: [
      "Created visual and interaction designs for websites and web applications.",
      "Applied UI and UX principles to improve usability and presentation.",
      "Worked with iterative design and creative delivery processes.",
    ],
    capabilities: ["Web Design", "Figma", "UI Design", "UX Design", "Creative Work", "Sprint Design"],
    logo: "/soloreen.jpeg",
  },
];
