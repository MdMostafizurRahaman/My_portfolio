import Navbar from "../components/Navbar.jsx";
import HeroSection from "../components/HeroSection.jsx";
import AboutSection from "../components/AboutSection.jsx";
import SkillsSection from "../components/SkillsSection.jsx";
import ProjectsSection from "../components/ProjectsSection.jsx";
import ExperienceSection from "../components/ExperienceSection.jsx";
import GitHubSection from "../components/GitHubSection.jsx";
import ContactSection from "../components/ContactSection.jsx";
import Footer from "../components/Footer.jsx";
import { useScrollSpy } from "../hooks/use-scroll-spy.jsx";
import { usePortfolioData } from "../hooks/use-portfolio-data.js";
import { Alert, AlertDescription, AlertTitle } from "../components/ui/alert.jsx";
import { AlertCircle, Loader2 } from "lucide-react";

export default function Home() {
  const activeSection = useScrollSpy(["home", "about", "skills", "projects", "experience", "contact"], 100);
  const { projects, experiences, skills, isLoading, isError, errorMessage } = usePortfolioData();
  
  // Show loading state while fetching data
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="h-8 w-8 animate-spin text-primary mx-auto mb-4" />
          <p>Loading portfolio data...</p>
        </div>
      </div>
    );
  }
  
  // Show error state if there's an issue fetching data
  if (isError) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4">
        <Alert variant="destructive" className="max-w-lg">
          <AlertCircle className="h-5 w-5" />
          <AlertTitle>Error loading portfolio data</AlertTitle>
          <AlertDescription>
            {errorMessage || "There was an error loading the portfolio data. Please try again later."}
          </AlertDescription>
        </Alert>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar activeSection={activeSection} />
      <HeroSection />
      <AboutSection />
      <SkillsSection skills={skills} />
      <ProjectsSection projects={projects} />
      <ExperienceSection experiences={experiences} />
      <GitHubSection />
      <ContactSection />
      <Footer />
    </div>
  );
}