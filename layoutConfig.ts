// layoutConfig.ts
export const layoutConfig = {
  home: {
    header: 'A',
    footer: 'B',
    title: 'Welcome to Home Page',
  },
  about: {
    header: 'B',
    footer: 'C',
    title: 'About Us',
  },
  contact: {
    header: 'none',
    footer: 'A',
    title: 'Contact Us',
  },
} as const;

