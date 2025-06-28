import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Image } from "expo-image";
const ProfileCard = () => {
  return (
    <View className="flex flex-row items-center rounded-3xl bg-black p-5 py-10 gap-4">
      <View className="">
        <Image style={{ borderRadius: 20 }} />
      </View>
      <View className="flex flex-col items-start">
        <Text className="text-2xl font-bold text-white">Ritish Bhatoye</Text>
        <Text className="text-lg font-normal text-white">
          +91 7042421344 . ritish@gmail.com
        </Text>
      </View>
      <TouchableOpacity className="flex-row items-center gap-2">
        {/* <Text className="text-md font-medium text-white">Edit Profile</Text> */}
        <Ionicons name="pencil-outline" color={"white"} size={28} />
      </TouchableOpacity>
    </View>
  );
};

export default ProfileCard;
