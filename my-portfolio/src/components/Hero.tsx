import React from "react";

const Hero: React.FC = () => (
  <div className="flex flex-col items-center justify-center min-h-[70vh] bg-gradient-to-br from-blue-50 to-white text-center px-4">
    <h1 className="text-4xl md:text-5xl font-bold mb-4">
      Hi, I’m Mohammed Ansar Hansi
    </h1>
    <h2 className="text-xl md:text-2xl text-blue-600 mb-2">
      Future-Ready CSE Graduate | Aspiring Software Engineer
    </h2>
    <p className="mb-6 text-lg text-gray-700">
      Passionate about building smart solutions with code.
    </p>
    <div className="flex gap-4 justify-center">
      <a
        href="#contact"
        className="bg-blue-600 text-white px-6 py-2 rounded shadow hover:bg-blue-700 transition"
      >
        Hire Me
      </a>
      <a
        href="https://drive.google.com/file/d/1DLOUPsjJ3_9HDXqBWz9rIXEVtOSftxuD/view?usp=sharing"
        className="border border-blue-600 text-blue-600 px-6 py-2 rounded hover:bg-blue-50 transition"
      >
        View Resume
      </a>
    </div>
  </div>
);

export default Hero;
