import type { SiteProfile, SocialLink } from "@/types/portfolio";

export const siteProfile: SiteProfile = {
  name: "IZWAN HUSAINY BIN MOHAMAD",
  displayName: "IZWAN HUSAINY",
  currentRole: "SAP Integration Engineer",
  currentEmployer: "Infineon Technologies Malaysia",
  currentEmployerLogo: "/infineon1.png",
  roleDescription:
    "Supporting reliable enterprise hybrid-cloud integration platforms across SAP and non-SAP environments, with a focus on monitoring, troubleshooting, deployment and service continuity.",
  focusAreas: [
    "Enterprise Integration",
    "Cloud Operations",
    "Middleware",
    "Automation",
  ],
  portrait: "/pixar-style.png",
  githubUrl: "https://github.com/wan00000?tab=repositories",
};

export const socialMedia: SocialLink[] = [
  {
    id: 1,
    name: "GitHub",
    link: "https://github.com/wan00000",
    img: "/git.svg",
  },
  {
    id: 2,
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/izwan-husainy-mohamad-b363a9116/",
    img: "/link.svg",
  },
];
