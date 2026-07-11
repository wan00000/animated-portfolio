import type { Project } from "@/types/portfolio";

export const projects: Project[] = [
  {
    id: 1,
    slug: "smart-infrastructure-watchdog",
    title: "Smart Infrastructure Watchdog",
    summary:
      "An infrastructure watchdog that monitors web access logs, performs health checks and cleanup, exposes Prometheus metrics, and alerts administrators when issues are detected.",
    technologies: ["Bash", "Python", "Prometheus", "Grafana", "Postfix"],
    technologyIcons: ["/Bash.png", "/Python.png", "/Prometheus.png", "/Grafana.png", "/Postfix.png"],
    images: ["/p7-1.png", "/p7-2.png", "/p7-3.png"],
    repository: "https://github.com/wan00000/smart-watchdog",
    category: "Infrastructure & Observability",
    featured: true,
  },
  {
    id: 2,
    slug: "event-driven-order-processing-middleware",
    title: "Event-Driven Order Processing Middleware",
    summary:
      "A reference event-driven order-processing pipeline demonstrating Kafka-based service decoupling, retries, dead-letter handling and operational troubleshooting.",
    technologies: ["Kafka", "WildFly", "MicroProfile", "Postman", "Docker"],
    technologyIcons: ["/kafka.jpg", "/wildfly.png", "/microprofile.png", "/postman.svg", "/docker.png"],
    images: ["/p6-1.png", "/p6-2.png", "/p6-3.png"],
    repository: "https://github.com/wan00000/Event-Driven-Order-Processing-Middleware",
    category: "Integration & Distributed Systems",
    featured: true,
  },
  {
    id: 3,
    slug: "cloud-native-portfolio-application",
    title: "Cloud-Native Portfolio Application",
    summary:
      "A Next.js portfolio application containerized with Docker, provisioned on AWS through Terraform and Ansible, and delivered through an automated CI/CD workflow.",
    technologies: ["AWS", "Terraform", "Ansible", "Jenkins", "Docker"],
    technologyIcons: ["/aws.png", "/terraform.webp", "/ansible.svg", "/jenkins.png", "/docker.png"],
    images: ["/p5-1.png", "/p5-2.png", "/p5-3.png"],
    repository: "https://github.com/wan00000/animated-portfolio/tree/experiment",
    category: "Cloud & Delivery",
    featured: true,
  },
  {
    id: 4,
    slug: "portable-smart-attendance-system",
    title: "Portable Smart Attendance & Management System",
    summary:
      "An RFID-enabled attendance management solution with a mobile interface for enrolment, session handling, attendance tracking and reporting.",
    technologies: ["React Native", "TypeScript", "Firebase", "Arduino", "VS Code"],
    technologyIcons: ["/re.svg", "/ts.svg", "/firebase.png", "/arduino.png", "/vscode.png"],
    images: ["/p1-1.png", "/p1-3.png", "/p1-2.png"],
    repository: "https://github.com/wan00000/portable-smart-attendance-system",
    category: "Mobile & IoT",
    featured: false,
  },
  {
    id: 5,
    slug: "aws-to-do-list-application",
    title: "To-Do List App with AWS Backend",
    summary:
      "A task-management web application using AWS services for authentication, hosting, networking and persistence.",
    technologies: ["AWS Amplify", "Cognito", "VPC", "RDS", "TypeScript"],
    technologyIcons: ["/amplify.png", "/cognito.png", "/vpc.png", "/rds.png", "/ts.svg"],
    images: ["/p3-1.png", "/p3-2.png", "/p3-3.png"],
    repository: "https://github.com/wan00000/to-do-list-app",
    category: "Cloud Application",
    featured: false,
  },
  {
    id: 6,
    slug: "ai-image-generator",
    title: "AI Image Generator",
    summary:
      "A web application that generates images from user prompts through an image-generation API.",
    technologies: ["React", "Tailwind CSS", "TypeScript", "OpenAI API", "HTML"],
    technologyIcons: ["/re.svg", "/tail.svg", "/ts.svg", "/chatgpt.png", "/html.png"],
    images: ["/p4-1.png", "/notFound.jpg", "/notFound.jpg"],
    repository: "https://github.com/wan00000/AI-Image-Generator",
    category: "Web & AI",
    featured: false,
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
