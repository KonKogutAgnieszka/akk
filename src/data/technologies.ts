type TechnologyEntry = {
  name: string;
  icon?: string;
  initials?: string;
};

export const technologies = {
  html:       { name: 'HTML',       icon: '/assets/icons/html.svg',       initials: 'HT' },
  css:        { name: 'CSS',        icon: '/assets/icons/css.svg',        initials: 'CS' },
  javascript: { name: 'JavaScript', icon: '/assets/icons/javascript.svg', initials: 'JS' },
  typescript: { name: 'TypeScript', icon: '/assets/icons/typescript.svg', initials: 'TS' },
  react:      { name: 'React',      icon: '/assets/icons/react.svg',      initials: 'Re' },
  nextjs:     { name: 'Next.js',    icon: '/assets/icons/next.svg',       initials: 'Nx' },
  tailwind:   { name: 'Tailwind',   icon: '/assets/icons/tailwind.svg',   initials: 'TW' },
  nodejs:     { name: 'Node.js',    icon: '/assets/icons/node.svg',       initials: 'No' },
  express:    { name: 'Express',    icon: '/assets/icons/express.svg',    initials: 'Ex' },
  nestjs:     { name: 'NestJS',     icon: '/assets/icons/nestjs.svg',     initials: 'Ne' },
  restapi:    { name: 'RESTAPI',    icon: '/assets/icons/restapi.svg',    initials: 'RA' },
  tanstack:   { name: 'TanStack',   icon: '/assets/icons/tanstack.svg',   initials: 'TQ' },
  sass:       { name: 'Sass',       icon: '/assets/icons/sass.svg',       initials: 'Sc' },
  redux:      { name: 'Redux',      icon: '/assets/icons/redux.svg',      initials: 'Rx' },
  figma:      { name: 'Figma',      icon: '/assets/icons/figma.svg',      initials: 'Fi' },
  jest:       { name: 'Jest',       icon: '/assets/icons/jest.svg',       initials: 'Je' },
  playwright: { name: 'Playwright', icon: '/assets/icons/playwright.svg', initials: 'PW' },
} satisfies Record<string, TechnologyEntry>;

export type TechnologyKey = keyof typeof technologies;
