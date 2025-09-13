import React from "react";
import { scrollToElement } from "@/lib/utils.js";

export default function Footer() {
  const year = new Date().getFullYear();

  const navigationLinks = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Skills", id: "skills" },
    { name: "Projects", id: "projects" },
    { name: "Contact", id: "contact" },
  ];

  const socialLinks = [
    { icon: "fab fa-github", url: "https://github.com/MdMostafizurRahaman", label: "GitHub" },
    { icon: "fab fa-linkedin", url: "https://linkedin.com/in/md-mostafizur-rahaman", label: "LinkedIn" },
    { icon: "fas fa-envelope", url: "mailto:bsse1320@iit.du.ac.bd", label: "Email" },
  ];

  return (
    <footer className="bg-dark text-white py-12">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="text-2xl font-bold font-poppins mb-6">Md Mostafizur Rahaman</h2>

          <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-8">
            {navigationLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className="hover:text-primary transition-colors"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToElement(link.id);
                }}
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="flex justify-center space-x-6 mb-8">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary transition-colors"
                aria-label={link.label}
              >
                <i className={`${link.icon} text-xl`}></i>
              </a>
            ))}
          </div>

          <p className="text-gray-400">
            &copy; {year} Md Mostafizur Rahaman. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}