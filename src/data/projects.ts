export interface Project {
  title: string;
  description: string;
  tags: string[];
  link?: string;
  linkLabel?: string;
  locked?: string; // text shown when there's no public link
  featured?: boolean;
}

export const projects: Project[] = [
  {
    title: 'SmartPenny',
    description:
      'Personal-finance web app: a unified dashboard for spending and investments, smart invoice/receipt parsing with automatic categorization (DQA), and budget management with real-time tracking.',
    tags: ['FastAPI', 'React', 'Hugging Face', 'Vercel', 'GCP'],
    locked: 'Private project',
    featured: true,
  },
  {
    title: 'Slopwatch',
    description:
      'Tracks AI-slop indicators (CLAUDE.md, .cursor, AGENTS.md) across open-source GitHub repos. Built a ~280k-repo dataset with full metadata, an enrichment pipeline and ongoing snapshot refresh.',
    tags: ['Next.js', 'PostgreSQL', 'QStash', 'Vercel', 'GitHub API'],
    locked: 'Private / archived',
    featured: true,
  },
  {
    title: 'Ricochet Robots Solver',
    description:
      'Solves the Ricochet Robots puzzle in the fewest moves by formulating it as a tree-search problem and traversing it with the RBFS (Recursive Best-First Search) algorithm.',
    tags: ['Python', 'Search Tree', 'RBFS'],
    link: 'https://github.com/joaomiguelcaldeira/Ricochet-Robots',
    linkLabel: 'View on GitHub',
    featured: true,
  },
  {
    title: 'Web Portfolio',
    description:
      'This very website — rebuilt with Astro, scroll-snap sections and an interactive particle backdrop. My playground for front-end design.',
    tags: ['Astro', 'CSS', 'JavaScript'],
    link: 'https://github.com/joaomiguelcaldeira/joaomiguelcaldeira.github.io',
    linkLabel: 'View on GitHub',
  },
  {
    title: 'Vertex Capacity Graph',
    description:
      "Implements Dinic's algorithm to compute maximum flow in a quadrangular graph with vertex capacities and super-sources, solving a conceptual optimization problem.",
    tags: ['C++', 'Graphs', 'Max Flow'],
    link: 'https://github.com/joaomiguelcaldeira/Vertex-Capacity-Graph',
    linkLabel: 'View on GitHub',
  },
  {
    title: 'MST with Union-Find',
    description:
      "Maximum connectivity at minimum cost for a transportation network — Kruskal's algorithm finding the minimum spanning tree using a Union-Find (by rank) data structure.",
    tags: ['C', 'Graphs', 'MST', 'Union-Find'],
    link: 'https://github.com/joaomiguelcaldeira/MST-Union-Find',
    linkLabel: 'View on GitHub',
  },
  {
    title: 'Circular String Linearization',
    description:
      "Finds the smallest lexicographic cyclic rotation of a string in linear time by building a Suffix Tree with Ukkonen's algorithm.",
    tags: ['C', 'Suffix Tree'],
    link: 'https://github.com/joaomiguelcaldeira/Circular-String-Linearization',
    linkLabel: 'View on GitHub',
  },
];
