import React, { useState } from "react";
import { View, Text, ActivityIndicator, Alert } from "react-native";
import {
  useLiveMatches,
  useTodayMatches,
  SPORTS,
  SportType,
  LiveMatch,
} from "./index";

// Example of how to use the API with your existing TopEvents component
export const TopEventsWithAPI = () => {
  const [selectedSport, setSelectedSport] = useState<SportType>("football");
  const [isLiveActive, setIsLiveActive] = useState(false);

  // Use the live matches hook
  const {
    data: liveMatches,
    loading: liveLoading,
    error: liveError,
    refetch: refetchLive,
  } = useLiveMatches(selectedSport);

  // Use the today's matches hook
  const {
    data: todayMatches,
    loading: todayLoading,
    error: todayError,
    refetch: refetchToday,
  } = useTodayMatches(selectedSport);

  // Handle sport change
  const handleSportChange = (sport: SportType) => {
    setSelectedSport(sport);
  };

  // Handle errors
  React.useEffect(() => {
    if (liveError) {
      Alert.alert("Error", liveError.message);
    }
    if (todayError) {
      Alert.alert("Error", todayError.message);
    }
  }, [liveError, todayError]);

  // Get the appropriate data based on live toggle
  const matches = isLiveActive ? liveMatches : todayMatches;
  const loading = isLiveActive ? liveLoading : todayLoading;

  if (loading) {
    return (
      <View className="flex-1 justify-center items-center">
        <ActivityIndicator size="large" color="#0000ff" />
        <Text className="mt-2 text-gray-600">Loading matches...</Text>
      </View>
    );
  }

  return (
    <View className="flex flex-col gap-5">
      <View className="flex-row justify-between items-center px-5">
        <Text className="text-gray-500 font-avalar text-2xl">Top Events</Text>
        <View className="flex-row gap-1.5 items-center">
          <Text className="text-red-500 font-montserrat-bold text-lg">
            LIVE
          </Text>
          {/* Add your Switch component here */}
        </View>
      </View>

      {/* Sport selector */}
      <View className="flex-row gap-2 px-5">
        {Object.values(SPORTS).map((sport) => (
          <Text
            key={sport}
            className={`px-3 py-2 rounded-full ${
              selectedSport === sport
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
            onPress={() => handleSportChange(sport)}
          >
            {sport.charAt(0).toUpperCase() + sport.slice(1)}
          </Text>
        ))}
      </View>

      {/* Matches list */}
      <View className="px-5">
        {matches && matches.length > 0 ? (
          matches.map((match) => (
            <View
              key={match.fixture.id}
              className="mb-4 p-4 bg-white rounded-lg shadow"
            >
              <Text className="font-bold text-lg">
                {match.teams.home.name} vs {match.teams.away.name}
              </Text>
              <Text className="text-gray-600">
                {match.league.name} - {match.league.country.name}
              </Text>
              {isLiveActive && (
                <Text className="text-red-500 font-bold">
                  LIVE - {match.fixture.status.elapsed}&apos;
                </Text>
              )}
            </View>
          ))
        ) : (
          <Text className="text-center text-gray-400 mt-8">
            No matches found for {selectedSport}.
          </Text>
        )}
      </View>

      {/* Refresh button */}
      <View className="px-5">
        <Text
          className="text-center text-blue-500 py-2"
          onPress={() => {
            if (isLiveActive) {
              refetchLive();
            } else {
              refetchToday();
            }
          }}
        >
          Refresh
        </Text>
      </View>
    </View>
  );
};

// Example of how to use the API service directly
export const useSportsAPIExample = () => {
  const [matches, setMatches] = useState<LiveMatch[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchMatches = async (sport: SportType = "football") => {
    setLoading(true);
    try {
      // Import the service
      const sportsApiService = (await import("./services")).default;

      // Get live matches
      const liveMatches = await sportsApiService.getLiveMatches(sport);
      setMatches(liveMatches);
    } catch (error) {
      console.error("Error fetching matches:", error);
    } finally {
      setLoading(false);
    }
  };

  return { matches, loading, fetchMatches };
};
