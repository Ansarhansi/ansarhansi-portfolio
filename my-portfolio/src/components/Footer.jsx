import React from "react";

const Footer = () => (
  <footer className="bg-white border-t py-4 text-center text-gray-500">
    © {new Date().getFullYear()} Mohammed Ansar Hansi. All rights reserved.
    <div className="mt-2">
      <a href="#home" className="mx-2 hover:text-blue-600">
        Home
      </a>
      <a href="#about" className="mx-2 hover:text-blue-600">
        About
      </a>
      <a href="#projects" className="mx-2 hover:text-blue-600">
        Projects
      </a>
      <a href="#contact" className="mx-2 hover:text-blue-600">
        Contact
      </a>
    </div>
  </footer>
);

export default Footer;
