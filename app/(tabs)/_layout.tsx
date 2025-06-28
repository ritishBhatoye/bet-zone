import { Router, Tabs, useRouter } from "expo-router";
import React from "react";

import Ionicons from "@expo/vector-icons/Ionicons";
import { HapticTab } from "@/components/HapticTab";

import { useColorScheme } from "@/hooks/useColorScheme";
import TopMenuBar from "@/components/home/TopMenuBar";
import { SafeAreaView } from "react-native";

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const router: Router = useRouter();
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#ffffff",
        headerShown: false,
        tabBarButton: HapticTab,
        // tabBarBackground: TabBarBackground,
        tabBarStyle: {
          position: "absolute",
          backgroundColor: "#000000",
          borderTopWidth: 0,
          paddingTop: 20,
          elevation: 0,
          marginHorizontal: 20,
          bottom: 20,
          borderRadius: 40,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          header: () => (
            <SafeAreaView className="bg-white">
              <TopMenuBar />
            </SafeAreaView>
          ),
          headerShown: true,
          title: "",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              size={28}
              name={focused ? "flame" : "flame-outline"}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="live"
        options={{
          title: "",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              size={28}
              name={focused ? "football-outline" : "football-outline"}
              color={color}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="settings"
        options={{
          headerLeft: () => (
            <Ionicons
              onPress={() => router.back()}
              name="chevron-back-outline"
              color={"white"}
              size={27}
            />
          ),
          title: "",
          headerStyle: { backgroundColor: "#000" },
          headerShown: true,
          headerTitle: "Profile",
          headerTitleStyle: { color: "#fff", fontWeight: 600, fontSize: 20 },
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              size={28}
              name={focused ? "menu-outline" : "menu"}
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  );
}
