import { TopEventsFilterData } from "@/constants/home";
import React, { useState } from "react";
import { FlatList, View, Text } from "react-native";
import EventFilterItem from "./EventItem";
import Switch from "@/components/atoms/Switch";

const TopEvents = () => {
  const [isEventActive, setIsEventActive] = useState(false);
  const [selectedEventId, setSelectedEventId] = useState<number | null>(null);

  const handleEventItemPress = (event: EventItemType) => {
    setSelectedEventId(event.id);
  };

  return (
    <View className="flex flex-col gap-5">
      <View className="flex-row justify-between items-center px-5">
        <Text className="text-gray-500 font-bold text-lg">Top Events</Text>
        <View className="flex-row gap-1.5 items-center">
          <Text className="text-gray-500 font-bold text-sm">LIVE</Text>
          <Switch
            size="small"
            value={isEventActive}
            onValueChange={setIsEventActive}
          />
        </View>
      </View>

      <FlatList
        data={TopEventsFilterData}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 16, gap: 8 }}
        renderItem={({ item }) => (
          <EventFilterItem
            key={item.id}
            event={item}
            isActive={selectedEventId === item.id}
            onPress={handleEventItemPress}
          />
        )}
      />
    </View>
  );
};

export default TopEvents;
