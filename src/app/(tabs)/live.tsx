import SearchInputField from "@/components/atoms/SearchInputField";
import TabsSlider from "@/components/elements/TabsSlider";
import LiveScreen from "@/components/live/LiveScreen";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
} from "react-native";

const Live = () => {
  return (
    <SafeAreaView className="flex-1">
      <View className="flex-row items-center justify-between mb-4 px-2">
        <Text className="text-lg font-bold tracking-widest">
          <Text className="text-orange-500">● </Text>LIVE{" "}
          <Text className="text-gray-400">LINE</Text>
        </Text>
        <TouchableOpacity>
          <Ionicons name="settings-outline" size={22} color="#888" />
        </TouchableOpacity>
      </View>
      <View className="mb-3 px-2">
        <SearchInputField fieldText="Search by events, teams and players" />
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
      <TabsSlider
        tabLabel={["Upcoming", "Live"]}
        TabScreen={[
          <ScrollView showsVerticalScrollIndicator={false} key="Upcoming">
            <></>
          </ScrollView>,
          <ScrollView key="Live">
            <LiveScreen />
          </ScrollView>,
        ]}
      />
    </SafeAreaView>
  );
};

export default Live;
