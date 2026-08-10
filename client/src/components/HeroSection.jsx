import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import { scrollToElement } from "../lib/utils";
import { personalInfo } from "../data/portfolio-data.js";

const highlights = ["Full-stack products", "AI-powered systems", "Cloud deployment", "Research-driven engineering"];

const quickStats = [
  { label: "Experience", value: "3+ years" },
  { label: "Projects", value: "7+ shipped" },
  { label: "Contests", value: "50+" },
  { label: "Problem Solves", value: "600+" },
];

export default function HeroSection() {
  return (
    <section id="home" className="relative overflow-hidden min-h-screen px-4 py-24 sm:px-6 lg:px-8">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,_rgba(168,85,247,0.18),_transparent_32%),radial-gradient(circle_at_85%_15%,_rgba(59,130,246,0.16),_transparent_28%),linear-gradient(135deg,_rgba(250,245,255,0.95),_rgba(239,246,255,0.96))] dark:bg-[radial-gradient(circle_at_top_left,_rgba(147,51,234,0.22),_transparent_30%),radial-gradient(circle_at_80%_10%,_rgba(59,130,246,0.18),_transparent_25%),linear-gradient(135deg,_rgba(15,23,42,0.98),_rgba(30,41,59,0.95))]" />
      <div className="absolute left-[-8rem] top-[-6rem] -z-10 h-64 w-64 rounded-full bg-purple-400/20 blur-3xl" />
      <div className="absolute bottom-[-4rem] right-[-4rem] -z-10 h-72 w-72 rounded-full bg-blue-400/20 blur-3xl" />

      <div className="container mx-auto flex min-h-[calc(100vh-6rem)] items-center">
        <div className="grid w-full items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <div className="mb-6 inline-flex items-center rounded-full border border-purple-200/80 bg-white/70 px-4 py-2 text-sm font-medium text-purple-700 shadow-sm backdrop-blur dark:border-purple-900/40 dark:bg-slate-900/60 dark:text-purple-300">
              <span className="mr-2 h-2.5 w-2.5 rounded-full bg-emerald-500" />
              Available for software engineering and AI product roles
            </div>

            <h1 className="text-4xl font-black tracking-tight text-slate-900 sm:text-5xl lg:text-6xl dark:text-white">
              {personalInfo.name}
            </h1>

            <p className="mt-4 text-xl font-semibold text-slate-700 sm:text-2xl dark:text-slate-300">
              {personalInfo.title}
            </p>

            <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-400">
              {personalInfo.about}
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {highlights.map((item) => (
                <span key={item} className="rounded-full border border-slate-200 bg-white/70 px-3 py-1.5 text-sm font-medium text-slate-700 shadow-sm dark:border-slate-700 dark:bg-slate-800/70 dark:text-slate-300">
                  {item}
                </span>
              ))}
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <button
                onClick={() => scrollToElement("contact")}
                className="rounded-full bg-gradient-to-r from-purple-600 to-blue-500 px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-purple-500/20 transition hover:-translate-y-0.5"
              >
                Contact Me
              </button>
              <button
                onClick={() => scrollToElement("projects")}
                className="rounded-full border border-slate-300 bg-white/80 px-7 py-3 text-sm font-semibold text-slate-700 transition hover:-translate-y-0.5 hover:border-purple-300 hover:text-purple-600 dark:border-slate-700 dark:bg-slate-900/70 dark:text-slate-200"
              >
                Explore Projects
              </button>
            </div>

            <div className="mt-8 flex items-center gap-4">
              <a href={`https://github.com/${personalInfo.github}`} target="_blank" rel="noopener noreferrer" className="text-2xl text-slate-600 transition hover:text-purple-600 dark:text-slate-300 dark:hover:text-purple-400" title="GitHub">
                <Github className="h-6 w-6" />
              </a>
              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="text-2xl text-slate-600 transition hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400" title="LinkedIn">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href={`mailto:${personalInfo.email}`} className="text-2xl text-slate-600 transition hover:text-purple-600 dark:text-slate-300 dark:hover:text-purple-400" title="Email">
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mx-auto w-full max-w-lg"
          >
            <div className="rounded-[2rem] border border-white/70 bg-white/70 p-4 shadow-[0_30px_80px_rgba(15,23,42,0.12)] backdrop-blur-xl dark:border-slate-700/80 dark:bg-slate-900/70">
              <div className="overflow-hidden rounded-[1.5rem] border border-slate-200 bg-gradient-to-br from-purple-600 via-violet-600 to-blue-500 p-1 dark:border-slate-700">
                <div className="rounded-[calc(1.5rem-1px)] bg-white p-3 dark:bg-slate-900">
                  <img src={personalInfo.profileImage} alt={personalInfo.name} className="h-[360px] w-full rounded-[1.25rem] object-cover object-top" />
                </div>
              </div>

              <div className="mt-5 grid grid-cols-2 gap-3">
                {quickStats.map((stat) => (
                  <div key={stat.label} className="rounded-2xl border border-slate-200 bg-slate-50/80 p-3 text-center dark:border-slate-700 dark:bg-slate-800/70">
                    <p className="text-lg font-semibold text-slate-900 dark:text-white">{stat.value}</p>
                    <p className="text-sm text-slate-600 dark:text-slate-400">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <button onClick={() => scrollToElement("about")} className="flex flex-col items-center text-sm font-medium text-slate-600 transition hover:text-purple-600 dark:text-slate-400 dark:hover:text-purple-400">
          <span className="mb-2 text-2xl">↓</span>
          <span>Scroll Down</span>
        </button>
      </div>
    </section>
  );
}
