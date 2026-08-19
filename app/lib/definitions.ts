export type Card = {
  id: string;
  name: string;
  type: string;
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