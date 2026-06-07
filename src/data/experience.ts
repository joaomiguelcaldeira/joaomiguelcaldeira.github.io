export interface ExperienceItem {
  role: string;
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
    org: 'Infosistema',
    url: 'https://www.infosistema.com/',
    logo: '/images/infosistema-logo.png',
    logoWide: true,
    period: 'Mar 2025 — Present',
    points: [
      'Architecting and developing full-stack AI-powered applications from scratch — RAG systems, fine-tuned LLMs, computer vision and NLP solutions for document processing and information extraction, using both open-source (Ollama) and commercial LLMs.',
      'Designing scalable system architectures with a focus on algorithmic performance, owning the full lifecycle: frontend, backend APIs, cloud infrastructure (GCP) and automated deployment pipelines.',
    ],
    tags: ['Python', '.NET', 'React', 'GCP', 'Hugging Face', 'Ollama'],
    kind: 'work',
  },
  {
    role: 'QA Automation Engineer',
    org: 'Sky',
    url: 'https://www.sky.com/',
    logo: '/images/sky-logo.png',
    period: 'Sep 2023 — Mar 2025',
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
    org: 'Sky',
    url: 'https://www.sky.com/',
    logo: '/images/sky-logo.png',
    period: 'Jul 2023 — Sep 2023',
    points: [
      'Developed automated frameworks for resilience testing across mobile, TV and web platforms.',
      'Gained hands-on experience with Selenium, Appium, Playwright and Cypress.',
    ],
    tags: ['Selenium', 'Appium', 'Playwright', 'Cypress', 'PyTest'],
    kind: 'work',
  },
  {
    role: 'MSc in Computer Science & Engineering',
    org: 'Instituto Superior Técnico',
    url: 'https://tecnico.ulisboa.pt/en/',
    logo: '/images/ist.png',
    period: 'Feb 2023 — Nov 2024',
    points: [
      'Specialization in Enterprise Systems and IT Service Management.',
      'Thesis: Dynamic Ensemble of Specialized Models for Multi-Timeframe Stock Market Trend Prediction.',
    ],
    tags: ['Machine Learning', 'Autonomous Agents', 'Advanced Algorithms', 'Quant Trading'],
    kind: 'education',
  },
  {
    role: 'BSc in Computer Science & Engineering',
    org: 'Instituto Superior Técnico',
    url: 'https://tecnico.ulisboa.pt/en/',
    logo: '/images/ist.png',
    period: 'Sep 2018 — Feb 2023',
    points: [
      'Strong foundation in algorithms, data structures, AI, operating systems and computer networks.',
      'Mentored first-year students with academic guidance and campus resources.',
    ],
    tags: ['Python', 'Java', 'C', 'SQL', 'Algorithms', 'AI'],
    kind: 'education',
  },
];
