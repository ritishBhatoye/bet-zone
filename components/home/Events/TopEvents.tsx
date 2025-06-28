import { TopEventsFilterData } from "@/constants/home";
import React from "react";
import { FlatList, ScrollView, View } from "react-native";
import EventFilterItem from "./EventItem";

const TopEvents = () => {
  return (
    <View className="flex flex-col">
      <View className="flex-row justify-between">TopEvents</View>
      <ScrollView horizontal>
        {/* <Filter filter={} /> */}
        <FlatList
          data={TopEventsFilterData}
          renderItem={({ item }) => (
            <EventFilterItem
              event={item}
              onPress={function (event: EventItemType): void {
                throw new Error("Function not implemented.");
              }}
            />
          )}
        />
      </ScrollView>
    </View>
  );
};

export default TopEvents;
