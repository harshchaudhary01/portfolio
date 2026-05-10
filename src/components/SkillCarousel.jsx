import {
  FaReact,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaDocker,
  FaAws,
} from "react-icons/fa";

import {
  SiTypescript,
  SiTailwindcss,
  SiNextdotjs,
  SiRedux,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiMysql,
  SiPrisma,
  SiGraphql,
  SiFirebase,
  SiVite,
  SiJest,
  SiCypress,
  SiLinux,
  SiNginx,
  SiPostman,
} from "react-icons/si";

const skills = [
  // ===== Frontend =====
  { name: "React", icon: <FaReact /> },
  { name: "Next.js", icon: <SiNextdotjs /> },
  { name: "TypeScript", icon: <SiTypescript /> },
  { name: "JavaScript", icon: <FaJs /> },
  { name: "HTML5", icon: <FaHtml5 /> },
  { name: "CSS3", icon: <FaCss3Alt /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss /> },
  { name: "Redux", icon: <SiRedux /> },
  { name: "Vite", icon: <SiVite /> },

  // ===== Backend =====
  { name: "Node.js", icon: <FaNodeJs /> },
  { name: "Express.js", icon: <SiExpress /> },
  { name: "REST APIs", icon: <SiPostman /> },
  { name: "GraphQL", icon: <SiGraphql /> },

  // ===== Databases =====
  { name: "MongoDB", icon: <SiMongodb /> },
  { name: "PostgreSQL", icon: <SiPostgresql /> },
  { name: "MySQL", icon: <SiMysql /> },
  { name: "Prisma", icon: <SiPrisma /> },

  // ===== Auth & Backend Services =====
  { name: "Firebase", icon: <SiFirebase /> },

  // ===== Testing =====
  { name: "Jest", icon: <SiJest /> },
  { name: "Cypress", icon: <SiCypress /> },

  // ===== DevOps & Tools =====
  { name: "Git", icon: <FaGitAlt /> },
  { name: "GitHub", icon: <FaGithub /> },
  { name: "Docker", icon: <FaDocker /> },
  { name: "AWS", icon: <FaAws /> },
  { name: "Linux", icon: <SiLinux /> },
  { name: "Nginx", icon: <SiNginx /> },
];


export default function SkillCarousel() {
  return (
    <div className="marquee">
      <div className="marquee-track gap-5">
        {skills.concat(skills).map((skill, index) => (
          <SkillItem key={index} skill={skill} />
        ))}
      </div>
    </div>
  );
}

function SkillItem({ skill }) {
  return (
    <div
      className="
        flex items-center gap-1
        text-md font-semibold whitespace-nowrap
        shrink-0
        hover:cursor-grab
      "
    >
      <span className="text-md w-10 h-10 flex items-center justify-center">{skill.icon}</span>
      <span>{skill.name}</span>
    </div>
  );
}
