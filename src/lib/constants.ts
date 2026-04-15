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
  {
    date: '2021 — 2025',
    title: 'B.Comp. Computer Science',
    company: 'National University of Singapore',
    description:
      'Studied computer science with focus on systems programming, algorithms, and software engineering.',
    tags: ['NUS', 'Computer Science'],
  },
  {
    date: '2017 — 2018',
    title: 'A-Levels',
    company: 'Temasek Junior College',
    description: '',
    tags: [],
  },
] as const

export const projects = [
  {
    title: 'Peggle',
    metric: '🎮',
    metricLabel: 'game engine',
    description:
      'A physics-based game clone built from scratch with Swift. Custom 2D physics engine handling collision detection, ball trajectories, and real-time rendering. Implemented level editor for user-created stages.',
    tags: ['Swift', 'iOS', 'Physics Engine', 'SpriteKit'],
    href: 'https://github.com/wweqg/Peggle',
  },
  {
    title: 'vvtk',
    metric: '🎬',
    metricLabel: 'research toolkit',
    description:
      'A high-performance toolkit for volumetric video research — point cloud processing, quality metrics computation, and 3D video analysis. Built in Rust for speed-critical operations on large datasets.',
    tags: ['Rust', 'Point Cloud', 'Research', 'CLI'],
    href: 'https://github.com/wweqg/vvtk',
  },
] as const
