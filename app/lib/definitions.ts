export type Card = {
  id: string;
  name: string;
  colors: string[];
  desc: string;
  frameworks: string[];
  platforms: string[];
  type: ('Front-end' | 'Back-end' | 'Full-stack');
};