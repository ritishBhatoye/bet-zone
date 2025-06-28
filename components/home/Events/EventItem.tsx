import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Text, TouchableOpacity } from "react-native";

interface Props {
  event: EventItemType;
  isActive?: boolean;
  onPress: (event: EventItemType) => void;
}

const EventFilterItem = ({ event, isActive = false, onPress }: Props) => {
  return (
    <TouchableOpacity
      onPress={() => onPress(event)}
      activeOpacity={0.7}
      className={`flex flex-row items-center px-3 py-2 rounded-full border ${
        isActive ? "bg-black border-black" : "bg-gray-200 border-gray-200"
      }`}
    >
      <Ionicons
        name={event.icon}
        color={isActive ? "white" : "#6B7280"}
        size={18}
      />
      {isActive && (
        <Text
          className={`text-sm font-medium ml-2 ${
            isActive ? "text-white" : "text-gray-600"
          }`}
        >
          {event.name}
        </Text>
      )}
    </TouchableOpacity>
  );
};

export default EventFilterItem;
