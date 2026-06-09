export interface ExperienceItem {
  role: string;
  short: string; // compact label for the tab rail
  org: string;
  url: string;
  logo: string;
  logoWide?: boolean;
  period: string;
  points: string[];
  tags: string[];
  kind: 'work' | 'education';
}

export const experience: ExperienceItem[] = [
  {
    role: 'Software Engineer',
    short: 'Software Engineer',
    org: 'Infosistema',
    url: 'https://www.infosistema.com/',
    logo: '/images/infosistema-logo.png',
    logoWide: true,
    period: 'Mar 2025 - Present',
    points: [
      'Building an AI-powered B2B SaaS platform end-to-end, designing document-understanding systems that extract structured data from unstructured documents and remove hours of manual work.',
      'Engineering agentic AI pipelines (LLMs, RAG, MCP, Google ADK) and the data integrations behind them, connecting email and cloud-storage sources with secure, permission-scoped access.',
      'Owning the full lifecycle across a microservices architecture, from backend APIs to frontend dashboards, deployed on GCP with automated CI/CD and built to enterprise security standards.',
    ],
    tags: ['Python', 'C# / .NET', 'Generative AI', 'Agentic AI', 'MCP', 'Google ADK', 'GCP', 'Docker', 'Machine Learning', 'Microservices'],
    kind: 'work',
  },
  {
    role: 'QA Automation Engineer',
    short: 'QA Automation Engineer',
    org: 'Sky',
    url: 'https://www.sky.com/',
    logo: '/images/sky-logo.png',
    period: 'Sep 2023 - Mar 2025',
    points: [
      'Built an API telemetry framework to monitor critical user journeys, improving performance visibility and reducing service defects.',
      'Optimized CI/CD pipelines by integrating automated reporting into communication channels, streamlining workflows and boosting client adoption.',
      'Led a restructuring of the automation test suite, improving quality, scope and relevance for client teams.',
    ],
    tags: ['Jenkins', 'JavaScript', 'Python', 'Grafana', 'Docker', 'AWS'],
    kind: 'work',
  },
  {
    role: 'Apprentice QA Automation',
    short: 'QA Automation Apprentice',
    org: 'Sky',
    url: 'https://www.sky.com/',
    logo: '/images/sky-logo.png',
    period: 'Jul 2023 - Sep 2023',
    points: [
      'Developed automated frameworks for resilience testing across mobile, TV and web platforms.',
      'Gained hands-on experience with Selenium, Appium, Playwright and Cypress.',
    ],
    tags: ['Selenium', 'Appium', 'Playwright', 'Cypress', 'PyTest'],
    kind: 'work',
  },
  {
    role: 'MSc in Computer Science & Engineering',
    short: 'MSc · CS&E',
    org: 'Instituto Superior Técnico',
    url: 'https://tecnico.ulisboa.pt/en/',
    logo: '/images/ist.png',
    period: 'Feb 2023 - Nov 2024',
    points: [
      'Specialization in Enterprise Systems and Service Management.',
      'Master\'s thesis: <a class="xp-link" href="https://scholar.tecnico.ulisboa.pt/records/hwCDopZoqsnEojvlRMR7J_CIRij3peHoQxZ7" target="_blank" rel="noopener">Dynamic Ensemble of Specialized Models for Multi-Timeframe Stock Market Trend Prediction</a>.',
    ],
    tags: ['Machine Learning', 'Autonomous Agents', 'Advanced Algorithms', 'Quant Trading'],
    kind: 'education',
  },
  {
    role: 'BSc in Computer Science & Engineering',
    short: 'BSc · CS&E',
    org: 'Instituto Superior Técnico',
    url: 'https://tecnico.ulisboa.pt/en/',
    logo: '/images/ist.png',
    period: 'Sep 2018 - Feb 2023',
    points: [
      'Strong foundation in algorithms, data structures, AI, operating systems and computer networks.',
      'Mentored first-year students with academic guidance and campus resources.',
    ],
    tags: ['Python', 'Java', 'C', 'SQL', 'Algorithms', 'AI'],
    kind: 'education',
  },
];
