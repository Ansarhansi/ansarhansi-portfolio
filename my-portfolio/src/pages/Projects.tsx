import React from "react";

const projects = [
  {
    title: "movie-review-insight",
    image: "/images/m1.jpg",
    desc: "Uses machine learning and NLP to classify movie reviews as positive or negative. Built with data preprocessing, feature extraction, model training, and deployment into a user-friendly app.",
    tech: ["Python", "Flask", "NLP", "LSTM"],
    github: "https://github.com/Ansarhansi/movie-review-insights.git",
  },
  {
    title: "Smart-Examination-System",
    image: "/images/e1.jpg",
    desc: "Conducts quizzes and coding tests with instant results. Faculty manages questions; students get real-time feedback and scores.",
    tech: ["React", "Tailwind", "MongoDB", "Express", "Node.js"],
    github: "https://github.com/Ansarhansi/Smart-Examination-System.git",
  },
  {
    title: "CourseCraft-Online-Learning-Platform",
    image: "/images/l1.jpg",
    desc: "Interactive courses with quizzes, grading, and tracking. Includes login, course navigation, and module-based assessments.",
    tech: ["Node.js", "HTML", "CSS", "JavaScript", "Express"],
    github: "https://github.com/Ansarhansi/CourseCraft-.git",
  },
  {
    title: "NutriSense",
    image: "/images/h1.jpg",
    desc: "Instantly checks ingredients for nutrition benefits using typed input. Clean UI, real-time analysis, and feedback.",
    tech: ["Flask", "Python", "Jupyter", "Pandas"],
    github: "https://github.com/Ansarhansi/NutriSense.git",
  },
];

const Projects: React.FC = () => (
  <div className="max-w-6xl mx-auto py-16 px-4">
    <h2 className="text-3xl font-bold mb-12 text-center text-gray-800 underline decoration-blue-500 decoration-4 underline-offset-8">
      Projects
    </h2>
    <div className="grid md:grid-cols-2 gap-10">
      {projects.map((p, i) => (
        <div
          key={i}
          className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition duration-500 transform hover:-translate-y-1"
        >
          <div className="bg-gray-100 h-[250px] flex items-center justify-center overflow-hidden">
            <img
              src={p.image}
              alt={p.title}
              className="max-h-full max-w-full object-contain transition-transform duration-300 hover:scale-105"
            />
          </div>
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-2 text-blue-700">
              {p.title}
            </h3>
            <p className="text-gray-600 mb-3">{p.desc}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {p.tech.map((t) => (
                <span
                  key={t}
                  className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-medium"
                >
                  {t}
                </span>
              ))}
            </div>
            <div className="flex gap-4">
              <a
                href={p.github}
                className="text-sm font-semibold text-blue-600 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                View GitHub →
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Projects;
