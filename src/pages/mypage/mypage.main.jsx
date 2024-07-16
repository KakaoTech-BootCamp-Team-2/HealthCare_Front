import * as React from "react";
import { View, StyleSheet, Text } from "react-native";

const MyPageScreen = () => {
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.container}>
        <Text>My Page Content</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default MyPageScreen;
