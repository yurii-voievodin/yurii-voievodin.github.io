import { CVSection } from '@/types/blog';

export const cvData: CVSection[] = [
  {
    title: "Experience",
    items: [
      {
        title: "Senior Software Developer",
        subtitle: "Tech Company Inc.",
        period: "2022 - Present",
        description: "Led development of scalable web applications using React, Node.js, and TypeScript.",
        skills: ["React", "TypeScript", "Node.js", "PostgreSQL", "AWS"]
      },
      {
        title: "Software Developer",
        subtitle: "StartupXYZ",
        period: "2020 - 2022",
        description: "Developed and maintained full-stack applications, collaborated with cross-functional teams.",
        skills: ["JavaScript", "Python", "Django", "React", "Docker"]
      }
    ]
  },
  {
    title: "Education",
    items: [
      {
        title: "Master of Science in Computer Science",
        subtitle: "University Name",
        period: "2018 - 2020",
        description: "Specialized in software engineering and web technologies."
      },
      {
        title: "Bachelor of Science in Computer Science",
        subtitle: "University Name",
        period: "2014 - 2018",
        description: "Foundation in programming, algorithms, and data structures."
      }
    ]
  },
  {
    title: "Skills",
    items: [
      {
        title: "Programming Languages",
        skills: ["JavaScript", "TypeScript", "Python", "Java", "Go"]
      },
      {
        title: "Frontend",
        skills: ["React", "Next.js", "Vue.js", "HTML", "CSS", "Tailwind CSS"]
      },
      {
        title: "Backend",
        skills: ["Node.js", "Express", "Django", "PostgreSQL", "MongoDB"]
      },
      {
        title: "Tools & Others",
        skills: ["Git", "Docker", "AWS", "CI/CD", "Jest", "Webpack"]
      }
    ]
  }
];

