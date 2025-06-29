import TabsSlider from "@/components/elements/TabsSlider";
import LiveScreen from "@/components/live/LiveScreen";
import React from "react";
import { SafeAreaView, ScrollView } from "react-native";

const Live = () => {
  return (
    <SafeAreaView className="flex-1">
      <TabsSlider
        tabLabel={["Upcoming", "Live"]}
        TabScreen={[
          <ScrollView showsVerticalScrollIndicator={false} key="Upcomming">
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
