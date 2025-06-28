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
]
