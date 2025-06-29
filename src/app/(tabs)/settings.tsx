import ProfileCard from "@/src/components/settings/ProfileCard";
import React from "react";
import { ScrollView } from "react-native";
import TabsSlider from "@/src/components/elements/TabsSlider";
import { LinearGradient } from "expo-linear-gradient";
import Pick from "@/src/components/settings/TabContent/Pick";
import Wallet from "@/src/components/settings/TabContent/Wallet";
import Social from "@/src/components/settings/TabContent/Social";

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
          <ScrollView showsVerticalScrollIndicator={false} key="Picks">
            <Pick />
          </ScrollView>,
          <ScrollView key="Wallet">
            <Wallet />
          </ScrollView>,
          <ScrollView key="Socials">
            <Social />
          </ScrollView>,
        ]}
      />
    </LinearGradient>
  );
};

export default Settings;
