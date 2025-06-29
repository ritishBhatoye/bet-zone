import React, { useState } from "react";
import { View, Text, ActivityIndicator, Alert, ScrollView } from "react-native";
import {
  useLiveMatches,
  useTodayMatches,
  SPORTS,
  SportType,
  LiveMatch,
  useLiveMatchesForApp,
  MatchType,
} from "./index";
import MatchLiveCard from "@/components/elements/Cards/MatchLiveCard";

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

// Example of how to use the live API with your existing MatchLiveCard component
export const LiveMatchesExample = () => {
  const [selectedSport, setSelectedSport] = useState<SportType>("football");

  // Use the live matches hook that returns data in MatchType format
  const {
    data: liveMatches,
    loading,
    error,
    refetch,
  } = useLiveMatchesForApp(selectedSport);

  // Handle sport change
  const handleSportChange = (sport: SportType) => {
    setSelectedSport(sport);
  };

  // Handle errors
  React.useEffect(() => {
    if (error) {
      Alert.alert("Error", error.message);
    }
  }, [error]);

  if (loading) {
    return (
      <View className="flex-1 justify-center items-center">
        <ActivityIndicator size="large" color="#0000ff" />
        <Text className="mt-2 text-gray-600">Loading live matches...</Text>
      </View>
    );
  }

  return (
    <View className="flex-1 bg-white">
      {/* Sport Selection */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        className="p-4"
      >
        {Object.values(SPORTS).map((sport) => (
          <View
            key={sport}
            className={`mr-2 px-4 py-2 rounded-lg ${
              selectedSport === sport ? "bg-blue-500" : "bg-gray-200"
            }`}
          >
            <Text
              className={`font-semibold ${
                selectedSport === sport ? "text-white" : "text-gray-700"
              }`}
              onPress={() => handleSportChange(sport)}
            >
              {sport.charAt(0).toUpperCase() + sport.slice(1)}
            </Text>
          </View>
        ))}
      </ScrollView>

      {/* Live Matches */}
      <ScrollView className="flex-1 px-4">
        {liveMatches && liveMatches.length > 0 ? (
          liveMatches.map((match: MatchType) => (
            <View key={match.id} className="mb-4">
              <MatchLiveCard liveItem={match} />
            </View>
          ))
        ) : (
          <View className="flex-1 justify-center items-center">
            <Text className="text-gray-500 text-center">
              No live matches available for {selectedSport}
            </Text>
          </View>
        )}
      </ScrollView>

      {/* Refresh Button */}
      <View className="p-4">
        <Text
          className="text-blue-500 text-center font-semibold"
          onPress={refetch}
        >
          Refresh Data
        </Text>
      </View>
    </View>
  );
};

// Example showing the difference between raw API data and transformed data
export const DataTransformationExample = () => {
  const [selectedSport, setSelectedSport] = useState<SportType>("football");

  // Raw API data (original format)
  const { data: rawMatches, loading: rawLoading } =
    useLiveMatches(selectedSport);

  // Transformed data (MatchType format for the app)
  const { data: transformedMatches, loading: transformedLoading } =
    useLiveMatchesForApp(selectedSport);

  return (
    <View className="flex-1 bg-white p-4">
      <Text className="text-lg font-bold mb-4">
        Data Transformation Example
      </Text>

      <View className="mb-6">
        <Text className="font-semibold mb-2">Raw API Data:</Text>
        {rawLoading ? (
          <Text>Loading raw data...</Text>
        ) : (
          <Text className="text-sm text-gray-600">
            {rawMatches ? `${rawMatches.length} matches` : "No data"}
          </Text>
        )}
      </View>

      <View className="mb-6">
        <Text className="font-semibold mb-2">
          Transformed Data (MatchType):
        </Text>
        {transformedLoading ? (
          <Text>Loading transformed data...</Text>
        ) : (
          <Text className="text-sm text-gray-600">
            {transformedMatches
              ? `${transformedMatches.length} matches`
              : "No data"}
          </Text>
        )}
      </View>

      {/* Show transformed matches with MatchLiveCard */}
      {transformedMatches && transformedMatches.length > 0 && (
        <View>
          <Text className="font-semibold mb-2">
            Rendered with MatchLiveCard:
          </Text>
          <ScrollView>
            {transformedMatches.slice(0, 2).map((match: MatchType) => (
              <View key={match.id} className="mb-4">
                <MatchLiveCard liveItem={match} />
              </View>
            ))}
          </ScrollView>
        </View>
      )}
    </View>
  );
};
