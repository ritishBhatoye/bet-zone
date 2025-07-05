import LoginForm from "@/src/components/forms/login";
import AuthLayout from "@/src/components/global/AuthLayout";
import React from "react";
import { View, Text, SafeAreaView } from "react-native";

const LoginScreen = () => {
  return (
    <AuthLayout
      title={"Welcome to BetZone"}
      subTitle={"Enter your username and password to login in"}
      isBackCTA
    >
      <SafeAreaView>
        <LoginForm />
      </SafeAreaView>
    </AuthLayout>
  );
};

export default LoginScreen;
