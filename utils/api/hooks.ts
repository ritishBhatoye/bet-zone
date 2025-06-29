import { useState, useEffect, useCallback } from "react";
import sportsApiService from "./services";
import { SportType } from "./config";
import { ApiError } from "./types";

interface UseApiState<T> {
  data: T | null;
  loading: boolean;
  error: ApiError | null;
}

interface UseApiReturn<T> extends UseApiState<T> {
  refetch: () => Promise<void>;
  clearError: () => void;
}

// Generic hook for API calls
function useApi<T>(
  apiCall: () => Promise<T>,
  dependencies: any[] = []
): UseApiReturn<T> {
  const [state, setState] = useState<UseApiState<T>>({
    data: null,
    loading: true,
    error: null,
  });

  const fetchData = useCallback(async () => {
    setState((prev) => ({ ...prev, loading: true, error: null }));
    try {
      const data = await apiCall();
      setState({ data, loading: false, error: null });
    } catch (error) {
      setState({
        data: null,
        loading: false,
        error: error as ApiError,
      });
    }
  }, [apiCall]);

  const clearError = useCallback(() => {
    setState((prev) => ({ ...prev, error: null }));
  }, []);

  useEffect(() => {
    fetchData();
  }, dependencies);

  return {
    ...state,
    refetch: fetchData,
    clearError,
  };
}

// Live matches hook
export function useLiveMatches(sport: SportType = "football") {
  return useApi(() => sportsApiService.getLiveMatches(sport), [sport]);
}

// Live matches hook for app (transformed to MatchType format)
export function useLiveMatchesForApp(sport: SportType = "football") {
  return useApi(() => sportsApiService.getLiveMatchesForApp(sport), [sport]);
}

// Today's matches hook
export function useTodayMatches(sport: SportType = "football", date?: string) {
  return useApi(
    () => sportsApiService.getTodayMatches(sport, date),
    [sport, date]
  );
}

// League matches hook
export function useLeagueMatches(
  leagueId: number,
  season: number,
  sport: SportType = "football"
) {
  return useApi(
    () => sportsApiService.getLeagueMatches(leagueId, season, sport),
    [leagueId, season, sport]
  );
}

// Team matches hook
export function useTeamMatches(
  teamId: number,
  season: number,
  sport: SportType = "football"
) {
  return useApi(
    () => sportsApiService.getTeamMatches(teamId, season, sport),
    [teamId, season, sport]
  );
}

// Leagues hook
export function useLeagues(sport: SportType = "football") {
  return useApi(() => sportsApiService.getLeagues(sport), [sport]);
}

// Teams hook
export function useTeams(
  leagueId: number,
  season: number,
  sport: SportType = "football"
) {
  return useApi(
    () => sportsApiService.getTeams(leagueId, season, sport),
    [leagueId, season, sport]
  );
}

// Match details hook
export function useMatchDetails(
  fixtureId: number,
  sport: SportType = "football"
) {
  return useApi(
    () => sportsApiService.getMatchDetails(fixtureId, sport),
    [fixtureId, sport]
  );
}

// Head to head hook
export function useHeadToHead(
  team1Id: number,
  team2Id: number,
  sport: SportType = "football"
) {
  return useApi(
    () => sportsApiService.getHeadToHead(team1Id, team2Id, sport),
    [team1Id, team2Id, sport]
  );
}

// Season stats hook
export function useSeasonStats(
  leagueId: number,
  season: number,
  sport: SportType = "football"
) {
  return useApi(
    () => sportsApiService.getSeasonStats(leagueId, season, sport),
    [leagueId, season, sport]
  );
}

// Custom hook for search with debouncing
export function useTeamSearch(
  initialQuery: string = "",
  sport: SportType = "football"
) {
  const [query, setQuery] = useState(initialQuery);
  const [debouncedQuery, setDebouncedQuery] = useState(initialQuery);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedQuery(query);
    }, 300);

    return () => clearTimeout(timer);
  }, [query]);

  const searchResult = useApi(
    () =>
      debouncedQuery
        ? sportsApiService.searchTeams(debouncedQuery, sport)
        : Promise.resolve([]),
    [debouncedQuery, sport]
  );

  return {
    ...searchResult,
    query,
    setQuery,
  };
}
