export const siteConfig = {
  name: 'YourName',
  title: 'YourName — Software Engineer',
  description: 'Software engineer focused on distributed systems and developer tools.',
  url: 'https://yourname.dev',
}

export const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#work', label: 'Work' },
  { href: '/blog', label: 'Blog', external: true },
] as const

export const socialLinks = [
  { href: 'mailto:you@example.com', label: 'Email' },
  { href: 'https://github.com/yourname', label: 'GitHub' },
  { href: 'https://twitter.com/yourname', label: 'Twitter' },
] as const

export const experiences = [
  {
    date: '2023 — Now',
    title: 'Senior Engineer',
    company: 'ByteDance',
    description:
      'Leading architecture for high-throughput data systems processing millions of events per second. Designing internal platforms serving 200+ engineers.',
    tags: ['Go', 'Kubernetes', 'Kafka', 'gRPC'],
  },
  {
    date: '2021 — 2023',
    title: 'Software Engineer',
    company: 'Startup',
    description:
      'Full-stack development across the product lifecycle. Built CI/CD pipelines, shipped features from zero to production, mentored junior engineers.',
    tags: ['React', 'TypeScript', 'Python', 'PostgreSQL'],
  },
  {
    date: '2017 — 2021',
    title: 'B.S. Computer Science',
    company: 'University',
    description:
      'Distributed systems and algorithms research. Published on consensus protocols. Teaching assistant for systems programming.',
    tags: [],
  },
] as const

export const projects = [
  {
    title: 'Distributed Pipeline',
    metric: '1M+',
    metricLabel: 'events/sec',
    description:
      'High-throughput data processing with exactly-once semantics across 200 nodes.',
    tags: ['Go', 'Kafka', 'K8s'],
    href: '/projects/distributed-pipeline',
  },
  {
    title: 'AI Orchestration',
    metric: '200+',
    metricLabel: 'engineers served',
    description:
      'LLM orchestration engine with streaming, function calling, and multi-model routing.',
    tags: ['Python', 'React', 'WebSocket'],
    href: '/projects/ai-orchestration',
  },
  {
    title: 'Design System',
    metric: '20+',
    metricLabel: 'apps powered',
    description:
      'Component library with built-in accessibility, theming, and documentation.',
    tags: ['React', 'TypeScript'],
    href: '/projects/design-system',
  },
  {
    title: 'CLI Framework',
    metric: '50+',
    metricLabel: 'plugins',
    description:
      'Extensible command-line toolkit with plugin architecture and rich terminal UI.',
    tags: ['Go', 'Cobra'],
    href: '/projects/cli-framework',
  },
] as const
