export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  location?: string;
  description: string[];
  technologies: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  grade: string;
  description?: string;
}

export interface TechCategory {
  category: string;
  iconName: string;
  skills: {
    name: string;
    level?: string;
    highlight?: boolean;
  }[];
}

export interface HighlightStat {
  value: string;
  label: string;
  detail: string;
}

export const personalInfo = {
  name: 'PRACHI RAUT',
  role: 'Software Developer',
  specialties: ['Full-Stack', 'Mobile', 'AI/ML'],
  titleString: 'Software Developer | Full-Stack Developer | Mobile App Developer | AI/ML Enthusiast',
  heroHeadline: 'Building products across',
  heroSubheadline: 'Web • Mobile • AI',
  heroStatement: 'Software developer focused on building practical, scalable applications and intelligent solutions across full-stack web, mobile, and AI/ML.',
  aboutIntro: 'I am a Computer Engineering graduate with hands-on experience in software development across web, mobile, backend, and AI/ML.',
  aboutDetailed: 'I enjoy turning real-world problems into practical software products, from full-stack platforms and real-time applications to AI-powered systems. My development experience spans React, Node.js, Express, Python, FastAPI, Flask, Flutter, Firebase, Supabase, PostgreSQL, MongoDB, MySQL, REST APIs, and machine learning models.',
  aboutDsa: 'Beyond building applications, I actively practice Data Structures and Algorithms on LeetCode with 200+ problems solved, sharpening my computational thinking and algorithmic efficiency.',
  email: 'prachiraut711@gmail.com',
  github: 'https://github.com/prachiraut711',
  linkedin: 'https://www.linkedin.com/in/prachi-raut-a3635b287/',
  leetcode: 'https://leetcode.com/u/prachi-raut_711/',
};

export const highlightStats: HighlightStat[] = [
  {
    value: '8.66',
    label: 'CGPA',
    detail: 'B.E. in Computer Engineering'
  },
  {
    value: '200+',
    label: 'LeetCode Problems',
    detail: 'Algorithmic Problem Solving'
  },
  {
    value: '2',
    label: 'Software Internships',
    detail: 'React Native & Flutter Development'
  },
  {
    value: '9',
    label: 'Featured Projects',
    detail: 'Full-Stack, AI/ML & Mobile Products'
  }
];

export const experienceData: ExperienceItem[] = [
  {
    id: 'siliconmount',
    role: 'Software Developer Intern',
    company: 'SiliconMount Tech Services Pvt. Ltd.',
    period: 'March 2025 — August 2025',
    location: 'Pune, India',
    description: [
      'Developed a React Native mobile application focused on estimates, reports, and field data management.',
      'Built and integrated robust authentication flows including Sign Up, Login, OTP verification, and Forgot Password.',
      'Integrated backend APIs and developed intuitive, performant user dashboards for mobile operations.',
      'Collaborated using REST APIs, Swagger API documentation, Expo Go, and Git version control.'
    ],
    technologies: ['React Native', 'Expo Go', 'REST APIs', 'Swagger', 'GitHub', 'JavaScript']
  },
  {
    id: 'ram-associates',
    role: 'Flutter Developer Intern',
    company: 'Ram Associates',
    period: 'January 2025 — April 2025',
    location: 'Pune, India',
    description: [
      'Contributed to the development of a commercial Billing & Invoice Management application.',
      'Engineered responsive Flutter UI screens and reusable components adhering to design guidelines.',
      'Integrated Firebase Authentication to ensure reliable and secure user access management.',
      'Maintained version control workflows, feature branching, and code reviews with GitHub.'
    ],
    technologies: ['Flutter', 'Dart', 'Firebase', 'GitHub', 'Mobile UI']
  }
];

