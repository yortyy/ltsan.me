export type Card = {
  id: string;
  name: string;
  type: ('Front-end' | 'Back-end' | 'Full-stack');
  colors: string[];
  desc: string;
  mainTech: string[];
  sideTech: string[] | null;
  dates: {
    start: Date;
    end: Date | null;
  };
};