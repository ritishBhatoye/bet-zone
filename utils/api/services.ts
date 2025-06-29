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

  // Transform API data to match existing MatchType interface
  async getLiveMatchesForApp(
    sport: SportType = "football"
  ): Promise<MatchType[]> {
    try {
      const liveMatches = await this.getLiveMatches(sport);

      return liveMatches.map((match, index) => ({
        id: match.fixture.id,
        sport: sport,
        leagueType: match.league.name,
        duration: this.formatDuration(match.fixture.status),
        score: this.formatScore(match.goals),
        team1: {
          name: match.teams.home.name,
          logo: match.teams.home.logo,
          former: match.teams.home.name.substring(0, 3).toUpperCase(),
        },
        team2: {
          name: match.teams.away.name,
          logo: match.teams.away.logo,
          former: match.teams.away.name.substring(0, 3).toUpperCase(),
        },
        winProbability: this.generateWinProbability(match),
        isLive: true,
        matchStatus: "live" as const,
      }));
    } catch (error) {
      console.error("Error fetching live matches:", error);
      return [];
    }
  }

  private formatDuration(status: {
    long: string;
    short: string;
    elapsed: number | null;
  }): string {
    if (status.elapsed) {
      return `${status.elapsed}'`;
    }
    return status.short || "Live";
  }

  private formatScore(goals: {
    home: number | null;
    away: number | null;
  }): string {
    const home = goals.home || 0;
    const away = goals.away || 0;
    return `${home} - ${away}`;
  }

  private generateWinProbability(match: LiveMatch): Array<{
    id: number;
    team: string;
    probability: string;
    percentage: number;
  }> {
    // This is a simplified probability calculation
    // In a real app, you'd get this from betting odds or analytics
    const homeScore = match.goals.home || 0;
    const awayScore = match.goals.away || 0;

    let homeProb = 33;
    let awayProb = 33;
    let drawProb = 34;

    if (homeScore > awayScore) {
      homeProb = 50;
      awayProb = 25;
      drawProb = 25;
    } else if (awayScore > homeScore) {
      homeProb = 25;
      awayProb = 50;
      drawProb = 25;
    }

    return [
      {
        id: 1,
        team: match.teams.home.name.substring(0, 3).toUpperCase(),
        probability: `${homeProb}%`,
        percentage: homeProb,
      },
      {
        id: 2,
        team: "Draw",
        probability: `${drawProb}%`,
        percentage: drawProb,
      },
      {
        id: 3,
        team: match.teams.away.name.substring(0, 3).toUpperCase(),
        probability: `${awayProb}%`,
        percentage: awayProb,
      },
    ];
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
