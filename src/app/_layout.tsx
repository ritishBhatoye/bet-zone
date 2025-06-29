import { useColorScheme } from "@/hooks/useColorScheme";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import "react-native-reanimated";
import "../global.css";

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    // Avalar Fonts
    "Avalar-Regular": require("../../assets/fonts/Avalar-Regular.ttf"),
    "Avalar-Bold": require("../../assets/fonts/Avalar-Bold.ttf"),

    // Montserrat Fonts
    "Montserrat-Thin": require("../../assets/fonts/Montserrat-Thin.ttf"),
    "Montserrat-ExtraLight": require("../../assets/fonts/Montserrat-ExtraLight.ttf"),
    "Montserrat-Light": require("../../assets/fonts/Montserrat-Light.ttf"),
    "Montserrat-Regular": require("../../assets/fonts/Montserrat-Regular.ttf"),
    "Montserrat-Medium": require("../../assets/fonts/Montserrat-Medium.ttf"),
    "Montserrat-SemiBold": require("../../assets/fonts/Montserrat-SemiBold.ttf"),
    "Montserrat-Bold": require("../../assets/fonts/Montserrat-Bold.ttf"),
    "Montserrat-ExtraBold": require("../../assets/fonts/Montserrat-ExtraBold.ttf"),
    "Montserrat-Black": require("../../assets/fonts/Montserrat-Black.ttf"),

    // Barlow Fonts
    "Barlow-Thin": require("../../assets/fonts/Barlow-Thin.ttf"),
    "Barlow-ExtraLight": require("../../assets/fonts/Barlow-ExtraLight.ttf"),
    "Barlow-Light": require("../../assets/fonts/Barlow-Light.ttf"),
    "Barlow-Regular": require("../../assets/fonts/Barlow-Regular.ttf"),
    "Barlow-Medium": require("../../assets/fonts/Barlow-Medium.ttf"),
    "Barlow-SemiBold": require("../../assets/fonts/Barlow-SemiBold.ttf"),
    "Barlow-Bold": require("../../assets/fonts/Barlow-Bold.ttf"),
    "Barlow-ExtraBold": require("../../assets/fonts/Barlow-ExtraBold.ttf"),
    "Barlow-Black": require("../../assets/fonts/Barlow-Black.ttf"),

    // Dancing Script Fonts
    "DancingScript-Regular": require("../../assets/fonts/DancingScript-Regular.ttf"),
    "DancingScript-Medium": require("../../assets/fonts/DancingScript-Medium.ttf"),
    "DancingScript-SemiBold": require("../../assets/fonts/DancingScript-SemiBold.ttf"),
    "DancingScript-Bold": require("../../assets/fonts/DancingScript-Bold.ttf"),

    // Space Mono
    "SpaceMono-Regular": require("../../assets/fonts/SpaceMono-Regular.ttf"),
  });

  if (!loaded) {
    // Async font loading only occurs in development.
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="(auth)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
