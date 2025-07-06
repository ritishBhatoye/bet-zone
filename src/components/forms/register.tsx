import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import InputWithLabel from "../atoms/InputWithLabel";
import Button from "../atoms/Button";
import { Router, useRouter } from "expo-router";

const RegisterForm = () => {
  const router: Router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleLogin = () => {
    // Add your login logic here
    console.log("Login attempt:", { email, password });
  };

  const handleForgotPassword = () => {
    // Add your forgot password logic here
    console.log("Forgot password pressed");
  };

  return (
    <View className="gap-6">
      <InputWithLabel
        size="sm"
        variant="rounded"
        label="Email"
        value={email}
        onChangeText={setEmail}
        placeholder="Enter your email"
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <InputWithLabel
        size="sm"
        variant="rounded"
        label="Password"
        isPassword
        value={password}
        onChangeText={setPassword}
        placeholder="Enter your password"
      />
      <InputWithLabel
        size="sm"
        variant="rounded"
        label="Confirm Password"
        isPassword
        value={confirmPassword}
        onChangeText={setPassword}
        placeholder="Confirm your password"
      />
      <Button
        title="Sign Up"
        onPress={handleLogin}
        variant="primary"
        fullWidth
      />

      <View className="flex-row justify-center items-center mt-4">
        <Text className="text-gray-600 font-montserrat">
          Have an account yet?
        </Text>
        <TouchableOpacity onPress={() => router.push("/(auth)/login")}>
          <Text className="text-primary-500 font-avalar-bold ml-1">
            Sign In
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default RegisterForm;
