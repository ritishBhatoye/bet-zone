import Ionicons from "@expo/vector-icons/Ionicons";
import React from "react";
import { View, Text } from "react-native";

const TopMenuBar = () => {
  return (
    <View className="flex flex-row items-end justify-between px-8 ">
      <View className="flex flex-col">
        <Text className="text-lg font-normal">Hello,</Text>
        <Text className="text-lg font-semibold">RAHUL BHATOYE</Text>
      </View>
      <Ionicons
        name="add-outline"
        color={"white"}
        size={20}
        className="p-2 rounded-lg bg-orange-500"
      />
    </View>
  );
};

export default TopMenuBar;
