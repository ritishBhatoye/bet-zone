// Configuration
export { API_CONFIG, SPORTS, getApiUrl } from "./config";
export type { SportType } from "./config";

// Types
export type {
  ApiResponse,
  Match,
  LiveMatch,
  Team,
  League,
  EventItemType,
  ApiError,
} from "./types";

// Client
export { default as apiClient, ApiClient } from "./client";

// Services
export { default as sportsApiService, SportsApiService } from "./services";

// Hooks
export {
  useLiveMatches,
  useLiveMatchesForApp,
  useTodayMatches,
  useLeagueMatches,
  useTeamMatches,
  useLeagues,
  useTeams,
  useMatchDetails,
  useHeadToHead,
  useSeasonStats,
  useTeamSearch,
} from "./hooks";
