import LiveScreen from "@/components/live/LiveScreen";
import React from "react";
import { Text, SafeAreaView } from "react-native";

const Live = () => {
  return (
    <SafeAreaView className="flex-1">
      <LiveScreen />
    </SafeAreaView>
  );
};

export default Live;
