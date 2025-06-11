import React from "react";

const Resume: React.FC = () => (
  <div className="max-w-2xl mx-auto py-16 px-4 text-center">
    <h2 className="text-3xl font-bold mb-6">Resume</h2>
    <div className="flex gap-4 justify-center">
      <a
        href="https://drive.google.com/file/d/1DLOUPsjJ3_9HDXqBWz9rIXEVtOSftxuD/view?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-blue-600 text-white px-6 py-2 rounded shadow hover:bg-blue-700 transition"
      >
        View Resume
      </a>
      <a
        href="https://drive.google.com/uc?export=download&id=1DLOUPsjJ3_9HDXqBWz9rIXEVtOSftxuD"
        className="border border-blue-600 text-blue-600 px-6 py-2 rounded hover:bg-blue-50 transition"
      >
        Download PDF
      </a>
    </div>
  </div>
);

export default Resume;
