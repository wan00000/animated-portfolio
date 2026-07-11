import type { SiteProfile, SocialLink } from "@/types/portfolio";

export const siteProfile: SiteProfile = {
  name: "IZWAN HUSAINY BIN MOHAMAD",
  shortName: "IZWAN HUSAINY",
  headline:
    "Engineer building reliable digital systems across software, cloud, integration and automation.",
  introduction:
    "I design, build and operate practical technology solutions with an emphasis on reliability, maintainability and clear technical execution.",
  currentContext:
    "Currently working in enterprise integration and cloud operations.",
  focusAreas: ["Software", "Cloud", "Integration", "Automation", "Operations"],
  portrait: "/pixar-style.png",
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
