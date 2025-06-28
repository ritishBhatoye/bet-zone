import SliderCard from "@/components/elements/Cards/SliderCard";
import HorizontalSlider from "@/components/elements/HorizontalSlider";
import TopEvents from "@/components/home/Events/TopEvents";
import { sliderDummy } from "@/constants/home";
import React from "react";
import { SafeAreaView, ScrollView } from "react-native";

const Home = () => {
  return (
    <SafeAreaView className="bg-white h-full">
      <ScrollView className="h-full">
        <HorizontalSlider
          card={(item) => <SliderCard item={item} />}
          cardData={sliderDummy}
        />
        <TopEvents />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
