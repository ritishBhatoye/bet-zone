import React from "react";
import { SafeAreaView } from "react-native";
import InputWithLabel from "../atoms/InputWithLabel";
import Button from "../atoms/Button";

const LoginForm = () => {
  return (
    <SafeAreaView className="gap-5">
      <InputWithLabel size="sm" variant="rounded" label="Email" />
      <InputWithLabel size="sm" variant="rounded" label="Password" isPassword />
      <Button title={"Log in"} />
    </SafeAreaView>
  );
};

export default LoginForm;
