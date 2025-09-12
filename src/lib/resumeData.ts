export interface ResumeData {
  personalInfo: {
    name: string;
    title: string;
    email: string;
    phone: string;
    location: string;
    summary: string;
  };
  experience: Array<{
    company: string;
    position: string;
    location: string;
    duration: string;
    description: string;
    projects: string[];
    technologies: string[];
    databases: string[];
  }>;
  projects: Array<{
    title: string;
    type: string;
    duration?: string;
    description: string;
    technologies: string[];
    database: string;
    features: string[];
  }>;
  skills: {
    technical: string[];
    soft: string[];
  };
  education: Array<{
    institution: string;
    degree: string;
    duration: string;
  }>;
  languages: Array<{
    name: string;
    level: string;
  }>;
}

export const resumeData: ResumeData = {
  personalInfo: {
    name: "Carrie A. Yu",
    title: "Software Developer & Team Leader",
    email: "eirracyu12@gmail.com",
    phone: "+63 977 132 4804",
    location: "Fatima, Ubay, Bohol, Philippines",
    summary: "Looking for a challenging role in a reputable organization to utilize my technical, database, and management skills for the growth of the organization as well as to enhance my knowledge about new and emerging trends in the IT sector. Willing to work at any position. Flexibility and open minded is my thing."
  },
  experience: [
    {
      company: "Hipe Japan",
      position: "Software Developer & Team Leader",
      location: "FGU Center Ayala Business Park",
      duration: "April 2022 - Present",
      description: "Currently assigned as a team leader and developer for various projects. I delegate tasks and assignments to team members, guide them on project requirements, and maintain direct communication with clients. Responsible for planning project features and ensuring successful delivery.",
      projects: [
        "Attendance System",
        "Camera Mobile Application",
        "Growing Mobile Application",
        "Construction Management System",
        "Reservation Management System",
        "Sales Management System",
        "CMS Migration",
        "Learning Management System"
      ],
      technologies: [
        "React.js", "React Native", "Java", "Spring Boot", "MyBatis",
        "Laravel", "Android Studio", "Swift", "AWS Services",
        "Salesforce", "OpenAI", "Python", "Nuxt.js"
      ],
      databases: ["PostgreSQL", "MySQL"]
    },
    {
      company: "Ink Shared Solutions",
      position: "Web Developer",
      location: "6th floor JESA-ITC Bldg.",
      duration: "September 2020 - September 2021",
      description: "Focused on web designing using React.js and created new layouts for author's books. Worked with microservices, React TypeScript, Docker integration, and learned AWS cloud services through company training.",
      projects: ["Company Website"],
      technologies: ["React.js", "React TypeScript", "JavaScript", "Docker", "AWS"],
      databases: ["PostgreSQL"]
    },
    {
      company: "Nerubia/Idearobin",
      position: "Software Engineer",
      location: "6th flr, Mabuhay Tower IT Park",
      duration: "December 2019 - July 2020",
      description: "Focused on web development, both front-end and back-end development.",
      projects: [],
      technologies: [],
      databases: []
    },
    {
      company: "Responsive Tech Solutions",
      position: "Full Stack Developer",
      location: "Fuente Osmeña",
      duration: "October 2018 - August 2019",
      description: "Developed web applications for both front-end and back-end. Also developed mobile apps using Android Studio. Primarily assigned to fixing bugs and adding features to web applications.",
      projects: ["MCWD System", "Inventory System"],
      technologies: ["PHP", "Java", "React"],
      databases: ["MySQL"]
    }
  ],
  projects: [
    {
      title: "EC Care Medical Laboratory System",
      type: "Laboratory Management System",
      duration: "May 2023 - April 2024",
      description: "Developed a comprehensive laboratory system that accepts patients' information, processes payments, updates inventory, and prints laboratory results. This ongoing project demonstrates full-stack development capabilities.",
      technologies: ["React.js", "React Native", "Node.js", "Express.js", "Docker", "AWS (EC2)", "Nginx"],
      database: "MySQL",
      features: [
        "Patient Information Management",
        "Payment Processing",
        "Inventory Management",
        "Laboratory Results Generation",
        "Multi-platform Support"
      ]
    },
    {
      title: "Hotel Management System",
      type: "Hotel Reservation System",
      duration: "January 2023 - March 2023",
      description: "Developed an online hotel reservation system that accepts reservations from multiple sources including booking.com, trip.com, and agoda.com. Created from scratch with complete project management approach.",
      technologies: ["Laravel", "PHP", "HTML", "CSS", "JavaScript"],
      database: "MySQL",
      features: [
        "Multi-source Reservation Integration",
        "Booking Management",
        "Payment Processing",
        "Admin Dashboard",
        "Real-time Availability"
      ]
    },
    {
      title: "Mobile Catering Service",
      type: "Thesis Project",
      duration: "April 2022 - May 2022",
      description: "Developed a mobile catering service application for users who need catering services. This was a solo thesis project demonstrating mobile development skills and full-stack implementation.",
      technologies: ["React Native", "JavaScript", "Node.js", "Express.js", "Axios"],
      database: "MySQL",
      features: [
        "Service Booking",
        "Menu Management",
        "Payment Integration",
        "User Authentication",
        "Order Tracking"
      ]
    },
    {
      title: "E-commerce Website",
      type: "Thesis Project",
      duration: "August 2022 - August 2022",
      description: "Developed an online e-commerce website for stock animals. Created comprehensive sales reports and admin dashboard for sales management and order management.",
      technologies: ["React.js", "JavaScript", "Node.js", "Express.js", "Axios"],
      database: "MySQL",
      features: [
        "Product Catalog",
        "Shopping Cart",
        "Sales Reports",
        "Admin Dashboard",
        "Order Management"
      ]
    }
  ],
  skills: {
    technical: [
      "React.js", "React Native", "JavaScript", "TypeScript", "HTML/CSS",
      "Java", "Spring Boot", "Node.js", "Express.js", "PHP", "Laravel",
      "Android Studio", "Swift", "AWS Services", "Docker", "PostgreSQL",
      "MySQL", "MyBatis", "Nuxt.js", "Python", "Salesforce", "OpenAI"
    ],
    soft: [
      "Team Leadership", "Communication Skills", "Project Management",
      "Problem Solving", "Time Management", "Adaptability", "Team Player",
      "Stress Management", "Planning and Organizational Skills",
      "Patience and Positive Attitude", "Active Listening", "Dependability",
      "Open minded", "Can work under pressure"
    ]
  },
  education: [
    {
      institution: "University of Cebu",
      degree: "Bachelor of Science in Information Technology",
      duration: "June 2015 - October 2019"
    },
    {
      institution: "Ubay National Science High School",
      degree: "High School Diploma",
      duration: "June 2011 - June 2015"
    }
  ],
  languages: [
    { name: "English", level: "Fluent" },
    { name: "Tagalog", level: "Native" },
    { name: "Cebuano", level: "Native" }
  ]
};
