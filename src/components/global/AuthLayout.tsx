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
    <View className="h-full flex-1 ">
      <View className="flex-col items-start w-full h-1/3 bg-black pt-16 px-4  justify-evenly">
        {isBackCTA && (
          <Ionicons
            name="chevron-back-outline"
            color={"white"}
            size={24}
            onPress={() => router.back()}
          />
        )}
        <Text className="text-2xl font-avalar-bold text-white">{title}</Text>

        <Text className="text-2xl font-montserrat-light text-white  ">
          {subTitle}
        </Text>
      </View>
      <ScrollView className="rounded-t-xl px-4">{children}</ScrollView>
    </View>
  );
};

export default AuthLayout;
