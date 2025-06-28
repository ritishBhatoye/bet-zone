import SliderCard from "@/components/elements/Cards/SliderCard";
import HorizontalSlider from "@/components/elements/HorizontalSlider";
import { sliderDummy } from "@/constants/home";
import React from "react";
import { SafeAreaView } from "react-native";

const Home = () => {
  return (
    <SafeAreaView className="bg-white h-full">
      <HorizontalSlider
        card={(item) => <SliderCard item={item} />}
        cardData={sliderDummy}
      />
    </SafeAreaView>
  );
};

export default Home;
