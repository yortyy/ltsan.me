export type Card = {
  id: string;
  name: string;
  type: string;
  rarity: (1 | 2 | 3 | 4);
  colors: string[];
  desc: string;
  mainTech: string[];
  sideTech: string[] | null;
  link: string;
  dates: {
    start: Date;
    end: Date | null;
  };
};