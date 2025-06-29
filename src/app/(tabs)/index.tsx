import SliderCard from "@/src/components/elements/Cards/SliderCard";
import HorizontalSlider from "@/src/components/elements/HorizontalSlider";
import TopEvents from "@/src/components/home/Events/TopEvents";
import { sliderDummy } from "@/constants/home";
import { TopEventsWithAPI } from "@/utils/api/example-usage";
import React from "react";
import { SafeAreaView, ScrollView } from "react-native";

const Home = () => {
  return (
    <SafeAreaView className="bg-white h-full">
      <ScrollView className="h-full">
        <TopEventsWithAPI />
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
