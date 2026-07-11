import type { Capability } from "@/types/portfolio";

export const capabilities: Capability[] = [
  {
    id: 1,
    title: "Cloud & Infrastructure",
    description:
      "Designing, deploying and maintaining cloud-based and Linux infrastructure environments.",
    tools: ["AWS", "SAP BTP", "Docker", "Terraform", "Ansible", "Jenkins CI/CD", "Arch Linux", "Amazon Linux 2023", "RHEL"],
    icon: "cloud",
  },
  {
    id: 2,
    title: "Integration & Distributed Systems",
    description:
      "Connecting systems through APIs, middleware, messaging and event-driven integration patterns.",
    tools: ["SAP CPI", "SAP PI/PO", "SAP SLT", "Kafka", "WildFly/JBoss", "SAP NetWeaver", "REST", "SOAP", "JDBC", "JMS", "Insomnia/Postman"],
    icon: "integration",
  },
  {
    id: 3,
    title: "Software Engineering",
    description:
      "Developing maintainable applications, services, integrations and supporting scripts.",
    tools: ["Java", "Python", "TypeScript", "Bash", "Groovy", "C++", ".NET", "Visual Basic", "XML", "XSLT"],
    icon: "software",
  },
  {
    id: 4,
    title: "Automation & Delivery",
    description:
      "Automating deployments, configuration, operational work and repeatable delivery processes.",
    tools: ["Terraform", "Ansible", "Jenkins CI/CD", "GitLab", "Scrumban", "Jira", "Confluence", "SharePoint"],
    icon: "automation",
  },
  {
    id: 5,
    title: "Observability & Operations",
    description:
      "Monitoring system health, diagnosing incidents and improving operational reliability.",
    tools: ["Grafana", "Prometheus", "SAP Cloud ALM", "ELK Stack", "ITIL"],
    icon: "operations",
  },
  {
    id: 6,
    title: "Data & Persistence",
    description:
      "Working with relational, cloud and application data stores as part of complete system solutions.",
    tools: ["Oracle SQL Developer", "MS SQL", "SAP HANA DB", "Firebase RTDB", "MySQL"],
    icon: "data",
  },
];
