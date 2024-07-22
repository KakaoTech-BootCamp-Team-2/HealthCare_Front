import * as React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import HomeToday from "./home.today";
import { FoodLog } from "../../components/FoodLog/FoodLog";

const HomeScreen = () => {
  return (
    <View style={{ flex: 1 }}>
      <ScrollView style={styles.wrapper}>
        <HomeToday />
        <FoodLog />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    width: "100%",
  },
});

export default HomeScreen;
