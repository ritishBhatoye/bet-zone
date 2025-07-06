import AuthLayout from "@/src/components/global/AuthLayout";
import React from "react";
import { SafeAreaView } from "react-native";
import RegisterForm from "../components/forms/register";

const RegisterScreen = () => {
  return (
    <AuthLayout
      isBackCTAText
      title={"Sign Up"}
      subTitle={"Register to create account "}
      isBackCTA
    >
      <SafeAreaView>
        <RegisterForm />
      </SafeAreaView>
    </AuthLayout>
  );
};

export default RegisterScreen;
