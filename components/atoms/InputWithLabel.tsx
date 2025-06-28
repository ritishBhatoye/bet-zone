import React from "react";
import {
  View,
  Text,
  TextInput,
  TextInputProps,
  ColorSchemeName,
} from "react-native";
import { useColorScheme } from "react-native";

type InputSize = "sm" | "md" | "lg";
type InputWidth = "full" | "half";
type InputVariant = "box" | "outline";

interface InputWithLabelProps extends TextInputProps {
  label?: string;
  size?: InputSize;
  width?: InputWidth;
  variant?: InputVariant;
}

const InputWithLabel: React.FC<InputWithLabelProps> = ({
  label,
  value,
  onChangeText,
  placeholder,
  secureTextEntry = false,
  size = "md",
  width = "full",
  variant = "box",
  ...rest
}) => {
  const colorScheme: ColorSchemeName = useColorScheme();
  const isDarkMode: boolean = colorScheme === "dark";

  const sizeStyles = {
    sm: "text-sm p-2",
    md: "text-base p-3",
    lg: "text-lg p-4",
  };

  const widthStyles = {
    full: "w-full",
    half: "w-1/2",
  };

  const variantStyles = {
    box: "bg-swiggy-accent-light border border-swiggy-primary",
    outline: "bg-transparent border-b border-gray-400",
  };

  const labelClassName = `font-montserrat-semibold mb-1 ${
    isDarkMode ? "text-white" : "text-primary-500"
  }`;

  const containerClassName = `mb-4 ${widthStyles[width]}`;
  const inputContainerClassName = `rounded-lg ${variantStyles[variant]} ${sizeStyles[size]}`;
  const inputClassName = `text-swiggy-text w-full font-montserrat ${sizeStyles[size]}`;

  return (
    <View className={containerClassName}>
      {/* Label */}
      <Text className={labelClassName}>{label}</Text>

      <View className={inputContainerClassName}>
        <TextInput
          className={inputClassName}
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          secureTextEntry={secureTextEntry}
          placeholderTextColor={isDarkMode ? "#CCCCCC" : "#333333"}
          {...rest}
        />
      </View>
    </View>
  );
};

export default InputWithLabel;
