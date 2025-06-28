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

interface ActionTileDataType {
  title: string;
  subTitle: string;
  leadingIcon?: {
    type: any;
    name: string;
    size: number;
    color: string;
  };
  trailingIcon?: {
    type: any;
    name: string;
    size: number;
    color: string;
  };
}

interface MatchType {
  id: number;
  sport: string;
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
