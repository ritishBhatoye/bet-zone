import { Ionicons } from "@expo/vector-icons";
import { Router, useRouter } from "expo-router";
import React, { PropsWithChildren } from "react";
import { ScrollView, View, Text, SafeAreaView } from "react-native";
const AuthLayout = ({
  isBackCTA,
  isBackCTAText,
  title,
  subTitle,
  children,
}: PropsWithChildren<{
  isBackCTA?: boolean;
  isBackCTAText?: boolean;
  title: string;
  subTitle: string;
}>) => {
  const router: Router = useRouter();
  return (
    <SafeAreaView className="h-full flex-1 ">
      <View className="flex-col items-start w-full h-1/3 bg-black  px-4  justify-evenly">
        {isBackCTA && (
          <View className="flex-row items-center">
            <Ionicons
              name="chevron-back-outline"
              color={"white"}
              size={30}
              onPress={() => router.back()}
            />
            {isBackCTAText && (
              <Text className="text-white text-sm font-avalar">
                Go back to Dashboard
              </Text>
            )}
          </View>
        )}
        <Text className="text-2xl font-avalar-bold text-white">{title}</Text>

        <Text className="text-2xl font-montserrat-light text-white  ">
          {subTitle}
        </Text>
      </View>
      <ScrollView className="bg-transparent rounded-t-3xl p-5">
        {children}
      </ScrollView>
    </SafeAreaView>
  );
};

export default AuthLayout;
