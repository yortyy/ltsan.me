import { Card } from './definitions';

const cards: Card[] = [
  {
    id: '1',
    type: 'Front-end',
    colors: ['red'],
    name: 'React App',
    desc: 'A project using React',
    mainTech: ['React'],
    sideTech: ['TypeScript', 'Tailwind'],
    dates: {
      start: new Date('2024-01-01'),
      end: null,
    },
  },
  {
    id: '2',
    type: 'Back-end',
    colors: ['blue'],
    name: 'Node API',
    desc: 'A project using Node.js',
    mainTech: ['Node.js'],
    sideTech: ['PostgreSQL', 'Docker'],
    dates: {
      start: new Date('2023-06-01'),
      end: new Date('2024-02-15'),
    },
  },
  {
    id: '3',
    type: 'Full-stack',
    colors: ['#57007F'],
    name: 'DubCards',
    desc: 'DubCards is a University of Washington themed trading card game featuring UW themed cards and packs. Cards can be bought, sold or favorited. Users can add friends to trade cards wish. Enjoy DubCards with many cards and packs to choose from!',
    mainTech: ['Express', 'HTML', 'MongoDB', 'Azure'],
    sideTech: ['CSS'],
    dates: {
      start: new Date('2026-1-01'),
      end: null,
    },
  },
];

export default cards;