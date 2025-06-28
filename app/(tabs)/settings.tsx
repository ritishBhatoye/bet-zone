import ProfileCard from "@/components/settings/ProfileCard";
import React from "react";
import { Text, View } from "react-native";
import TabsSlider from "@/components/elements/TabsSlider";
import { LinearGradient } from "expo-linear-gradient";

const Settings = () => {
  return (
    <LinearGradient
      colors={["#FFF9", "#2239", "#222C", "#222F", "#000C", "#000F", "#000000"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 2 }}
      style={{ flex: 1, borderRadius: 12, padding: 20, gap: 20 }}
    >
      <ProfileCard />
      <TabsSlider
        tabLabel={["Picks", "Wallet", "Socials"]}
        TabScreen={[
          <View key="Picks">
            <Text>Picks content goes here.</Text>
          </View>,
          <View key="Wallet">
            <Text>Wallet content goes here.</Text>
          </View>,
          <View key="Socials">
            <Text>Socials content goes here.</Text>
          </View>,
        ]}
      />
    </LinearGradient>
  );
};

export default Settings;
