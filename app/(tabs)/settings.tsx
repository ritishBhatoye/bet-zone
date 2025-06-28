import ProfileCard from "@/components/settings/ProfileCard";
import React from "react";
import { Text, SafeAreaView, View } from "react-native";
import TabsSlider from "@/components/elements/TabsSlider";

const Settings = () => {
  return (
    <SafeAreaView style={{ flex: 1 }} className="'flex-1">
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
    </SafeAreaView>
  );
};

export default Settings;
