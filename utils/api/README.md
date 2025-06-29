# Sports API Setup

This is an optimized API setup for the API-Sports service that allows you to easily switch between different sports by changing the sport name in the URL.

## Features

- 🏈 **Multi-sport support** - Switch between football, basketball, tennis, cricket, and more
- 🔄 **Automatic caching** - 5-minute cache to reduce API calls
- 🎣 **React hooks** - Easy integration with React components
- 🛡️ **Error handling** - Comprehensive error handling and retry logic
- 📱 **TypeScript support** - Full type safety
- ⚡ **Optimized performance** - Singleton pattern and efficient request handling

## Quick Start

### 1. Basic Usage

```typescript
import { useLiveMatches, SPORTS } from '@/utils/api';

// In your component
const { data: matches, loading, error } = useLiveMatches('football');
```

### 2. Switch Sports

```typescript
import { sportsApiService, SPORTS } from '@/utils/api';

// Change sport dynamically
sportsApiService.setSport('basketball');
const basketballMatches = await sportsApiService.getLiveMatches('basketball');
```

## Available Sports

```typescript
import { SPORTS } from '@/utils/api';

// Available sports:
SPORTS.FOOTBALL    // 'football'
SPORTS.BASKETBALL  // 'basketball'
SPORTS.TENNIS      // 'tennis'
SPORTS.CRICKET     // 'cricket'
SPORTS.HOCKEY      // 'hockey'
SPORTS.BASEBALL    // 'baseball'
SPORTS.VOLLEYBALL  // 'volleyball'
SPORTS.RUGBY       // 'rugby'
SPORTS.MMA         // 'mma'
SPORTS.BOXING      // 'boxing'
```

## API Hooks

### Live Matches
```typescript
const { data, loading, error, refetch } = useLiveMatches('football');
```

### Today's Matches
```typescript
const { data, loading, error, refetch } = useTodayMatches('football', '2024-01-15');
```

### League Matches
```typescript
const { data, loading, error, refetch } = useLeagueMatches(leagueId, season, 'football');
```

### Team Matches
```typescript
const { data, loading, error, refetch } = useTeamMatches(teamId, season, 'football');
```

### Leagues
```typescript
const { data, loading, error, refetch } = useLeagues('football');
```

### Teams
```typescript
const { data, loading, error, refetch } = useTeams(leagueId, season, 'football');
```

### Match Details
```typescript
const { data, loading, error, refetch } = useMatchDetails(fixtureId, 'football');
```

### Head to Head
```typescript
const { data, loading, error, refetch } = useHeadToHead(team1Id, team2Id, 'football');
```

### Season Stats
```typescript
const { data, loading, error, refetch } = useSeasonStats(leagueId, season, 'football');
```

### Team Search (with debouncing)
```typescript
const { data, loading, error, query, setQuery } = useTeamSearch('', 'football');
```

## Direct Service Usage

```typescript
import { sportsApiService } from '@/utils/api';

// Get live matches
const liveMatches = await sportsApiService.getLiveMatches('football');

// Get today's matches
const todayMatches = await sportsApiService.getTodayMatches('football');

// Get league matches
const leagueMatches = await sportsApiService.getLeagueMatches(leagueId, season, 'football');

// Search teams
const teams = await sportsApiService.searchTeams('Manchester', 'football');

// Get match details
const matchDetails = await sportsApiService.getMatchDetails(fixtureId, 'football');
```

## Integration with TopEvents Component

Here's how to integrate with your existing TopEvents component:

```typescript
import React, { useState } from 'react';
import { useLiveMatches, useTodayMatches, SPORTS, SportType } from '@/utils/api';

const TopEvents = () => {
  const [selectedSport, setSelectedSport] = useState<SportType>('football');
  const [isEventActive, setIsEventActive] = useState(false);

  // Use hooks for data fetching
  const { data: liveMatches, loading: liveLoading } = useLiveMatches(selectedSport);
  const { data: todayMatches, loading: todayLoading } = useTodayMatches(selectedSport);

  // Get appropriate data based on live toggle
  const matches = isEventActive ? liveMatches : todayMatches;
  const loading = isEventActive ? liveLoading : todayLoading;

  return (
    <View className="flex flex-col gap-5">
      {/* Your existing UI */}
      <View className="flex-row justify-between items-center px-5">
        <Text className="text-gray-500 font-avalar text-2xl">Top Events</Text>
        <View className="flex-row gap-1.5 items-center">
          <Text className="text-red-500 font-montserrat-bold text-lg">LIVE</Text>
          <Switch
            size="small"
            value={isEventActive}
            onValueChange={setIsEventActive}
          />
        </View>
      </View>

      {/* Sport selector */}
      <FlatList
        data={Object.values(SPORTS)}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 16, gap: 8 }}
        renderItem={({ item: sport }) => (
          <EventFilterItem
            key={sport}
            event={{ id: sport, name: sport }}
            isActive={selectedSport === sport}
            onPress={() => setSelectedSport(sport)}
          />
        )}
      />

      {/* Matches list */}
      <ScrollView
        style={{ flexGrow: 0 }}
        contentContainerStyle={{ paddingHorizontal: 16, gap: 16 }}
      >
        {loading ? (
          <ActivityIndicator size="large" color="#0000ff" />
        ) : matches && matches.length > 0 ? (
          matches.map((match) => (
            <MatchLiveCard key={match.fixture.id} liveItem={match} />
          ))
        ) : (
          <Text className="text-center text-gray-400 mt-8 font-montserrat">
            No matches found for {selectedSport}.
          </Text>
        )}
      </ScrollView>
    </View>
  );
};
```

## Error Handling

All hooks and services include comprehensive error handling:

```typescript
const { data, loading, error, refetch, clearError } = useLiveMatches('football');

if (error) {
  console.error('API Error:', error.message);
  // Show error message to user
  Alert.alert('Error', error.message);
}

// Clear error and retry
clearError();
refetch();
```

## Caching

The API client includes automatic caching with a 5-minute duration:

```typescript
import { apiClient } from '@/utils/api';

// Clear all cache
apiClient.clearCache();

// Clear cache for specific sport
apiClient.clearCacheEntry('football');
```

## Configuration

The API configuration is centralized in `config.ts`:

```typescript
export const API_CONFIG = {
  BASE_URL: 'https://v3.football.api-sports.io',
  API_KEY: 'd34cf3b60fc3c5b01bb1786164969cda',
  HEADERS: {
    'x-apisports-key': 'd34cf3b60fc3c5b01bb1786164969cda',
    'Content-Type': 'application/json',
  },
};
```

## TypeScript Types

All API responses are fully typed:

```typescript
import { Match, LiveMatch, Team, League, ApiResponse } from '@/utils/api';

// Use types in your components
const [matches, setMatches] = useState<LiveMatch[]>([]);
```

## Performance Tips

1. **Use hooks for automatic caching** - Hooks automatically cache responses
2. **Clear cache when needed** - Use `clearCache()` for fresh data
3. **Debounced search** - Use `useTeamSearch` for search functionality
4. **Error boundaries** - Wrap API calls in error boundaries
5. **Loading states** - Always show loading states for better UX

## File Structure

```
utils/api/
├── config.ts          # API configuration and constants
├── types.ts           # TypeScript type definitions
├── client.ts          # Main API client with caching
├── services.ts        # Specific API service methods
├── hooks.ts           # React hooks for easy integration
├── index.ts           # Main exports
├── example-usage.tsx  # Usage examples
└── README.md          # This documentation
``` 