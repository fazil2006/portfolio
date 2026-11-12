export const personalInfo = {
  name: "Fazil A R",
  role: "Aspiring Full-Stack Developer",
  status: "Open to Software Roles & Internships",
  bio: "Motivated Computer Science student specializing in modern full-stack web development and data-driven technologies. Dedicated to architecting responsive, scalable applications with clean code, modern UX principles, and robust performance.",
  location: "Erode, Tamil Nadu, India",
  phone: "+91 7639993570",
  email: "730223104017@alameen.ac.in",
  linkedin: "https://linkedin.com",
  photo: "fazil.jpg",
  stats: [
    { label: "Engineering Track", value: "2023 - 2027", detail: "B.E. Computer Science" },
    { label: "Leadership", value: "President", detail: "Student Developer Club" },
    { label: "Featured Projects", value: "Production-Grade", detail: "React & Full-Stack" },
  ]
};

export const educationData = [
  {
    id: "be-cse",
    degree: "Bachelor of Engineering in Computer Science & Engineering",
    period: "2023 - 2027",
    institution: "Al-Ameen Engineering College",
    location: "Erode, Tamil Nadu",
    featured: true,
    description: "Focusing on Data Structures & Algorithms, Object-Oriented Programming, Full-Stack Architecture, Database Management Systems, and Computer Networks. Serving as the President of the Student Developer Club to foster collaborative tech culture and peer learning.",
    highlights: ["President, Student Developer Club", "DSA & Full-Stack Focus", "Active Technical Presenter"]
  },
  {
    id: "hsc",
    degree: "Higher Secondary Certificate (HSC - 12th Grade)",
    period: "Completed",
    institution: "Government Higher Secondary School",
    location: "Erode, Tamil Nadu",
    featured: false,
    description: "Concentrated on Mathematics, Physics, Chemistry, and Computer Science foundations, establishing a rigorous analytical foundation for engineering.",
    highlights: ["Mathematics & CS Core", "Strong Analytical Base"]
  },
  {
    id: "sslc",
    degree: "Secondary School Leaving Certificate (SSLC - 10th Grade)",
    period: "Completed",
    institution: "Grace Matric Higher Secondary School",
    location: "Erode, Tamil Nadu",
    featured: false,
    description: "Solid academic track record with distinction in Science and Mathematics, paving the way for advanced technical and computing studies.",
    highlights: ["Academic Distinction", "Core Sciences Foundation"]
  }
];

export const projectsData = [
  {
    id: "foodbridge",
    title: "FoodBridge",
    category: "Full-Stack",
    tag: "Social Impact & Web Platform",
    summary: "A community-driven surplus food redistribution web platform that connects local grocery stores, restaurants, and catered venues with verified humanitarian NGOs.",
    features: [
      "Enables commercial stores to post real-time surplus inventory with scheduled pickup timeframes.",
      "Automated location-based notifications connecting local NGOs to claim perishable food rapidly.",
      "Built-in impact metrics dashboard tracking kilograms of food rescued from landfills."
    ],
    tech: ["React.js", "JavaScript (ES6+)", "Node.js", "REST APIs", "Modern CSS"],
    status: "Featured Project"
  },
  {
    id: "taskflow",
    title: "Task Flow",
    category: "Web Apps",
    tag: "Productivity & Auth Architecture",
    summary: "A premium productivity and workflow management web application engineered with secure user authentication, interactive states, and priority-driven task lifecycles.",
    features: [
      "Secure role-ready authentication system with session management and user isolation.",
      "Interactive task boards with status filtering, deadline alerts, and priority scoring.",
      "Minimalist high-efficiency interface crafted with fluid micro-interactions and persistence."
    ],
    tech: ["React.js", "User Auth", "State Management", "Clean Architecture", "Responsive UI"],
    status: "Production Architecture"
  },
  {
    id: "portfolio-app",
    title: "Modern Interactive Portfolio",
    category: "Full-Stack",
    tag: "React 18 & Dark Blue UI",
    summary: "A component-driven interactive developer portfolio featuring fast modular architecture, responsive layouts, clipboard toast alerts, and sleek dark blue aesthetic design.",
    features: [
      "Modular React component structure with real-time responsive navigation.",
      "Interactive clipboard management with toast feedback and instant mailer launch.",
      "Optimized asset loading, deep dark blue design tokens, and smooth scroll anchors."
    ],
    tech: ["React 18", "Dark Blue Theme", "Lucide Icons", "CSS Tokens"],
    status: "Live Application"
  }
];

export const skillsData = [
  {
    category: "Frontend Engineering",
    icon: "code",
    skills: [
      { name: "React.js", level: "Advanced" },
      { name: "JavaScript (ES6+)", level: "Advanced" },
      { name: "HTML5 & Semantic Web", level: "Expert" },
      { name: "CSS3 & Modern Layouts", level: "Expert" },
      { name: "Responsive Web Design", level: "Expert" },
      { name: "UI/UX & Accessibility", level: "Proficient" }
    ]
  },
  {
    category: "Core Languages & Logic",
    icon: "cpu",
    skills: [
      { name: "Java", level: "Proficient" },
      { name: "C", level: "Proficient" },
      { name: "C++", level: "Proficient" },
      { name: "Data Structures", level: "Advanced" },
      { name: "Problem Solving", level: "Advanced" },
      { name: "Algorithm Analysis", level: "Proficient" }
    ]
  },
  {
    category: "Tools & Creative Media",
    icon: "wrench",
    skills: [
      { name: "Git & GitHub", level: "Proficient" },
      { name: "Video Editing", level: "Experienced" },
      { name: "Linux Environment", level: "Proficient" },
      { name: "VS Code & Tooling", level: "Advanced" },
      { name: "CLI & Shell Scripting", level: "Proficient" },
      { name: "Technical Presentation", level: "Advanced" }
    ]
  },
  {
    category: "Languages & Leadership",
    icon: "globe",
    skills: [
      { name: "Tamil", level: "Native" },
      { name: "English", level: "Professional" },
      { name: "Urdu", level: "Proficient" },
      { name: "Team Leadership", level: "Club President" },
      { name: "Collaborative Mindset", level: "Core Strength" },
      { name: "Peer Mentorship", level: "Active" }
    ]
  }
];

export const achievementsData = [
  {
    id: "debugging",
    title: "Code Debugging Competition",
    issuer: "Inter-College Technical Symposium",
    award: "Award Winner",
    type: "trophy",
    color: "blue",
    description: "Recognized in high-speed code debugging and algorithmic troubleshooting, isolating and fixing syntax, logical, and runtime anomalies under tight time limits."
  },
  {
    id: "galaxy",
    title: "GALAXY 2K26 Paper Presentation",
    issuer: "National Technical Symposium",
    award: "National Symposium",
    type: "paper",
    color: "blue",
    description: "Authored and presented a technical research paper on emerging computer science paradigms, evaluating system performance and modern software architectures."
  },
  {
    id: "club-president",
    title: "Student Developer Club President",
    issuer: "Al-Ameen Engineering College",
    award: "Leadership Role",
    type: "leadership",
    color: "blue",
    description: "Spearheading peer learning sessions, coding bootcamps, and hackathons; fostering an active campus engineering community focused on web development and open source."
  },
  {
    id: "udemy",
    title: "Udemy Professional Certifications",
    issuer: "Udemy Academy",
    award: "Professional Series",
    type: "certificate",
    color: "blue",
    description: "Successfully completed comprehensive courses in ChatGPT & AI Prompting Concepts, GitHub Version Control Workflows, and Linux Command-Line Fundamentals."
  }
];

