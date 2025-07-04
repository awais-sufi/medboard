// layoutConfig.ts
export const layoutConfig = {
  home: {
    header: 'A',
    footer: 'A',
    title: 'Welcome to Home Page',
  },
  admin: {
    header: 'B',
    footer: 'none',
    title: 'Admin',
  },
  contact: {
    header: 'none',
    footer: 'A',
    title: 'Contact Us',
  },
} as const;

