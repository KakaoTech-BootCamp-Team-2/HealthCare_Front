import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { SafeAreaProvider } from "react-native-safe-area-context";
import HomeScreen from "./src/pages/home/home.main";
import MyPageScreen from "./src/pages/mypage/mypage.main";
import StatisticsScreen from "./src/pages/statistics/statistics.main";
import { createStackNavigator } from "@react-navigation/stack";
import { HeaderView } from "./src/components/common/Header";
import LoginScreen from "./src/pages/login/login.main";
import SignUpScreen from "./src/pages/singup/signup.main";
import CalendarScreen from "./src/pages/home/home.calender";

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
      name="MyPage"
      component={MyPageScreen}
      options={{ headerShown: false }} // 헤더 숨김
    />
  </Stack.Navigator>
);

const CalendarStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Calendar"
      component={CalendarScreen}
      options={{ headerShown: false }} // 헤더 숨김
    />
  </Stack.Navigator>
);

const MainTabNavigator = () => (
  <BottomTab.Navigator
    screenOptions={{
      tabBarLabelStyle: { fontSize: 12 },
      tabBarItemStyle: { width: 100 },
      tabBarStyle: { backgroundColor: "white" },
    }}
  >
    <BottomTab.Screen
      name="홈"
      component={HomeStack}
      options={{ header: () => <HeaderView /> }} // HomeScreen에서 별도로 헤더를 설정
    />
    <BottomTab.Screen
      name="마이"
      component={MyPageStack}
      options={{ headerShown: false }} // 헤더 숨김
    />

  </BottomTab.Navigator>
);

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
   
          <Stack.Screen
            name="Calendar"
            component={CalendarScreen}
            options={{ headerShown: false }} // 달력 화면에서는 헤더를 숨김
          />
          
          <Stack.Screen
            name="Main"
            component={MainTabNavigator}
            options={{ headerShown: false }} // 메인 탭 네비게이터에서는 헤더를 숨김
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
