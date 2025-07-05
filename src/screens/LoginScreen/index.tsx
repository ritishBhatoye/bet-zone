import AuthLayout from "@/src/components/global/AuthLayout";
import React from "react";
import { View, Text } from "react-native";

const LoginScreen = () => {
  return (
    <AuthLayout title={""} subTitle={""} isBackCTA>
      <View>
        <Text className="text-red-500">LOGIN</Text>
      </View>
    </AuthLayout>
  );
};

export default LoginScreen;
