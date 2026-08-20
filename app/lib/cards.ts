import { Card } from './definitions';

const colors = {
  fe: '#E29191',
  be: '#91BEE2',
  fs: '#9B91E2',
  dv: '#E2C291',
  ui: '#E291C8',
};

const cards: Card[] = [
  {
    id: '1',
    type: 'Full-stack',
    rarity: 4,
    colors: [colors.fs],
    name: 'DubCards',
    desc: 'DubCards is a University of Washington-themed trading card game where users can buy, sell, favorite, and trade digital cards with friends.',
    mainTech: ['Node.js', 'Express', 'MongoDB', 'JavaScript', 'Azure'],
    sideTech: ['Mongoose', 'HTML', 'CSS'],
    link: 'https://dubcards.onrender.com', 
    dates: {
      start: new Date('2026-01-01'),
      end: null,
    },
  },
  {
    id: '2',
    type: 'Data-viz',
    rarity: 3,
    colors: [colors.dv],
    name: "NBA's Intl. Players",
    desc: 'An interactive data visualization that allows users to explore statistical trends and insights regarding international players in the NBA.',
    mainTech: ['P5.js', 'JavaScript'],
    sideTech: ['HTML', 'CSS'],
    link: 'https://ltsan-dev.github.io/NBA-Data-Visualization/',
    dates: {
      start: new Date('2025-09-01'),
      end: new Date('2025-12-01'),
    },
  },
  {
    id: '3',
    type: 'UI/UX',
    rarity: 2,
    colors: [colors.ui],
    name: 'UW MyCareer',
    desc: 'A mobile app prototype designed to help University of Washington students easily navigate and explore their potential career paths.',
    mainTech: ['Figma'],
    sideTech: [],
    link: 'https://figma.com/proto/8B0SUiATbq15taR0tzoWoL/Career-Path-App',
    dates: {
      start: new Date('2025-04-01'),
      end: new Date('2025-06-01'),
    },
  },
  {
    id: '4',
    type: 'Front-end',
    rarity: 3,
    colors: [colors.fe],
    name: 'Blitz Fantasy',
    desc: 'A web application that provides a complete fantasy football experience, serving up live NFL metrics and real-time league data for users.',
    mainTech: ['React', 'JavaScript', 'Firebase', 'HTML', 'CSS'],
    sideTech: ['Git'],
    link: 'https://blitz-fantasy.web.app/',
    dates: {
      start: new Date('2025-04-01'),
      end: new Date('2025-06-01'),
    },
  },
  {
    id: '5',
    type: 'Full-stack',
    rarity: 4,
    colors: [colors.fs],
    name: 'BALLER//BROWSER',
    desc: 'A web platform that lets users search and browse through real-time NBA player data and multi-season statistics.',
    mainTech: ['Node.js', 'Express', 'JavaScript', 'SQL', 'R'],
    sideTech: ['HTML', 'CSS'],
    link: 'https://yortyy.github.io/CSE154-Web-Creative-Projects/fp/public/index.html', 
    dates: {
      start: new Date('2024-04-01'),
      end: new Date('2024-06-01'),
    },
  },
];

export default cards;