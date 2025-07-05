import { Ionicons } from "@expo/vector-icons";
import { Router, useRouter } from "expo-router";
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
  const router: Router = useRouter();
  return (
    <View className="h-full">
      <View className="flex-col items-start w-full h-2.5 bg-black">
        {isBackCTA && (
          <Ionicons
            name="chevron-back-outline"
            color={"white"}
            size={24}
            onPress={() => router.back()}
          />
        )}
        <Text className="text-2xl font-barlow-extralight text-white">
          {title}
        </Text>

        <Text className="text-md font-barlow-extralight text-white">
          {subTitle}
        </Text>
      </View>
      <ScrollView className="rounded-t-xl">{children}</ScrollView>
    </View>
  );
};

export default AuthLayout;
