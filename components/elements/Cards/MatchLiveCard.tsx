import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";

import { View, Text } from "react-native";

interface props {
  liveItem: any;
}

const MatchLiveCard = ({ liveItem }: props) => {
  return (
    <LinearGradient
      colors={["#fff", "#ffff", "#ffff"]}
      locations={[1, 1, 0.1]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      className="w-10/12"
      style={{ borderRadius: 24 }}
    >
      <View className="p-5">
        <View className="flex-row justify-evenly gap-3 px-2">
          <View className="flex-col items-center">
            <Image source={liveItem.team.logo} />
            <Text className="text-lg text-black font-medium">
              {liveItem.team.formar}
            </Text>
          </View>
          <View className="flex-col items-center">
            <Text className="text-xs font-normal text-gray-400">
              {liveItem.leagueType}
            </Text>
            <Text className="text-black text-2xl font-medium">
              {liveItem.score}
            </Text>
            <Text className="text-xs font-normal text-gray-400">
              {liveItem.duration}
            </Text>
          </View>
          <View className="flex-col items-center">
            <Image source={liveItem.team.logo} />
            <Text className="text-lg text-black font-medium">
              {liveItem.team.formar}
            </Text>
          </View>
        </View>
        <View className="gap-3 flex-row justify-around px-2">
          {liveItem.winProbability.map((win: any) => (
            <View key={win.id} className="p-5 bg-gray-300 ">
              <Text className="text-black font-semibold text-base">
                {win.probability}
              </Text>
            </View>
          ))}
        </View>
      </View>
    </LinearGradient>
  );
};

export default MatchLiveCard;
