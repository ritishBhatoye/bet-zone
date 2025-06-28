import React, { useState } from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { BlurView } from "expo-blur";
import { Ionicons } from "@expo/vector-icons";
import MatchLiveCard from "@/components/elements/Cards/MatchLiveCard";
import SearchInputField from "@/components/atoms/SearchInputField";

// Dummy data for demonstration
const matches = [
  {
    id: 1,
    leagueType: "Premier League",
    isLive: true,
    team1: {
      name: "Chelsea",
      logo: "https://upload.wikimedia.org/wikipedia/en/c/cc/Chelsea_FC.svg",
      former: "1",
    },
    team2: {
      name: "Leicester C",
      logo: "https://upload.wikimedia.org/wikipedia/en/2/2d/Leicester_City_crest.svg",
      former: "2",
    },
    score: "0 1",
    duration: "49:30",
    winProbability: [
      { id: 1, team: "Chelsea", probability: "1.8", percentage: 40 },
      { id: 2, team: "Draw", probability: "2.1", percentage: 30 },
      { id: 3, team: "Leicester C", probability: "1.3", percentage: 30 },
    ],
  },
  {
    id: 2,
    leagueType: "UEFA Europa League",
    isLive: false,
    team1: {
      name: "Arsenal",
      logo: "https://upload.wikimedia.org/wikipedia/en/5/53/Arsenal_FC.svg",
      former: "0",
    },
    team2: {
      name: "Roma",
      logo: "https://upload.wikimedia.org/wikipedia/en/f/f7/AS_Roma_logo_%282017%29.svg",
      former: "1",
    },
    score: "0 1",
    duration: "88:42",
    winProbability: [
      { id: 1, team: "Arsenal", probability: "22.8", percentage: 20 },
      { id: 2, team: "Draw", probability: "14.2", percentage: 30 },
      { id: 3, team: "Roma", probability: "12.2", percentage: 50 },
    ],
  },
];

const LiveScreen = () => {
  const [showTicket, setShowTicket] = useState(true);
  const [selectedMatch, setSelectedMatch] = useState(matches[0]);
  const [betAmount, setBetAmount] = useState(200);

  return (
    <View className="flex-1 bg-white dark:bg-black px-2 pt-4">
      {/* Header */}
      <View className="flex-row items-center justify-between mb-4 px-2">
        <Text className="text-lg font-bold tracking-widest">
          <Text className="text-orange-500">● </Text>LIVE{" "}
          <Text className="text-gray-400">LINE</Text>
        </Text>
        <TouchableOpacity>
          <Ionicons name="settings-outline" size={22} color="#888" />
        </TouchableOpacity>
      </View>

      {/* Search and Filters */}
      <View className="mb-3 px-2">
        <SearchInputField fieldText="Search by events, teams" />
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          className="mt-3 flex-row gap-2"
        >
          <TouchableOpacity className="bg-black px-4 py-2 rounded-xl">
            <Text className="text-white font-semibold">Football</Text>
          </TouchableOpacity>
          {[1, 2, 3, 4].map((i) => (
            <TouchableOpacity
              key={i}
              className="bg-gray-200 px-4 py-2 rounded-xl"
            >
              <Ionicons name="stats-chart-outline" size={18} color="#888" />
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      {/* Matches List */}
      <ScrollView showsVerticalScrollIndicator={false} className="flex-1">
        {matches.map((match: any) => (
          <View key={match.id} className="mb-4">
            <MatchLiveCard
              liveItem={match}
              onPress={() => {
                setSelectedMatch(match);
                setShowTicket(true);
              }}
            />
          </View>
        ))}
      </ScrollView>

      {/* Ticket Modal */}
      {showTicket && selectedMatch && (
        <BlurView
          intensity={30}
          tint="light"
          className="absolute left-0 right-0 bottom-0 mx-2 mb-4 rounded-2xl overflow-hidden"
        >
          <View className="p-4">
            <View className="flex-row items-center justify-between mb-2">
              <Text className="font-bold text-base">Ticket</Text>
              <TouchableOpacity onPress={() => setShowTicket(false)}>
                <Ionicons name="close" size={20} color="#888" />
              </TouchableOpacity>
              <Text className="font-bold text-base text-right">$12,580</Text>
            </View>
            <Text className="text-gray-800 font-semibold mb-1">
              {selectedMatch.team1.name} — {selectedMatch.team2.name}
            </Text>
            <Text className="text-xs text-gray-400 mb-2">
              Second participant wins
            </Text>
            <View className="flex-row items-center mb-2">
              <Text className="text-lg font-bold mr-2">
                {selectedMatch.winProbability[2].probability}
              </Text>
              <Text className="text-xs text-gray-400">
                @ {selectedMatch.duration}
              </Text>
            </View>
            <View className="flex-row gap-2 mb-2">
              {[5, 20, 50, 100, 200, 500].map((amt) => (
                <TouchableOpacity
                  key={amt}
                  className={`px-3 py-1.5 rounded-lg border ${betAmount === amt ? "bg-black" : "bg-white"} ${betAmount === amt ? "border-black" : "border-gray-200"}`}
                  onPress={() => setBetAmount(amt)}
                >
                  <Text
                    className={`font-bold ${betAmount === amt ? "text-white" : "text-black"}`}
                  >{`$${amt}`}</Text>
                </TouchableOpacity>
              ))}
            </View>
            <View className="flex-row items-center justify-between mb-14">
              <Text className="text-green-500 font-bold">
                ${betAmount} → ${betAmount * 1.3}
              </Text>
              <TouchableOpacity
                className="bg-orange-500 px-6 py-2 rounded-xl"
                onPress={() => setShowTicket(false)}
              >
                <Text className="text-white font-bold">Make a bet</Text>
              </TouchableOpacity>
            </View>
          </View>
        </BlurView>
      )}
    </View>
  );
};

export default LiveScreen;
