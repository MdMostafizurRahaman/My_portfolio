// Static data for Md Mostafizur Rahaman's portfolio
export const personalInfo = {
  name: "Md Mostafizur Rahaman",
  title: "Software Engineer",
  email: "bsse1320@iit.du.ac.bd",
  phone: "+8801517809545",
  location: "Dhaka, Bangladesh",
  github: "MdMostafizurRahaman",
  linkedin: "Md. Mostafizur Rahaman",
  about: "Software Engineering graduate from University of Dhaka with experience in full-stack web development, competitive programming, and AI. Currently working as an ICT and Database Management Associate at the Student Promotion & Support Unit, University of Dhaka.",
  profileImage: "/img/profile.jpg"
};

export const education = [
  {
    id: 1,
    institution: "University of Dhaka",
    degree: "BSc in Software Engineering",
    duration: "2020 - 2024",
    location: "Dr. Muhammad Shahidullah Hall, University of Dhaka"
  },
  {
    id: 2,
    institution: "Chuadanga Govt' College",
    degree: "Higher Secondary Certificate (HSC)",
    duration: "2017 - 2019",
    gpa: "5.00/5.00",
    location: "Chuadanga"
  }
];

export const experience = [
  {
    id: 1,
    role: "ICT and Database Management Associate",
    company: "Student Promotion & Support Unit, University of Dhaka",
    duration: "May 2024 - December 2024",
    description: "Collaborated with a team to offer part-time placement services, talent acquisition, and skill development programs for students. Optimized ICT and database management systems to enhance service delivery and create more opportunities for students.",
    skills: ["Database Management", "ICT Systems", "Talent Acquisition"]
  },
  {
    id: 2,
    role: "Internship at Ithra, Aramco",
    company: "Ithra, Aramco",
    duration: "2023",
    description: "Participated in software development and engineering projects, gaining practical industry experience at Aramco's Ithra innovation center.",
    skills: ["Software Development", "Engineering", "Industry Projects"]
  }
];

export const projects = [
  {
    id: 1,
    title: "Gomoku Game AI",
    description: "Developed a 10x10 Gomoku game with AI versus player functionality. The AI makes optimal moves, considering winning conditions and preventing overline situations. Turn-based gameplay allows the player to compete against the AI.",
    technologies: ["React.js"],
    githubLink: "https://github.com/MdMostafizurRahaman/Gomoku-AI",
    liveLink: null,
    image: null
  },
  {
    id: 2,
    title: "Stack Overflow Clone",
    description: "Built a MERN-based app with user registration, login, post management, and JWT authentication. Added notification cleanup and MinIO for code snippet storage, transitioning to a distributed setup.",
    technologies: ["React.js", "Node.js", "MongoDB", "Express.js"],
    githubLink: "https://github.com/MdMostafizurRahaman/stack-overflow",
    liveLink: null,
    image: null
  },
  {
    id: 3,
    title: "IPOS - Internship Placement System",
    description: "Developed a web application to streamline the internship placement process for BSSE 4th-year students, with company listings and student applications. Designed a RESTful backend for managing CVs, skillsets, CGPA, and interview allocations, along with email notifications and formal letter generation for HR.",
    technologies: ["React.js", "Node.js", "MongoDB", "Express.js"],
    githubLink: "https://github.com/MdMostafizurRahaman/IPOS-SPL-ll",
    liveLink: null,
    image: null
  },
  {
    id: 4,
    title: "Chat Server",
    description: "Developed a mini messenger app with user registration, secure password encryption, and login system with retry limits. Enabled user connectivity for individual and group chats, and ensured data security by encrypting all transmitted data with AES.",
    technologies: ["C++"],
    githubLink: "https://github.com/MdMostafizurRahaman/Chat-server-SPL1",
    liveLink: null,
    image: null
  }
];

export const skills = [
  {
    id: 1,
    category: "Programming Languages",
    items: ["C", "C++", "JavaScript", "Java"]
  },
  {
    id: 2,
    category: "Web Development",
    items: ["React", "Node.js", "Express.js", "HTML", "CSS"]
  },
  {
    id: 3,
    category: "Database",
    items: ["MongoDB", "SQLite3"]
  },
  {
    id: 4,
    category: "Tools & Technologies",
    items: ["Git", "GitHub", "Kali Linux", "WireShark"]
  }
];

export const achievements = [
  {
    id: 1,
    title: "District Champion",
    description: "Creative Talent Hunt Competition (Math & Computer)",
    year: null
  },
  {
    id: 2,
    title: "National Champion",
    description: "Bangladesh Red Crescent Society (Essay Writing)",
    year: null
  },
  {
    id: 3,
    title: "Competitive Programming",
    description: "Participated in 50+ programming contests on platforms like CodeForces, LeetCode, HackerRank, and CodeChef. Solved over 600 problems across various platforms.",
    year: null
  }
];