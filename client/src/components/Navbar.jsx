import { useState, useEffect } from "react";
import { Link } from "wouter";
import { FiSun, FiMoon, FiMenu, FiX } from "react-icons/fi";
import { personalInfo } from "../data/portfolio-data.js";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [activeSection, setActiveSection] = useState("home");
  const [theme, setTheme] = useState("light");

  const navigationItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "experience", label: "Experience" },
    { id: "github", label: "GitHub" },
    { id: "contact", label: "Contact" },
  ];

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
    document.documentElement.classList.toggle("dark", savedTheme === "dark");
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);

      const sections = ["home", "about", "skills", "projects", "experience", "github", "contact"];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 110 && rect.bottom >= 110) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 90,
        behavior: "smooth",
      });
      setIsOpen(false);
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrollPosition > 20
            ? "border-b border-slate-200/80 bg-white/80 py-2 shadow-[0_10px_40px_rgba(15,23,42,0.08)] backdrop-blur-xl dark:border-slate-700/80 dark:bg-slate-900/80"
            : "bg-transparent py-4"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6">
          <nav className="flex items-center justify-between">
            <Link href="/">
              <span className="flex items-center gap-3 cursor-pointer">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-purple-600 to-blue-500 text-sm font-semibold text-white shadow-lg shadow-purple-500/20">
                  MR
                </span>
                <span className="text-lg font-semibold text-slate-900 dark:text-white">
                  {personalInfo.name.split(" ")[1] || "Mostafizur"}
                </span>
              </span>
            </Link>

            <div className="hidden lg:flex items-center gap-2 xl:gap-3">
              <ul className="flex items-center gap-2 rounded-full border border-slate-200/70 bg-white/70 px-2 py-2 shadow-sm backdrop-blur dark:border-slate-700/70 dark:bg-slate-800/70">
                {navigationItems.map((item) => (
                  <li key={item.id}>
                    <button
                      onClick={() => scrollToSection(item.id)}
                      className={`rounded-full px-3 py-2 text-sm font-medium transition-all ${
                        activeSection === item.id
                          ? "bg-gradient-to-r from-purple-600 to-blue-500 text-white shadow-md"
                          : "text-slate-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-700"
                      }`}
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>

              <button
                onClick={toggleTheme}
                className="ml-2 rounded-full border border-slate-200 bg-white p-2.5 text-slate-700 shadow-sm transition hover:border-purple-300 hover:text-purple-600 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200"
                aria-label="Toggle theme"
              >
                {theme === "light" ? <FiMoon size={18} /> : <FiSun size={18} />}
              </button>
            </div>

            <div className="flex items-center gap-3 lg:hidden">
              <button
                onClick={toggleTheme}
                className="rounded-full border border-slate-200 bg-white p-2.5 text-slate-700 shadow-sm transition hover:border-purple-300 hover:text-purple-600 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200"
                aria-label="Toggle theme"
              >
                {theme === "light" ? <FiMoon size={18} /> : <FiSun size={18} />}
              </button>

              <button
                onClick={() => setIsOpen(!isOpen)}
                className="rounded-full bg-gradient-to-r from-purple-600 to-blue-500 p-2.5 text-white shadow-lg shadow-purple-500/20"
                aria-label="Toggle menu"
              >
                {isOpen ? <FiX size={20} /> : <FiMenu size={20} />}
              </button>
            </div>
          </nav>
        </div>
      </header>

      {isOpen && (
        <div className="fixed inset-0 top-16 z-40 overflow-y-auto bg-white/95 pt-4 backdrop-blur dark:bg-slate-900/95 lg:hidden">
          <div className="container mx-auto space-y-2 px-4 py-6">
            {navigationItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`w-full rounded-2xl px-4 py-3 text-left text-base font-medium transition-all ${
                  activeSection === item.id
                    ? "bg-gradient-to-r from-purple-600 to-blue-500 text-white"
                    : "text-slate-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
