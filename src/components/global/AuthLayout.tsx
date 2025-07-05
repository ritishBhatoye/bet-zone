import { Ionicons } from "@expo/vector-icons";
import React, { PropsWithChildren } from "react";
import { ScrollView, View, Text } from "react-native";
const AuthLayout = ({
  isBackCTA,
  title,
  subTitle,
  children,
}: PropsWithChildren<{
  isBackCTA?: boolean;
  title: string;
  subTitle: string;
}>) => {
  return (
    <View className="h-full">
      <View className="flex-col items-start w-full h-2.5">
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
