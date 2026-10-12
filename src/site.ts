// Central place for personal details used across the site.
export const SITE = {
  name: 'Max Gauntner',
  title: 'Max Gauntner — Senior Product Designer',
  role: 'Senior Product Designer',
  description:
    'Senior Product Designer specializing in complex cybersecurity SaaS — threat detection, identity, and incident response tools that analysts trust under pressure.',
  email: 'hello@maxgauntner.com', // TODO: replace with your contact email
  location: 'Ohio, USA', // TODO: confirm
  // 'green' | 'blue'
  accent: 'green' as 'green' | 'blue',
  socials: [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/' }, // TODO
    { label: 'GitHub', href: 'https://github.com/' }, // TODO
    { label: 'Read.cv', href: 'https://read.cv/' }, // TODO
  ],
};

export const NAV = [
  { label: 'Work', href: '/projects' },
  { label: 'Writing', href: '/articles' },
  { label: 'About', href: '/about' },
];
