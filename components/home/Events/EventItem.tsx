import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { View, Text } from "react-native";

interface Props {
  event: EventItemType;
}

const EventItem = ({ event }: Props) => {
  return (
    <View className="flex flex-row items-center">
      <Ionicons name={event.icon} color={"black"} size={18} />
      <Text className="text-sm font-normal">{event.name}</Text>
    </View>
  );
};

export default EventItem;
