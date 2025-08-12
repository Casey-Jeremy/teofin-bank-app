import { useRouter } from "expo-router";
import { useState, useRef } from "react";
import { FlatList, Image, StatusBar, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { components } from "../components";
import { onboardingData, theme } from "../constants";
import { svg } from "../svg";

const Onboarding = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const router = useRouter();
  const flatListRef = useRef(null);

  function updateCurrentSlideIndex(e) {
    const contentOffsetX = e.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentOffsetX / theme.SIZES.width);
    setCurrentSlideIndex(currentIndex);
  }

  const goToNextSlide = () => {
    const nextSlideIndex = currentSlideIndex + 1;
    if (flatListRef.current && nextSlideIndex < onboardingData.length) {
      flatListRef.current.scrollToIndex({
        index: nextSlideIndex,
        animated: true,
      });
    }
  };

  const currentSlide = onboardingData[currentSlideIndex];

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      {/* Changed barStyle back to light-content for the image background */}
      <StatusBar barStyle="light-content" />

      {/* 1. TOP IMAGE & SWIPE AREA */}
      <View style={{ flex: 1 }}>
        <Image
          source={{ uri: onboardingData[0].image }}
          style={{ width: "100%", height: "100%" }}
          resizeMode="cover"
        />
        {/* INVISIBLE FLATLIST FOR SWIPE CONTROL */}
        <FlatList
          ref={flatListRef}
          data={onboardingData}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onMomentumScrollEnd={updateCurrentSlideIndex}
          keyExtractor={(item) => item.id}
          style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
          renderItem={() => <View style={{ width: theme.SIZES.width }} />}
        />
      </View>

      {/* 2. BOTTOM CONTENT PANEL (STATIC) */}
      <View
        style={{
          paddingTop: 40, // Increased top padding for better spacing
          paddingHorizontal: 20,
          paddingBottom: 40, // Increased bottom padding for better spacing
        }}
      >
        <View style={{ alignSelf: "center", marginBottom: 20 }}>
          <svg.LogoSvg />
        </View>

        <Text
          style={{
            textAlign: "center",
            ...theme.FONTS.H3,
            color: theme.COLORS.mainDark,
            marginBottom: 18,
          }}
        >
          {currentSlide.title}
        </Text>
        <Text
          style={{
            textAlign: "center",
            ...theme.FONTS.Mulish_400Regular,
            fontSize: 16,
            color: theme.COLORS.bodyTextColor,
            lineHeight: 16 * 1.6,
            marginBottom: 24,
          }}
        >
          {currentSlide.description}
        </Text>

        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "row",
            marginBottom: 45,
          }}
        >
          {onboardingData.map((_, dotIndex) => (
            <View
              key={dotIndex}
              style={[
                {
                  width: 8,
                  height: 8,
                  marginHorizontal: 5,
                  borderRadius: 50,
                  borderWidth: 3,
                  borderColor: "#D1D2DB",
                },
                currentSlideIndex === dotIndex && {
                  borderColor: theme.COLORS.mainDark,
                },
              ]}
            />
          ))}
        </View>

        {currentSlideIndex === onboardingData.length - 1 ? (
          <components.Button
            title="Get Started"
            onPress={() => router.push("/SignIn")}
          />
        ) : (
          <components.Button title="Next" onPress={goToNextSlide} />
        )}
      </View>
    </SafeAreaView>
  );
};

export default Onboarding;