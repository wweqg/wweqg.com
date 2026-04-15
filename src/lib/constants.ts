export const siteConfig = {
  name: 'Weiqiang',
  title: 'Zhang Weiqiang — Software Engineer',
  description: 'Backend engineer at TikTok. NUS Computer Science. Building systems that scale.',
  url: 'https://weiqiang.dev',
}

export const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#work', label: 'Work' },
  { href: '/blog', label: 'Blog', external: true },
] as const

export const socialLinks = [
  { href: 'mailto:zhangweiqiang.z@bytedance.com', label: 'Email' },
  { href: 'https://github.com/wweqg', label: 'GitHub' },
  { href: 'https://www.linkedin.com/in/wweqg/', label: 'LinkedIn' },
] as const

export const experiences = [
  {
    date: '2025 — Now',
    title: 'Backend Engineer',
    company: 'TikTok',
    description:
      'Full-time backend engineer working on large-scale distributed systems serving global traffic.',
    tags: ['Go', 'Distributed Systems', 'Backend'],
  },
  {
    date: '2025',
    title: 'Backend Engineer Intern',
    company: 'TikTok',
    description:
      'Backend engineering internship building and optimizing services at scale.',
    tags: ['Go', 'Microservices', 'Backend'],
  },
  {
    date: '2024',
    title: 'Software Engineer Intern',
    company: 'GovTech Singapore',
    description:
      'Built software for Singapore government digital services. Worked on systems powering public-facing applications.',
    tags: ['Software Engineering', 'Government Tech'],
  },
  {
    date: '2023',
    title: 'Research Assistant Intern',
    company: 'NUS',
    description:
      'Conducted research in computer science at the National University of Singapore.',
    tags: ['Research', 'CS'],
  },
  {
    date: '2023',
    title: 'Software Engineer Intern',
    company: 'Toppan Ecquaria',
    description:
      'Software engineering internship focused on building enterprise solutions.',
    tags: ['Java', 'Software Engineering'],
  },
  {
    date: '2023 — 2025',
    title: 'Teaching Assistant',
    company: 'NUS',
    description:
      'TA for CS2100 (Computer Organisation), CS2030S (Programming Methodology II), and CS2106 (Operating Systems). Guided 200+ students through systems programming and OOP concepts.',
    tags: ['CS2100', 'CS2030S', 'CS2106', 'Teaching'],
  },
] as const

export const projects = [
  {
    title: 'Peggle',
    metric: '🎮',
    metricLabel: 'game clone',
    description:
      'A Peggle game clone built with Swift, featuring physics simulation and level design.',
    tags: ['Swift', 'iOS', 'Game Dev'],
    href: 'https://github.com/wweqg/Peggle',
  },
  {
    title: 'PetCode',
    metric: '📋',
    metricLabel: 'project mgmt',
    description:
      'Project management application designed for software teams, built with Java.',
    tags: ['Java', 'Team Project'],
    href: 'https://github.com/wweqg/PetCode',
  },
  {
    title: 'vvtk',
    metric: '🎬',
    metricLabel: 'volumetric video',
    description:
      'A toolkit for volumetric video research — processing, analysis, and visualization of 3D video data.',
    tags: ['Rust', 'Research', 'Video'],
    href: 'https://github.com/wweqg/vvtk',
  },
  {
    title: 'Duke',
    metric: '🤖',
    metricLabel: 'task bot',
    description:
      'A task manager chatbot with natural language parsing, built as part of NUS CS2103T.',
    tags: ['Java', 'CLI', 'NLP'],
    href: 'https://github.com/wweqg/Duke',
  },
] as const
