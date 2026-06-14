import { TechnologyKey } from '@/data/technologies';

export type Project = {
  id: number;
  title: string;
  image?: string;
  description: string;
  stack: TechnologyKey[];
  liveUrl?: string;
  githubUrl?: string;
};
