import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { ScrollView, View, Text } from "react-native";
const AuthLayout = ({
  isBackCTA,
  title,
  subTitle,
  children,
}: {
  isBackCTA?: boolean;
  title: string;
  subTitle: string;
  children: React.JSX.Element;
}) => {
  return (
    <View className="flex-1">
      <View className="flex-col items-start w-full">
        {isBackCTA && (
          <Ionicons name="chevron-back-outline" color={"white"} size={24} />
        )}
        <Text className="text-2xl font-barlow-extralight ">{title}</Text>

        <Text className="text-md font-barlow-extralight ">{subTitle}</Text>
      </View>
      <ScrollView className="">{children}</ScrollView>
    </View>
  );
};

export default AuthLayout;
