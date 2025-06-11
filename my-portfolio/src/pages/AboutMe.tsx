import React from "react";
import {
  FaGraduationCap,
  FaLaptopCode,
  FaRocket,
  FaCalendarAlt,
  FaUserTie,
} from "react-icons/fa";

const AboutMe: React.FC = () => {
  return (
    <div id="about" className="max-w-5xl mx-auto py-16 px-6">
      {/* Heading */}
      <h2 className="text-4xl font-bold mb-10 text-center">About Me</h2>

      {/* Profile Section */}
      <div className="flex flex-col md:flex-row items-center gap-10 mb-16">
        <img
          src="/images/Ansar1.png"
          alt="Ansar"
          className="w-60 h-60 md:w-64 md:h-64 rounded-full object-cover shadow-xl ring-4 ring-blue-300 transition-transform duration-300 hover:scale-105"
        />

        <div className="text-lg space-y-4">
          <p className="flex items-center gap-3">
            <FaGraduationCap className="text-blue-600" />
            <strong>Education:</strong> B.Tech in Computer Science & Engineering
            (Oct 2021 – May 2025)
          </p>
          <p className="flex items-center gap-3">
            <FaLaptopCode className="text-green-600" />
            <strong>Internship:</strong> Software Developer Intern at XWorkz,
            Bengaluru (Feb 2025 – Present)
          </p>
          <p className="flex items-center gap-3">
            <FaRocket className="text-purple-600" />
            <strong>Career Goal:</strong> To land a full-time software
            engineering role and build impactful tech products.
          </p>
          <p className="text-gray-600 mt-2">
            I'm passionate about full-stack development, problem-solving, and
            AI/ML. I enjoy collaborating on projects and continuously learning
            to stay ahead in the tech world.
          </p>
        </div>
      </div>

      {/* Timeline */}
      <div className="relative border-l-4 border-blue-500 pl-6 space-y-10">
        <div className="relative">
          <div className="absolute left-[-0.85rem] top-1 w-4 h-4 bg-blue-600 rounded-full"></div>
          <p className="text-sm text-gray-500 flex items-center gap-2">
            <FaCalendarAlt /> Oct 2021 – May 2025
          </p>
          <h4 className="text-xl font-semibold">B.Tech in Computer Science</h4>
          <p className="text-gray-700">
            Acquired strong foundational knowledge in data structures,
            algorithms, web technologies, and software engineering principles.
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-[-0.85rem] top-1 w-4 h-4 bg-green-600 rounded-full"></div>
          <p className="text-sm text-gray-500 flex items-center gap-2">
            <FaCalendarAlt /> Feb 2025 – Present
          </p>
          <h4 className="text-xl font-semibold">
            Software Developer Intern @ XWorkz, Bengaluru
          </h4>
          <p className="text-gray-700">
            Working on real-time Java and web-based projects with Spring Boot,
            JavaScript, MySQL, and API development practices.
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-[-0.85rem] top-1 w-4 h-4 bg-purple-600 rounded-full"></div>
          <p className="text-sm text-gray-500 flex items-center gap-2">
            <FaCalendarAlt /> 2025 →
          </p>
          <h4 className="text-xl font-semibold">Landing My First Tech Job</h4>
          <p className="text-gray-700">
            Preparing for tech roles with focus on DSA, system design, and
            full-stack development to kickstart my professional journey.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
