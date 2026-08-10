// Static data for Md Mostafizur Rahaman's portfolio
export const personalInfo = {
  name: "Md Mostafizur Rahaman",
  title: "Software Engineer | AI/ML & Full-Stack Developer",
  email: "bsse1320@iit.du.ac.bd",
  phone: "+8801517809545",
  location: "Dhaka, Bangladesh",
  github: "MdMostafizurRahaman",
  linkedin: "https://www.linkedin.com/in/md-mostafizur-rahaman-332941252/",
  about: "Software Engineering student and developer from the University of Dhaka with hands-on experience building full-stack and AI-powered systems. I work across Python, JavaScript, Next.js, FastAPI, React, and cloud deployment, and I enjoy creating practical products that solve real-world problems.",
  profileImage: "/img/profile.jpg",
  resumeUrl: "/Mostafizur_resume/Mostafizur_resume.pdf"
};

export const education = [
  {
   id: 1,
   institution: "University of Dhaka",
   degree: "BSc in Software Engineering",
   duration: "January 2022 - January 2026",
   location: "Dr. Muhammad Shahidullah Hall, University of Dhaka"
  }
];

export const experience = [
  {
   id: 1,
   role: "Research Assistant",
   company: "Bangladesh Institute of Development Studies (BIDS)",
   duration: "May 2026 - June 2026",
   description: "Worked on a research project using satellite imagery to study the relationship between salinity-affected locations and the income of people living in those areas.",
   skills: ["Python", "Data Analysis", "Satellite Imagery"]
  },
  {
   id: 2,
   role: "Python & Microsoft Office Instructor",
   company: "Short Course, IIT, University of Dhaka",
   duration: "April 2026 - Present",
   description: "Delivered training on Python programming, Pandas-based data analysis, data visualization with Matplotlib, and Microsoft Office tools for practical productivity.",
   skills: ["Python", "Pandas", "Matplotlib", "Microsoft Office"]
  },
  {
   id: 3,
   role: "Software Developer",
   company: "The Royal Scientific Publications",
   duration: "2025 - Present",
   description: "Developed and maintained the Big Bang SMS Sender, a bulk messaging platform sending 1,500+ daily SMS to students and guardians, ensuring efficient and reliable communication.",
   skills: ["Backend Development", "Bulk Messaging", "Excel Integration"]
  },
  {
   id: 4,
   role: "Software Engineering Intern",
   company: "Aramco (SYNC Project, Ithra)",
   duration: "March 2025 - August 2025",
   description: "Built the Global Policy Tracker, a full AI-powered policy intelligence platform with global visualization, policy submission, approval workflows, and AI-assisted analytics.",
   skills: ["Next.js", "FastAPI", "AWS DynamoDB", "Render"]
  },
  {
   id: 5,
   role: "ICT & Database Management Associate",
   company: "SPSU, University of Dhaka",
   duration: "May 2024 - March 2025",
   description: "Managed and updated the SPSU student database and secure records, handled verification and troubleshooting, and provided ICT support for staff and students.",
   skills: ["Database Management", "ICT Support", "Data Verification"]
  },
  {
   id: 6,
   role: "Teaching & Content Development",
   company: "Udvash & Roots Edu",
   duration: "March 2022 - Present",
   description: "Created and reviewed academic question sets used by 40,000-50,000+ students in admission test preparation, helping ensure content accuracy and large-scale assessment quality.",
   skills: ["Content Development", "Assessment Design", "Academic Review"]
  }
];

