import { TopEventsFilterData, matchLiveDummyData } from "@/constants/home";
import React, { useState } from "react";
import { FlatList, View, Text, ScrollView } from "react-native";
import EventFilterItem from "./EventItem";
import Switch from "@/components/atoms/Switch";
import MatchLiveCard from "@/components/elements/Cards/MatchLiveCard";

const TopEvents = () => {
  const [isEventActive, setIsEventActive] = useState(false);
  const [selectedEventId, setSelectedEventId] = useState<number | null>(null);

  const handleEventItemPress = (event: EventItemType) => {
    setSelectedEventId(event.id);
  };

  // Find selected event name for filtering
  const selectedEvent = TopEventsFilterData.find(
    (e) => e.id === selectedEventId
  );
  const selectedEventName = selectedEvent ? selectedEvent.name : null;

  // Filter matches by event and live status
  const filteredMatches = matchLiveDummyData.filter((match) => {
    const eventMatch = selectedEventName
      ? match.sport === selectedEventName.toLowerCase()
      : true;
    const liveMatch = isEventActive
      ? match.isLive && match.matchStatus === "live"
      : true;
    return eventMatch && liveMatch;
  });

  return (
    <View className="flex flex-col gap-5">
      <View className="flex-row justify-between items-center px-5">
        <Text className="text-gray-500 font-avalar text-2xl">Top Events</Text>
        <View className="flex-row gap-1.5 items-center">
          <Text className="text-red-500 font-montserrat-bold text-lg">
            LIVE
          </Text>
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

      <ScrollView
        style={{ flexGrow: 0 }}
        contentContainerStyle={{ paddingHorizontal: 16, gap: 16 }}
      >
        {filteredMatches.length > 0 ? (
          filteredMatches.map((match) => (
            <MatchLiveCard key={match.id} liveItem={match} />
          ))
        ) : (
          <Text className="text-center text-gray-400 mt-8 font-montserrat">
            No matches found for this event.
          </Text>
        )}
      </ScrollView>
    </View>
  );
};

export default TopEvents;
