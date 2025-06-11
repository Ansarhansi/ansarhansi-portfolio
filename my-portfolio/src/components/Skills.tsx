import React from "react";
import {
  FaPython,
  FaJava,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaCode,
  FaHtml5,
  FaCss3Alt,
  FaCuttlefish,
  FaTools,
  FaGithub,
  FaLinux,
  FaTerminal,
  FaFigma,
  FaDatabase,
} from "react-icons/fa";
import {
  SiDjango,
  SiPostman,
  SiVite,
  SiMysql,
  SiMongodb,
  SiTailwindcss,
  SiBootstrap,
  SiTypescript,
  SiRedux,
  SiJquery,
  SiFirebase,
  SiExpress,
  SiVisualstudiocode,
  SiNetlify,
  SiRender,
} from "react-icons/si";

const skills = {
  Languages: [
    { name: "Python", icon: <FaPython className="text-blue-500" /> },
    { name: "Java", icon: <FaJava className="text-red-600" /> },
    { name: "JavaScript", icon: <FaJsSquare className="text-yellow-500" /> },

    { name: "C++", icon: <FaCuttlefish className="text-indigo-500" /> },
  ],
  Frameworks: [
    { name: "React", icon: <FaReact className="text-cyan-500" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-green-600" /> },
    { name: "Django", icon: <SiDjango className="text-green-800" /> },
  ],
  Styling: [
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-400" /> },
    { name: "Bootstrap", icon: <SiBootstrap className="text-purple-600" /> },
    { name: "CSS3", icon: <FaCss3Alt className="text-blue-600" /> },
    { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
  ],
  Databases: [
    { name: "MySQL", icon: <SiMysql className="text-blue-700" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-green-700" /> },
    { name: "Firebase", icon: <SiFirebase className="text-yellow-500" /> },
  ],
  Tools: [
    { name: "Git", icon: <FaGitAlt className="text-red-600" /> },
    { name: "GitHub", icon: <FaGithub className="text-gray-800" /> },
    { name: "VS Code", icon: <SiVisualstudiocode className="text-blue-500" /> },
    { name: "Figma", icon: <FaFigma className="text-pink-600" /> },

    { name: "Terminal", icon: <FaTerminal className="text-gray-600" /> },
  ],
  Deployment: [
    { name: "Netlify", icon: <SiNetlify className="text-teal-500" /> },
  ],
};

const Skills: React.FC = () => (
  <div className="max-w-6xl mx-auto py-16 px-4" id="skills">
    <h2 className="text-4xl font-bold mb-10 text-center">Skills & Tools</h2>
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
      {Object.entries(skills).map(([category, skillList]) => (
        <div
          key={category}
          className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300"
        >
          <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2">
            <FaTools className="text-blue-500" /> {category}
          </h3>
          <ul className="space-y-3">
            {skillList.map((skill) => (
              <li key={skill.name} className="flex items-center gap-3 text-lg">
                <span className="text-xl">{skill.icon}</span>
                <span>{skill.name}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </div>
);

export default Skills;
