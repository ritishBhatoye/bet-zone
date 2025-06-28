// Dummy data for demonstration
export const matches = [
  {
    id: 1,
    leagueType: "Premier League",
    isLive: true,
    team1: {
      name: "Chelsea",
      logo: "https://upload.wikimedia.org/wikipedia/en/c/cc/Chelsea_FC.svg",
      former: "1",
    },
    team2: {
      name: "Leicester C",
      logo: "https://upload.wikimedia.org/wikipedia/en/2/2d/Leicester_City_crest.svg",
      former: "2",
    },
    score: "0 1",
    duration: "49:30",
    winProbability: [
      { id: 1, team: "Chelsea", probability: "1.8", percentage: 40 },
      { id: 2, team: "Draw", probability: "2.1", percentage: 30 },
      { id: 3, team: "Leicester C", probability: "1.3", percentage: 30 },
    ],
  },
  {
    id: 2,
    leagueType: "UEFA Europa League",
    isLive: false,
    team1: {
      name: "Arsenal",
      logo: "https://upload.wikimedia.org/wikipedia/en/5/53/Arsenal_FC.svg",
      former: "0",
    },
    team2: {
      name: "Roma",
      logo: "https://upload.wikimedia.org/wikipedia/en/f/f7/AS_Roma_logo_%282017%29.svg",
      former: "1",
    },
    score: "0 1",
    duration: "88:42",
    winProbability: [
      { id: 1, team: "Arsenal", probability: "22.8", percentage: 20 },
      { id: 2, team: "Draw", probability: "14.2", percentage: 30 },
      { id: 3, team: "Roma", probability: "12.2", percentage: 50 },
    ],
  },
];
