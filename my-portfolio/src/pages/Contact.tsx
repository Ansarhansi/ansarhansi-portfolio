import React, { useState } from "react";

const Contact: React.FC = () => {
  const [status, setStatus] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Thank you! Your message has been sent.");
  };

  return (
    <div className="max-w-2xl mx-auto py-16 px-4">
      <h2 className="text-3xl font-bold mb-6 text-center">Contact</h2>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <input
          type="text"
          required
          placeholder="Name"
          className="w-full border rounded px-3 py-2"
        />
        <input
          type="email"
          required
          placeholder="Email"
          className="w-full border rounded px-3 py-2"
        />
        <textarea
          required
          placeholder="Message"
          rows={5}
          className="w-full border rounded px-3 py-2"
        ></textarea>
        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
        >
          Send
        </button>
      </form>
      {status && <p className="mt-4 text-green-600">{status}</p>}
      <div className="mt-8 flex flex-col items-center gap-2">
        <a
          href="mailto:ansarhansi29@gmail.com"
          className="text-blue-600 hover:underline"
        >
          Email
        </a>
        <a
          href="https://github.com/Ansarhansi"
          className="text-blue-600 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/ansar-hansi/"
          className="text-blue-600 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
        <span className="text-gray-500">Location: Bangalore, Karnataka</span>
      </div>
    </div>
  );
};

export default Contact;
