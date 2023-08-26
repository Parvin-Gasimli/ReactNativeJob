import { View, Text, ScrollView, SafeAreaView } from "react-native";
import React, { useState } from "react";
import { Stack, useRouter } from "expo-router";
import { COLORS, SIZES, FONTS, icons, images } from "../constants";
import {
  Popularjobs,
  ScreenHeaderBtn,
  Welcome,
  Nearbyjobs,
} from "../components";

const Home = () => {
  const router = useRouter();
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: COLORS.lightWhite,
      }}
    >
      <Stack.Screen
        options={{
          headerStyle: {
            backgroundColor: COLORS.lightWhite,
          },
          headerShadowVisible: false,
          headerLeft: () => (
            <ScreenHeaderBtn
              dimension="60%"
              iconUrl={icons.menu}
              onPress={() => {
                router.push("/menu");
              }}
            />
          ),
          headerRight: () => (
            <ScreenHeaderBtn
              dimension="100%"
              iconUrl={icons.profile}
              onPress={() => {
                router.push("/notification");
              }}
            />
          ),
          headerTitle: "",
        }}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            flex: 1,
            paddingHorizontal: SIZES.medium,
          }}
        >
          <Welcome />
          <Popularjobs />
          <Nearbyjobs />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
