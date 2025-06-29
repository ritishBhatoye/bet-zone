export const API_CONFIG = {
  BASE_URL: "https://v3.football.api-sports.io",
  API_KEY: "d34cf3b60fc3c5b01bb1786164969cda",
  HEADERS: {
    "x-apisports-key": "d34cf3b60fc3c5b01bb1786164969cda",
    "Content-Type": "application/json",
  },
} as const;

export const SPORTS = {
  FOOTBALL: "football",
  BASKETBALL: "basketball",
  TENNIS: "tennis",
  CRICKET: "cricket",
  HOCKEY: "hockey",
  BASEBALL: "baseball",
  VOLLEYBALL: "volleyball",
  RUGBY: "rugby",
  MMA: "mma",
  BOXING: "boxing",
} as const;

export type SportType = (typeof SPORTS)[keyof typeof SPORTS];

export const getApiUrl = (sport: SportType = SPORTS.FOOTBALL): string => {
  return `https://v3.${sport}.api-sports.io`;
};
