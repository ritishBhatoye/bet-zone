import apiClient from "./client";
import { Match, LiveMatch, Team, League, ApiResponse } from "./types";
import { SportType } from "./config";

// eslint-disable-next-line import/export
export class SportsApiService {
  // Live matches
  async getLiveMatches(sport: SportType = "football"): Promise<LiveMatch[]> {
    apiClient.setSport(sport);
    const response = await apiClient.get<Match[]>("/fixtures", {
      live: "all",
    });

    return response.response.map((match) => ({
      ...match,
      isLive: true,
      matchStatus: "live" as const,
    }));
  }

  // Today's matches
  async getTodayMatches(
    sport: SportType = "football",
    date?: string
  ): Promise<Match[]> {
    apiClient.setSport(sport);
    const today = date || new Date().toISOString().split("T")[0];
    const response = await apiClient.get<Match[]>("/fixtures", {
      date: today,
    });

    return response.response;
  }

  // League matches
  async getLeagueMatches(
    leagueId: number,
    season: number,
    sport: SportType = "football"
  ): Promise<Match[]> {
    apiClient.setSport(sport);
    const response = await apiClient.get<Match[]>("/fixtures", {
      league: leagueId.toString(),
      season: season.toString(),
    });

    return response.response;
  }

  // Team matches
  async getTeamMatches(
    teamId: number,
    season: number,
    sport: SportType = "football"
  ): Promise<Match[]> {
    apiClient.setSport(sport);
    const response = await apiClient.get<Match[]>("/fixtures", {
      team: teamId.toString(),
      season: season.toString(),
    });

    return response.response;
  }

  // Leagues
  async getLeagues(sport: SportType = "football"): Promise<League[]> {
    apiClient.setSport(sport);
    const response = await apiClient.get<League[]>("/leagues");
    return response.response;
  }

  // Teams
  async getTeams(
    leagueId: number,
    season: number,
    sport: SportType = "football"
  ): Promise<Team[]> {
    apiClient.setSport(sport);
    const response = await apiClient.get<Team[]>("/teams", {
      league: leagueId.toString(),
      season: season.toString(),
    });

    return response.response;
  }

  // Search teams
  async searchTeams(
    query: string,
    sport: SportType = "football"
  ): Promise<Team[]> {
    apiClient.setSport(sport);
    const response = await apiClient.get<Team[]>("/teams", {
      search: query,
    });

    return response.response;
  }

  // Match details
  async getMatchDetails(
    fixtureId: number,
    sport: SportType = "football"
  ): Promise<Match> {
    apiClient.setSport(sport);
    const response = await apiClient.get<Match[]>("/fixtures", {
      id: fixtureId.toString(),
    });

    return response.response[0];
  }

  // Head to head matches
  async getHeadToHead(
    team1Id: number,
    team2Id: number,
    sport: SportType = "football"
  ): Promise<Match[]> {
    apiClient.setSport(sport);
    const response = await apiClient.get<Match[]>("/fixtures", {
      h2h: `${team1Id}-${team2Id}`,
    });

    return response.response;
  }

  // Season statistics
  async getSeasonStats(
    leagueId: number,
    season: number,
    sport: SportType = "football"
  ): Promise<any> {
    apiClient.setSport(sport);
    const response = await apiClient.get<any>("/standings", {
      league: leagueId.toString(),
      season: season.toString(),
    });

    return response.response;
  }

  // Clear cache for specific sport
  clearSportCache(sport: SportType): void {
    apiClient.clearCacheEntry(sport);
  }
}

// Create singleton instance
const sportsApiService = new SportsApiService();

export default sportsApiService;
