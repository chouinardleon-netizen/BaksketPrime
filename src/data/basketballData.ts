export type Player = {
  name: string;
  team: string;
  position: string;
  ppg: number;
  rpg: number;
  apg: number;
  fg: number;
};

export const playerSearchIndex: Player[] = [
  { name: 'Shai Gilgeous-Alexander', team: 'Thunder', position: 'G', ppg: 30.1, rpg: 5.5, apg: 6.2, fg: 51.8 },
  { name: 'Nikola Jokic', team: 'Nuggets', position: 'C', ppg: 26.4, rpg: 12.4, apg: 9.0, fg: 64.1 },
  { name: 'Jalen Brunson', team: 'Knicks', position: 'G', ppg: 28.7, rpg: 3.6, apg: 6.7, fg: 47.7 },
  { name: 'Giannis Antetokounmpo', team: 'Bucks', position: 'F', ppg: 30.4, rpg: 11.5, apg: 6.5, fg: 55.3 },
  { name: 'Anthony Edwards', team: 'Timberwolves', position: 'G', ppg: 25.9, rpg: 5.4, apg: 4.7, fg: 46.5 },
  { name: 'LaMelo Ball', team: 'Hornets', position: 'G', ppg: 23.9, rpg: 4.9, apg: 8.1, fg: 43.1 },
  { name: 'Victor Wembanyama', team: 'Spurs', position: 'F', ppg: 21.4, rpg: 10.6, apg: 3.9, fg: 46.9 },
  { name: 'Devin Booker', team: 'Suns', position: 'G', ppg: 27.1, rpg: 4.5, apg: 6.9, fg: 49.5 },
];

export const teamStandings = [
  { name: 'Thunder', wins: 52, losses: 22, winRate: '.703', conference: 'Western' },
  { name: 'Celtics', wins: 49, losses: 25, winRate: '.662', conference: 'Eastern' },
  { name: 'Nuggets', wins: 48, losses: 26, winRate: '.648', conference: 'Western' },
  { name: 'Knicks', wins: 46, losses: 28, winRate: '.622', conference: 'Eastern' },
  { name: 'Bucks', wins: 45, losses: 29, winRate: '.608', conference: 'Eastern' },
];

export const seasonTrend = [
  { month: 'Nov', points: 108, assists: 22 },
  { month: 'Dec', points: 111, assists: 23 },
  { month: 'Jan', points: 114, assists: 24 },
  { month: 'Feb', points: 109, assists: 25 },
  { month: 'Mar', points: 116, assists: 26 },
  { month: 'Apr', points: 117, assists: 27 },
];

export const trendComparison = [
  { name: 'Mid-range', value: 31 },
  { name: 'Three-point', value: 41 },
  { name: 'Paint', value: 28 },
];

export const games = [
  { shortName: 'OKC', homeScore: 118, awayScore: 106 },
  { shortName: 'NYK', homeScore: 112, awayScore: 109 },
  { shortName: 'DEN', homeScore: 121, awayScore: 116 },
  { shortName: 'MIL', homeScore: 123, awayScore: 119 },
  { shortName: 'MIN', homeScore: 110, awayScore: 115 },
];
