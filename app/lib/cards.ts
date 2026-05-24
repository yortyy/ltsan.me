import { Card } from './definitions';

const cards: Card[] = [
  { id: '1', type: 'Front-end', colors: ["red"], name: 'React App', desc: 'A project using React', frameworks: ['React'], platforms: ['Web'] },
  { id: '2', type: 'Back-end', colors: ["blue"], name: 'Node API', desc: 'A project using Node.js', frameworks: ['Node.js'], platforms: ['Web', 'Mobile'] },
  { id: '3', type: 'Full-stack', colors: ["purple"], name: 'MERN Stack', desc: 'A full-stack project using MongoDB, Express, React, and Node.js', frameworks: ['MongoDB', 'Express', 'React', 'Node.js'], platforms: ['Web'] },
];

export default cards;