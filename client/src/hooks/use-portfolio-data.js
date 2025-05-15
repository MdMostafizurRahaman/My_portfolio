import { useState } from 'react';
import emailjs from 'emailjs-com';

// Static portfolio data
const portfolioData = {
  projects: [
    {
      id: 1,
      title: "Personal Portfolio Website",
      description: "A dynamic, colorful React JavaScript portfolio website showcasing education, projects, skills, and achievements.",
      technologies: ["React", "JavaScript", "Tailwind CSS", "Vite"],
      image_url: "https://picsum.photos/id/225/800/600",
      github_url: "https://github.com/MdMostafizurRahaman/portfolio",
      live_url: "https://mostafizur.com"
    },
    {
      id: 2,
      title: "Task Management Application",
      description: "A full-stack application for managing tasks and projects with a clean UI and real-time updates.",
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      image_url: "https://picsum.photos/id/24/800/600",
      github_url: "https://github.com/MdMostafizurRahaman/task-manager",
      live_url: "https://task-manager-app.com"
    },
    {
      id: 3,
      title: "E-commerce Platform",
      description: "A responsive e-commerce platform with product search, filtering, cart management, and payment processing.",
      technologies: ["React", "Redux", "Node.js", "MongoDB"],
      image_url: "https://picsum.photos/id/26/800/600",
      github_url: "https://github.com/MdMostafizurRahaman/ecommerce",
      live_url: "https://ecommerce-platform.com"
    }
  ],
  experiences: [
    {
      id: 1,
      title: "Software Engineering Intern",
      company: "Ithra, Aramco",
      location: "Dhahran, Saudi Arabia",
      start_date: "February 2023",
      end_date: null,
      current: true,
      description: [
        "Developing web applications using React and Node.js",
        "Collaborating with cross-functional teams to deliver high-quality solutions",
        "Participating in code reviews and implementing best practices",
        "Working on API integrations and database management"
      ]
    },
    {
      id: 2,
      title: "Web Development Intern",
      company: "Tech Solutions Ltd",
      location: "Dhaka, Bangladesh",
      start_date: "June 2022",
      end_date: "December 2022",
      current: false,
      description: [
        "Developed responsive front-end interfaces using HTML, CSS, and JavaScript",
        "Assisted in building RESTful APIs using Node.js and Express",
        "Implemented database designs using MongoDB",
        "Collaborated with the design team to implement UI/UX improvements"
      ]
    },
    {
      id: 3,
      title: "Research Assistant",
      company: "Institute of Information Technology, University of Dhaka",
      location: "Dhaka, Bangladesh",
      start_date: "January 2022",
      end_date: "May 2022",
      current: false,
      description: [
        "Conducted research on machine learning algorithms for natural language processing",
        "Developed prototypes for testing research hypotheses",
        "Collaborated with other researchers to analyze and interpret data",
        "Presented findings at departmental seminars and conferences"
      ]
    }
  ],
  skills: [
    { id: 1, name: "JavaScript", level: 90, category: "Programming Languages" },
    { id: 2, name: "React", level: 85, category: "Frontend" },
    { id: 3, name: "Node.js", level: 80, category: "Backend" },
    { id: 4, name: "HTML/CSS", level: 95, category: "Frontend" },
    { id: 5, name: "MongoDB", level: 75, category: "Database" },
    { id: 6, name: "Express", level: 80, category: "Backend" },
    { id: 7, name: "TypeScript", level: 70, category: "Programming Languages" },
    { id: 8, name: "SQL", level: 75, category: "Database" },
    { id: 9, name: "Git", level: 85, category: "Tools" },
    { id: 10, name: "Docker", level: 65, category: "DevOps" },
    { id: 11, name: "AWS", level: 60, category: "Cloud" },
    { id: 12, name: "Python", level: 75, category: "Programming Languages" },
    { id: 13, name: "UI/UX Design", level: 70, category: "Design" },
    { id: 14, name: "Tailwind CSS", level: 85, category: "Frontend" },
    { id: 15, name: "Redux", level: 75, category: "Frontend" }
  ]
};

// Hook for getting static portfolio data
export function usePortfolioData() {
  return {
    projects: portfolioData.projects,
    experiences: portfolioData.experiences,
    skills: portfolioData.skills,
    isLoading: false,
    isError: false,
    errorMessage: null,
    refetch: () => {}
  };
}

// Hook for submitting contact form data using EmailJS
export function useContactForm() {
  const [status, setStatus] = useState({
    isSubmitting: false,
    isSuccess: false,
    isError: false,
    error: null
  });

  const submitContact = async (data) => {
    setStatus({ isSubmitting: true, isSuccess: false, isError: false, error: null });
    
    try {
      // You'll need to set up EmailJS with your service ID, template ID, and user ID
      // For example: https://www.emailjs.com/docs/examples/reactjs/
      const templateParams = {
        from_name: data.name,
        reply_to: data.email,
        message: data.message
      };
      
      await emailjs.send(
        'service_id',  // Replace with your EmailJS service ID
        'template_id', // Replace with your EmailJS template ID
        templateParams,
        'user_id'      // Replace with your EmailJS user ID
      );
      
      setStatus({ isSubmitting: false, isSuccess: true, isError: false, error: null });
    } catch (error) {
      console.error('Failed to send email:', error);
      setStatus({ 
        isSubmitting: false, 
        isSuccess: false, 
        isError: true, 
        error: "Failed to send message. Please try again or contact directly via email."
      });
    }
  };

  const reset = () => {
    setStatus({ isSubmitting: false, isSuccess: false, isError: false, error: null });
  };

  return {
    submitContact,
    isSubmitting: status.isSubmitting,
    isSuccess: status.isSuccess,
    isError: status.isError,
    error: status.error,
    reset
  };
}