export const projects = [
  {
   id: 1,
   title: "GitIntel",
   description: "Developed an autonomous software-repository analysis tool that computes 65 static metrics and uses multiple LLMs to independently validate metric outputs and generate benchmark-aligned datasets.",
   technologies: ["Python", "PyDriller", "GitPython", "Gemini API", "AWS Bedrock"],
   githubLink: "https://github.com/MdMostafizurRahaman/GitIntel.git",
   liveLink: null,
   image: null
  },
  {
   id: 2,
   title: "Policy Tracker",
   description: "Built a full AI-powered policy intelligence platform for managing and comparing policies across countries with an interactive dashboard, global visualization, real-time updates, and AI-assisted analytics.",
   technologies: ["Next.js", "FastAPI", "AWS DynamoDB", "ReactGlobe", "Render"],
   githubLink: "https://github.com/MdMostafizurRahaman/policy-tracker.git",
   liveLink: "https://policy-tracker-f.onrender.com",
   image: null
  },
  {
   id: 3,
   title: "PrescribeCorrect",
   description: "Created an AI-powered healthcare platform with OCR-based prescription analysis, report structuring, doctor and patient management, and real-time chat for clinical workflow support.",
   technologies: ["Spring Boot", "Next.js", "PostCSS", "Render"],
   githubLink: "https://github.com/MdMostafizurRahaman/PrescribeCorrect",
   liveLink: "https://prescribe-correct.vercel.app",
   image: null
  },
  {
   id: 4,
   title: "Stack OverFlow",
   description: "Built a MERN-based app with user registration, login, post management, and JWT authentication. Added notification cleanup and MinIO for code snippet storage.",
   technologies: ["React.js", "Node.js", "MongoDB", "Express.js"],
   githubLink: "https://github.com/MdMostafizurRahaman/stack_over_flow",
   liveLink: null,
   image: null
  },
  {
   id: 5,
   title: "IPOS",
   description: "Designed a portal for managing internship applications with company listings, skill-based filtering, CV uploads, automated emails, and HR letter generation for IIT students.",
   technologies: ["React.js", "Node.js", "MongoDB", "Express.js"],
   githubLink: "https://github.com/MdMostafizurRahaman/SPL-II/tree/main",
   liveLink: null,
   image: null
  },
  {
   id: 6,
   title: "Chat Server",
   description: "Implemented a secure chat system with AES encryption, login controls, and real-time group/individual messaging with retry-limited authentication and encrypted data transfer.",
   technologies: ["C++"],
   githubLink: "https://github.com/MdMostafizurRahaman/SPL1",
   liveLink: null,
   image: null
  },
  {
   id: 7,
   title: "Big Bang SMS Sender",
   description: "Developed and maintained a bulk messaging platform that sends 1,500+ daily SMS to students and guardians using Excel-based uploads.",
   technologies: ["Excel Integration", "SMS API", "Backend Development"],
   githubLink: null,
   liveLink: null,
   image: null
  }
];

export const skills = [
  {
   id: 1,
   category: "Programming Languages",
   items: ["Python", "C++", "C", "JavaScript", "Java"]
  },
  {
   id: 2,
   category: "Web & Backend",
   items: ["Next.js", "React", "Node.js", "Express.js", "FastAPI"]
  },
  {
   id: 3,
   category: "Data & AI",
   items: ["Pandas", "Matplotlib", "Gemini API", "AWS Bedrock"]
  },
  {
   id: 4,
   category: "Cloud & Databases",
   items: ["AWS", "MongoDB", "SQLite", "Render", "Vercel"]
  },
  {
   id: 5,
   category: "Tools & Systems",
   items: ["Git", "GitHub", "Docker", "PyDriller", "GitPython", "Linux", "Wireshark"]
  }
];

export const achievements = [
  {
   id: 1,
   title: "2nd Runner-Up",
   description: "Industrial Responsible AI Summit, MIST — PrescribeCorrect",
   year: 2026
  },
  {
   id: 2,
   title: "Top 10 Finalist",
   description: "Micro-Ops Hackathon, CUET CSE Fest",
   year: 2025
  },
  {
   id: 3,
   title: "AI Olympiad Bangladesh Finalist",
   description: "National-level AI Olympiad organized by DIPTI & Daffodil International University",
   year: 2025
  },
  {
   id: 4,
   title: "District Champion",
   description: "Creative Talent Hunt Competition (Math & Computer)",
   year: 2019
  },
  {
   id: 5,
   title: "National Champion",
   description: "Bangladesh Red Crescent Society (Essay Writing)",
   year: 2014
  },
  {
   id: 6,
   title: "Competitive Programming",
   description: "Participated in 50+ programming contests and solved 600+ problems across Codeforces, LeetCode, HackerRank, CodeChef, and GeeksforGeeks.",
   year: null
  }
];