import React, { useState } from "react";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Resume", href: "#resume" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white shadow">
      <div className="max-w-6xl mx-auto px-4 flex justify-between items-center h-16">
        <a
          href="#home"
          className="flex items-center gap-2 text-xl font-bold text-blue-600"
        >
          <img
            src="/images/logo.png"
            alt="Logo"
            className="h-8 w-8 object-contain"
          />
          <span className="hidden md:block">MH</span>
        </a>
        <button
          className="md:hidden text-2xl"
          onClick={() => setOpen(!open)}
          aria-label="Toggle Menu"
        >
          ☰
        </button>
        <ul
          className={`md:flex gap-8 font-medium ${
            open ? "block" : "hidden"
          } absolute md:static bg-white left-0 w-full md:w-auto top-16 md:top-0 p-4 md:p-0`}
        >
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="block py-2 px-4 hover:text-blue-600 transition"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
