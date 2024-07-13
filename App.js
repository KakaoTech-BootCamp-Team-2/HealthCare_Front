import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { SafeAreaProvider } from "react-native-safe-area-context";
import HomeScreen from "./src/pages/home/home.main";
import MyPageScreen from "./src/pages/mypage/mypage.main";
import StatisticsScreen from "./src/pages/statistics/statistics.main";
import { createStackNavigator } from "@react-navigation/stack";
import { HeaderView } from "./src/components/Header";

const BottomTab = createBottomTabNavigator();
const Stack = createStackNavigator();

const HomeStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="HomeMain"
      component={HomeScreen}
      options={{ headerShown: false }} // 헤더 숨김
    />
    <Stack.Screen
      name="Statistics"
      component={StatisticsScreen}
      options={{ headerShown: false }} // 헤더 숨김
    />
  </Stack.Navigator>
);

const MyPageStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="MyPageMain"
      component={MyPageScreen}
      options={{ headerShown: false }} // 헤더 숨김
    />
  </Stack.Navigator>
);

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <BottomTab.Navigator
          screenOptions={{
            tabBarLabelStyle: { fontSize: 12 },
            tabBarItemStyle: { width: 100 },
            tabBarStyle: { backgroundColor: "powderblue" },
          }}
        >
          <BottomTab.Screen
            name="Home"
            component={HomeStack}
            options={{ header: () => <HeaderView /> }} // HomeScreen에서 별도로 헤더를 설정
          />
          <BottomTab.Screen
            name="MyPage"
            component={MyPageStack}
            options={{ headerShown: false }} // 헤더 숨김
          />
        </BottomTab.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
