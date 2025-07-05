import { Ionicons } from "@expo/vector-icons";
import React from "react";
import {
  View,
  Text,
  TextInput,
  TextInputProps,
  ColorSchemeName,
  TouchableOpacity,
} from "react-native";
import { useColorScheme } from "react-native";

type InputSize = "sm" | "md" | "lg";
type InputWidth = "full" | "half";
type InputVariant = "box" | "outline" | "rounded";

interface InputWithLabelProps extends TextInputProps {
  label?: string;
  size?: InputSize;
  width?: InputWidth;
  variant?: InputVariant;
  isPassword?: boolean;
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
  isPassword,
  ...rest
}) => {
  const colorScheme: ColorSchemeName = useColorScheme();
  const isDarkMode: boolean = colorScheme === "dark";

  const sizeStyles = {
    sm: "text-sm p-1.5",
    md: "text-base p-3",
    lg: "text-lg p-4",
  };

  const widthStyles = {
    full: "w-full",
    half: "w-1/2",
  };

  const variantStyles = {
    box: "bg-swiggy-accent-light border border-border-dark",
    outline: "bg-transparent border-b border-border-dark",
    rounded: "bg-transparent border-[0.5px] rounded-3xl border-border-dark",
  };

  const labelClassName = `font-avalar ${sizeStyles.sm ? "text-base" : sizeStyles.md ? "text-lg" : sizeStyles.lg ? "text-xl" : null} mb-1 ${isDarkMode ? "text-white" : "text-black"}`;

  const containerClassName = ` ${widthStyles[width]}`;
  const inputContainerClassName = `${isPassword ? "flex-row" : null} ${variantStyles[variant]} ${sizeStyles[size]}`;
  const inputClassName = `text-black w-full font-montserrat ${sizeStyles[size]}`;

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
          secureTextEntry={secureTextEntry && isPassword}
          placeholderTextColor={isDarkMode ? "#CCCCCC" : "#333333"}
          {...rest}
        />
        {isPassword && (
          <TouchableOpacity className="justify-end ">
            <Ionicons name={"eye-off-outline"} color={"black"} size={14} />
          </TouchableOpacity>
        )}
      </View>
      {isPassword && (
        <TouchableOpacity className="justify-end w-full flex-1">
          <Text className=" text-neutral-950">Forget your password</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default InputWithLabel;
