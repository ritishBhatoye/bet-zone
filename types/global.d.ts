// import { Ionicons } from "@expo/vector-icons";

// type IoniconName = React.ComponentProps<typeof Ionicons>["name"];

interface FilterType {
  id: number;
  label: string;
  icon: string;
}

interface SliderCardType {
  id: number;
  matchType: string;
  event: string;
  image: string;
  color: string;
}

interface EventItemType {
  id: number;
  name: string;
  icon: any;
}

interface MatchType {
  id: number;
  leagueType: string;
  duration: string;
  score: string;
  team1: {
    name: string;
    logo: string;
    former: string;
  };
  team2: {
    name: string;
    logo: string;
    former: string;
  };
  winProbability: Array<{
    id: number;
    team: string;
    probability: string;
    percentage: number;
  }>;
  isLive?: boolean;
  matchStatus?: "live" | "upcoming" | "finished";
}
