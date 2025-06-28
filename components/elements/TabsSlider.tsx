import React, { useState } from "react";
import { View, Text, useWindowDimensions } from "react-native";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";

interface TabsSliderProps {
  tabLabel: string[];
  TabScreen: React.ReactNode[];
}

const TabsSlider: React.FC<TabsSliderProps> = ({ tabLabel, TabScreen }) => {
  const layout = useWindowDimensions();
  const [index, setIndex] = useState(0);
  const [routes] = useState(
    tabLabel.map((label, idx) => ({ key: idx.toString(), title: label }))
  );

  // Map each tab to a scene
  const renderScene = SceneMap(
    tabLabel.reduce(
      (scenes, label, idx) => {
        scenes[idx.toString()] = () => (
          <View style={{ flex: 1 }}>{TabScreen[idx]}</View>
        );
        return scenes;
      },
      {} as { [key: string]: React.ComponentType }
    )
  );

  // Custom TabBar for styling
  const renderTabBar = (props: any) => (
    <TabBar
      {...props}
      scrollEnabled
      indicatorStyle={{ backgroundColor: "#000", height: 2, borderRadius: 2 }}
      style={{
        backgroundColor: "transparent",
        elevation: 0,
        shadowOpacity: 0,
        marginBottom: 8,
      }}
      tabStyle={{ width: "auto", paddingHorizontal: 16 }}
      renderLabel={({
        route,
        focused,
      }: {
        route: { title: string };
        focused: boolean;
      }) => (
        <Text
          style={{
            color: focused ? "#000" : "#888",
            fontWeight: focused ? "bold" : "normal",
            fontSize: 16,
          }}
        >
          {route.title}
        </Text>
      )}
    />
  );

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
      renderTabBar={renderTabBar}
      swipeEnabled
    />
  );
};

export default TabsSlider;
