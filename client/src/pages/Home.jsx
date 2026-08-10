import Navbar from "../components/Navbar.jsx";
import HeroSection from "../components/HeroSection.jsx";
import AboutSection from "../components/AboutSection.jsx";
import SkillsSection from "../components/SkillsSection.jsx";
import ProjectsSection from "../components/ProjectsSection.jsx";
import ExperienceSection from "../components/ExperienceSection.jsx";
import AchievementsSection from "../components/AchievementsSection.jsx";
import GitHubStatsSection from "../components/GitHubStatsSection.jsx";
import ContactSection from "../components/ContactSection.jsx";
import Footer from "../components/Footer.jsx";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <AchievementsSection />
        <GitHubStatsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}