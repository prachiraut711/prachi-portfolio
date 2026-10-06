export interface Project {
  id: string;
  name: string;
  subtitle: string;
  category: 'full-stack' | 'ai-ml' | 'mobile';
  domainNumber: string;
  domainLabel: string;
  description: string;
  problemSolution?: {
    problem: string;
    solution: string;
  };
  features: string[];
  techStack: string[];
  githubUrl: string;
  liveDemoUrl?: string;
  videoDemoUrl?: string;
  docsUrl?: string;
  featured: boolean;
  visualType: 'telemetry' | 'data-quality' | 'support-ai' | 'dev-analytics' | 'finance-ai' | 'yolo-vision' | 'chat-app' | 'task-tracker' | 'event-booking';
}

export const projectsData: Project[] = [
  // 01 — FULL-STACK WEB
  {
    id: 'signalflow',
    name: 'SignalFlow',
    subtitle: 'Business Event Intelligence & Anomaly Diagnostics',
    category: 'full-stack',
    domainNumber: '01',
    domainLabel: 'Full-Stack Web',
    description: 'A full-stack business event intelligence platform that ingests real-time application telemetry via Redis Streams, detects abnormal behavior using statistical models and Isolation Forest, correlates related anomalies into actionable incidents, and synthesizes AI-assisted operational explanations.',
    problemSolution: {
      problem: 'High-throughput microservices emit fragmented logs and metrics, making it difficult for on-call engineers to identify real root-cause incidents versus noisy transient spikes.',
      solution: 'Streamlines telemetry into a Redis Streams pipeline, performs DuckDB analytical profiling, clusters co-occurring anomalies into unified incidents, and produces plain-language AI operational diagnostics.'
    },
    features: [
      'Asynchronous telemetry event ingestion buffered through Redis Streams',
      'Dual-layer anomaly detection using statistical moving averages and Isolation Forest',
      'Automated signal correlation that groups related anomalies to reduce alert fatigue',
      'AI operational incident explanations powered by OpenRouter API',
      'Interactive React dashboard with live telemetry playback and metric graphs'
    ],
    techStack: ['Python', 'FastAPI', 'React', 'TypeScript', 'Redis Streams', 'DuckDB', 'PostgreSQL', 'Isolation Forest', 'Docker'],
    githubUrl: 'https://github.com/prachiraut711/SignalFlow',
    liveDemoUrl: 'https://signalflow-frontend.onrender.com/',
    docsUrl: 'https://signalflow-backend-df3p.onrender.com/docs',
    featured: true,
    visualType: 'telemetry'
  },
  {
    id: 'smartsupport-ai',
    name: 'SmartSupport AI',
    subtitle: 'AI-Assisted Customer Support & Ticket Triage Workspace',
    category: 'full-stack',
    domainNumber: '01',
    domainLabel: 'Full-Stack Web',
    description: 'An AI-assisted customer support and ticket management platform built with React, Node.js, and PostgreSQL. Enables customers to submit tickets while providing agents with an intelligent triage workspace powered by Google Gemini AI for automated sentiment analysis, classification, and suggested replies.',
    problemSolution: {
      problem: 'Support teams face backlogs of repetitive inquiries and struggle to prioritize urgent or dissatisfied customer tickets effectively.',
      solution: 'Integrates Google Gemini to automatically analyze ticket sentiment, assign urgency priority, categorize issues, and draft high-context agent response recommendations.'
    },
    features: [
      'Role-based JWT authentication separating Customer and Agent portals',
      'Google Gemini AI sentiment analysis, priority assignment, and ticket summarization',
      'AI-generated suggested replies to accelerate agent response workflows',
      'Interactive support queues with status, priority, and category management',
      'Unified customer-agent conversation threads backed by Neon PostgreSQL & Prisma'
    ],
    techStack: ['React', 'Node.js', 'Express.js', 'TypeScript', 'PostgreSQL', 'Prisma', 'Google Gemini AI', 'Tailwind CSS', 'JWT'],
    githubUrl: 'https://github.com/prachiraut711/SmartSupport-AI',
    liveDemoUrl: 'https://smart-support-ai-two.vercel.app/',
    featured: true,
    visualType: 'support-ai'
  },
  {
    id: 'eventsphere',
    name: 'EventSphere',
    subtitle: 'Full-Stack Event Booking & Ticketing Management',
    category: 'full-stack',
    domainNumber: '01',
    domainLabel: 'Full-Stack Web',
    description: 'A full-stack event discovery and reservation platform built with React and Express. Features secure email OTP verification, dual role-based dashboards for attendees and organizers, real-time seat availability tracking, dynamic ticket registration, and automated email confirmation dispatch.',
    problemSolution: {
      problem: 'Event organizers need a reliable platform that prevents duplicate registrations, verifies user authenticity, and provides transparent attendee metrics.',
      solution: 'Built a MongoDB-backed reservation engine with Nodemailer OTP email verification, role-guarded routes, and live ticket inventory controls.'
    },
    features: [
      'Email OTP verification & JWT session authentication for secure signups',
      'Role-based dashboards for event attendees and administrative managers',
      'Real-time seat availability calculation and instant booking confirmations',
      'Automated confirmation email delivery with event passes via Nodemailer',
      'Search, filter, and category discovery for community events'
    ],
    techStack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS', 'JWT', 'Nodemailer', 'REST APIs'],
    githubUrl: 'https://github.com/prachiraut711/Event-Booking-Web-App',
    videoDemoUrl: 'https://www.youtube.com/watch?v=0TlHoaTM-II',
    featured: false,
    visualType: 'event-booking'
  },

  // 02 — AI / DATA / MACHINE LEARNING
  {
    id: 'datatrust',
    name: 'DataTrust',
    subtitle: 'Data Quality & Reliability Intelligence Engine',
    category: 'ai-ml',
    domainNumber: '02',
    domainLabel: 'AI / Data / ML',
    description: 'A data quality and reliability intelligence platform empowering teams to upload CSV and Parquet files, generate fast statistical profiles with DuckDB, validate custom quality rules, detect anomalies with Isolation Forest, calculate explainable reliability scores, and synthesize Gemini AI diagnostic explanations.',
    problemSolution: {
      problem: 'Data pipelines frequently ingest silent errors (schema drift, null spikes, outlier values) that compromise downstream analytics and ML models before detection.',
      solution: 'Coupled in-process DuckDB analytical computation with an Isolation Forest engine to compute a transparent 0-100 Reliability Score and generate privacy-safe Gemini AI remediation summaries.'
    },
    features: [
      'Zero-lockin CSV and Parquet dataset upload with rapid parsing',
      'Sub-second distribution profiling (quantiles, missingness, frequency histograms) using DuckDB',
      'Custom validation rule engine checking completeness, uniqueness, and range validity',
      'Multivariate anomaly detection isolating statistical outliers via Isolation Forest',
      '0–100 Data Reliability Score calculation paired with Gemini AI plain-language diagnosis'
    ],
    techStack: ['FastAPI', 'Python', 'React', 'TypeScript', 'DuckDB', 'SQLAlchemy', 'Scikit-Learn', 'Google Gemini AI', 'Recharts', 'Tailwind CSS'],
    githubUrl: 'https://github.com/prachiraut711/DataTrust',
    liveDemoUrl: 'https://data-trust-three.vercel.app/',
    featured: true,
    visualType: 'data-quality'
  },
  {
    id: 'devpulse-ai',
    name: 'DevPulse AI',
    subtitle: 'AI-Powered Engineering Operations & Velocity Telemetry',
    category: 'ai-ml',
    domainNumber: '02',
    domainLabel: 'AI / Data / ML',
    description: 'An engineering operations dashboard unifying GitHub activity, pull request velocity, issue status, and CI/CD workflow telemetry into a single operational interface with automated AI code reviews and developer productivity analytics.',
    problemSolution: {
      problem: 'Engineering leads lack high-level visibility across fragmented GitHub repositories, slow review cycles, and recurring build pipeline bottlenecks.',
      solution: 'Aggregates PR lifecycle metrics, CI telemetry, and code velocity into a responsive React 19 dashboard backed by FastAPI and AI-powered risk assessment.'
    },
    features: [
      'Centralized GitHub repository and pull request tracking across projects',
      'CI/CD pipeline status monitoring with failure pattern detection',
      'Automated AI-assisted PR code reviews and risk score estimation',
      'Development velocity metrics, review turnaround times, and team activity analytics',
      'Automated testing workflows with GitHub Actions and containerized Docker setup'
    ],
    techStack: ['FastAPI', 'Python', 'React 19', 'TypeScript', 'Tailwind CSS', 'PostgreSQL', 'Docker', 'GitHub Actions'],
    githubUrl: 'https://github.com/prachiraut711/devpulse-ai',
    featured: false,
    visualType: 'dev-analytics'
  },
  {
    id: 'spendwise-ai',
    name: 'SpendWise AI',
    subtitle: 'Smart Personal Expense Tracker with Gemini AI Analytics',
    category: 'ai-ml',
    domainNumber: '02',
    domainLabel: 'AI / Data / ML',
    description: 'A mobile expense management app built with Flutter and Firebase that leverages Google Gemini (gemini-3.5-flash-lite) through the Firebase AI Logic SDK to deliver privacy-preserving spending analysis, category visual breakdowns, and actionable budgeting recommendations.',
    problemSolution: {
      problem: 'Traditional expense trackers only record raw transactions without providing intelligent, proactive context on spending habits or savings opportunities.',
      solution: 'Aggregates spending metrics on-device and queries Gemini securely via Firebase AI Logic to produce actionable budgeting advice without transmitting sensitive personal identity.'
    },
    features: [
      'Daily expense tracking with categorized logs, receipt notes, and date filtering',
      'Visual analytics dashboard with monthly summaries, category breakdowns, and weekly charts',
      'Privacy-first AI spending insights powered by Gemini via Firebase AI Logic',
      'Cloud Firestore database sync guarded by fine-grained security rules and Firebase App Check',
      'Reactive mobile UI architecture using GetX state management controllers'
    ],
    techStack: ['Flutter', 'Dart', 'Firebase Firestore', 'Firebase Auth', 'GetX', 'Google Gemini AI', 'Firebase AI Logic', 'App Check'],
    githubUrl: 'https://github.com/prachiraut711/spendwise-ai',
    featured: false,
    visualType: 'finance-ai'
  },
  {
    id: 'accident-damage-detection',
    name: 'AI Vehicle Damage Detection',
    subtitle: 'Computer Vision Damage Localization & Insurance Claim Assessment',
    category: 'ai-ml',
    domainNumber: '02',
    domainLabel: 'AI / Data / ML',
    description: 'An AI-powered computer vision web application that detects external vehicle damage from uploaded imagery using YOLOv8, renders bounding-box visualizations, assesses damage severity, predicts internal mechanical damage, and provides automated repair cost estimation and insurance claim recommendations.',
    problemSolution: {
      problem: 'Manual vehicle inspection and insurance claim assessment are slow, subjective, and prone to fraudulent or inconsistent estimates.',
      solution: 'Employs a custom-trained YOLOv8 object detection model and a Scikit-Learn classification pipeline to automate visual damage localization, calculate repair costs, and evaluate claim feasibility instantly.'
    },
    features: [
      'YOLOv8 object detection for real-time bounding-box damage localization',
      'Damage severity analysis scoring and internal mechanical damage risk estimation',
      'Automated component repair cost estimation based on localized damage sectors',
      'Machine learning classification pipeline for insurance claim approval assessment',
      'Interactive Flask web platform with OpenCV image processing and MySQL record keeping'
    ],
    techStack: ['Python', 'Flask', 'YOLOv8', 'OpenCV', 'Scikit-Learn', 'Pandas', 'NumPy', 'MySQL', 'JavaScript', 'Bootstrap'],
    githubUrl: 'https://github.com/prachiraut711/accident-damage-detection',
    videoDemoUrl: 'https://www.youtube.com/watch?v=FxCeXzYf2OA',
    featured: true,
    visualType: 'yolo-vision'
  },

  // 03 — MOBILE APPLICATIONS
  {
    id: 'chatapp',
    name: 'We-Chat / ChatApp',
    subtitle: 'Cross-Platform Real-Time Messaging App with Flutter',
    category: 'mobile',
    domainNumber: '03',
    domainLabel: 'Mobile Applications',
    description: 'A cross-platform real-time chat application built using Flutter and Firebase that facilitates instantaneous messaging with Google OAuth, real-time message status tracking, user presence indicators, and background push notifications through Firebase Cloud Messaging.',
    problemSolution: {
      problem: 'Building reliable real-time mobile messaging requires handling intermittent connectivity, synchronized message state, and low-latency notifications across platforms.',
      solution: 'Architected Flutter client with GetX reactive state management integrated directly with Cloud Firestore listeners and Firebase Cloud Messaging for persistent delivery.'
    },
    features: [
      'Google Sign-In and secure Firebase Authentication flows',
      'Real-time one-to-one instant text messaging with sub-second synchronization',
      'Message status updates including sent, delivered, and read receipt timestamps',
      'Firebase Cloud Messaging (FCM) integration for background push notifications',
      'User profile editing, avatar customization, and real-time online presence status'
    ],
    techStack: ['Flutter', 'Dart', 'Firebase Auth', 'Cloud Firestore', 'Firebase Cloud Messaging', 'GetX', 'Google Sign-In'],
    githubUrl: 'https://github.com/prachiraut711/ChatApp',
    videoDemoUrl: 'https://www.youtube.com/watch?v=p-F_tupn7h4',
    featured: true,
    visualType: 'chat-app'
  },
  {
    id: 'personal-task-tracker',
    name: 'Mini TaskHub',
    subtitle: 'Mobile Task Management with Flutter & Supabase RLS',
    category: 'mobile',
    domainNumber: '03',
    domainLabel: 'Mobile Applications',
    description: 'A modern, responsive mobile task management application built with Flutter, GetX, and Supabase. Implements secure user email authentication, interactive task lifecycle toggles, and strict PostgreSQL Row Level Security (RLS) policies ensuring complete data privacy.',
    problemSolution: {
      problem: 'Simple productivity tools often compromise on backend security, exposing multi-tenant records without strict database-level isolation.',
      solution: 'Configured Supabase PostgreSQL with rigorous Row Level Security policies where users can only read, insert, and delete their own verified task records.'
    },
    features: [
      'Email & password authentication powered by Supabase Auth',
      'Task creation, status toggles (pending/completed), and task deletion',
      'PostgreSQL database with Row Level Security (RLS) guaranteeing user-isolated data access',
      'Reactive state management and clean controller architecture using GetX',
      'Smooth, responsive mobile interface tested across Android and iOS viewports'
    ],
    techStack: ['Flutter', 'Dart', 'GetX', 'Supabase', 'PostgreSQL', 'Row Level Security'],
    githubUrl: 'https://github.com/prachiraut711/Personal-Task-Tracker',
    videoDemoUrl: 'https://youtu.be/PDHEOVLlLrk',
    featured: false,
    visualType: 'task-tracker'
  }
];
