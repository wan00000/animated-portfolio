export type EducationItem = {
  id: number
  title: string 
  institution: string
  description: string
  period: string 
  courseWork?: string[]
  className?: string
  img?: string
  imgClassName?: string
  titleClassName?: string
}

export const educationItems: EducationItem[] = [
  {
    id: 1,
    title: "Bachelor of Computer Science (Computer Network) with Honours",
    institution: "Universiti Putra Malaysia (UPM)",
    description: "",
    period: "Oct 2021 - Oct 2025",
    courseWork: [" Cloud Computing", "Network Programming", "Database Principles", "Business Analytics", "Network Security", "Artificial Intelligence", "Data Structures"],
    img: "/upm.png",
  },
  {
    id: 2,
    title: "Foundation of Agricultural Science",
    institution: "Universiti Putra Malaysia (UPM)",
    description: "",
    period: "Aug 2020 - Aug 2021",
    courseWork: ["Biology", "Chemistry", "Mathematics", "Physics", "English", "Agriculture"],
    img: "/upm.png",
  },

  // {
  //   id: 22,
  //   title: "Sales Assistant",
  //   institution: "CelcomDigi Berhad",
  //   description: "Provide exceptional customer service by resolving issues related to Digi mobile and fibre plans.",
  //   period: "Sep 2023 - Oct 2023",
  //   skills: ["Enhanced ability to promote and sell products effectively", "Gained expertise in resolving customer issues", "Developed skills to address technical queries swiftly"],
  //   className: "md:col-span-1",
  //   img: "/images/education/design.jpg", // Replace with your actual image path
  //   imgClassName: "object-cover",
  //   titleClassName: "text-white",
  // },
  // {
  //   id: 33,
  //   title: "Web Designer",
  //   institution: " Soloreen Ventures Enterprises",
  //   description: "Create visually appealing, user-friendly, and functional designs for websites and web applications.",
  //   period: "Sep 2024 - Mar 2025",
  //   skills: ["Web Design", "Figma", "UI Design", "UX Design", "Creative Work", "Sprint Design"],
  //   className: "md:col-span-1",
  //   img: "/images/education/bootcamp.jpg", // Replace with your actual image path
  //   imgClassName: "object-cover",
  //   titleClassName: "text-white",
  // },
]