export const educationData: EducationItem[] = [
  {
    degree: 'B.E. in Computer Engineering',
    institution: 'Genba Sopanrao Moze College of Engineering',
    period: '2022 — 2026',
    grade: 'CGPA: 8.66',
    description: 'Comprehensive curriculum in Data Structures, Algorithms, Database Management Systems, Operating Systems, Machine Learning, and Computer Networks.'
  },
  {
    degree: 'Higher Secondary Certificate (HSC)',
    institution: 'MIT Junior College',
    period: '2020 — 2022',
    grade: '71.50%',
    description: 'Science stream with focus on Physics, Chemistry, Mathematics, and Computer Science.'
  },
  {
    degree: 'Secondary School Certificate (SSC)',
    institution: 'Shree Sant Dnyaneshwar Madhyamik Vidyalaya (MIT)',
    period: '2019 — 2020',
    grade: '90.80%',
    description: 'Foundational secondary school education with distinction in Mathematics and Science.'
  }
];

export const achievementsData = [
  {
    id: 'leetcode',
    type: 'Competitive Programming',
    title: '200+ LeetCode DSA Problems Solved',
    issuer: 'LeetCode Platform',
    date: 'Active',
    description: 'Consistently practicing Data Structures and Algorithms with a focus on Array manipulation, Hash Tables, Trees, Graphs, Dynamic Programming, and Two-Pointer strategies.',
    link: 'https://leetcode.com/u/prachi-raut_711/',
    icon: 'code'
  },
  {
    id: 'python-cert',
    type: 'Professional Certification',
    title: 'Python Certification — Learn Python from Scratch',
    issuer: 'DataFlair',
    date: 'November 2023',
    description: 'Credentialed certification validating core Python programming, object-oriented concepts, data structures, and foundational scripting expertise.',
    icon: 'award'
  }
];

export const techStackData: TechCategory[] = [
  {
    category: 'LANGUAGES',
    iconName: 'code2',
    skills: [
      { name: 'Python', highlight: true },
      { name: 'JavaScript', highlight: true },
      { name: 'TypeScript', highlight: true },
      { name: 'Dart', highlight: true },
      { name: 'SQL', highlight: false },
      { name: 'C++', highlight: false }
    ]
  },
  {
    category: 'FRONTEND',
    iconName: 'layout',
    skills: [
      { name: 'React.js', highlight: true },
      { name: 'Tailwind CSS', highlight: true },
      { name: 'HTML5 / CSS3', highlight: false },
      { name: 'Vite', highlight: false },
      { name: 'Recharts', highlight: false },
      { name: 'Responsive UI', highlight: false }
    ]
  },
  {
    category: 'BACKEND',
    iconName: 'server',
    skills: [
      { name: 'Node.js', highlight: true },
      { name: 'Express.js', highlight: true },
      { name: 'FastAPI', highlight: true },
      { name: 'Flask', highlight: false },
      { name: 'REST APIs', highlight: true },
      { name: 'Redis Streams', highlight: false }
    ]
  },
  {
    category: 'MOBILE',
    iconName: 'smartphone',
    skills: [
      { name: 'Flutter', highlight: true },
      { name: 'React Native', highlight: true },
      { name: 'Expo Go', highlight: false },
      { name: 'GetX', highlight: false },
      { name: 'Cross-Platform', highlight: false }
    ]
  },
  {
    category: 'DATABASE',
    iconName: 'database',
    skills: [
      { name: 'PostgreSQL', highlight: true },
      { name: 'MongoDB', highlight: true },
      { name: 'MySQL', highlight: false },
      { name: 'Firebase Firestore', highlight: true },
      { name: 'Supabase', highlight: true },
      { name: 'DuckDB', highlight: false },
      { name: 'Prisma ORM', highlight: false }
    ]
  },
  {
    category: 'AI / DATA & ML',
    iconName: 'cpu',
    skills: [
      { name: 'Google Gemini AI', highlight: true },
      { name: 'YOLOv8', highlight: true },
      { name: 'Scikit-Learn', highlight: true },
      { name: 'OpenCV', highlight: false },
      { name: 'Pandas', highlight: false },
      { name: 'NumPy', highlight: false },
      { name: 'Isolation Forest', highlight: false }
    ]
  },
  {
    category: 'TOOLS & DEVOPS',
    iconName: 'wrench',
    skills: [
      { name: 'Git', highlight: true },
      { name: 'GitHub', highlight: true },
      { name: 'Docker', highlight: true },
      { name: 'Postman', highlight: false },
      { name: 'Swagger', highlight: false },
      { name: 'GitHub Actions', highlight: false },
      { name: 'Figma', highlight: false }
    ]
  }
];
