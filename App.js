import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { SafeAreaProvider } from "react-native-safe-area-context";
import HomeScreen from "./src/pages/home/home.main";
import MyPageScreen from "./src/pages/mypage/mypage.main";
import StatisticsScreen from "./src/pages/statistics/statistics.main";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "./src/pages/login/login.main";
import SignUpScreen from "./src/pages/singup/signup.main";
import { HeaderView } from "./src/components/common/Header";
import Search from "./src/pages/search/Search";
import FoodDetailScreen from "./src/components/FoodDeatil/FoodDetail";

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
    <Stack.Screen
      name="Search"
      component={Search}
      options={{ headerShown: false }}
    />
    <Stack.Group screenOptions={{ presentation: "modal" }}>
      <Stack.Screen name="FoodDetail" component={FoodDetailScreen} />
    </Stack.Group>
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

const TabNavigator = () => (
  <BottomTab.Navigator
    screenOptions={{
      tabBarLabelStyle: { fontSize: 12 },
      tabBarItemStyle: { width: 100 },
      tabBarStyle: { backgroundColor: "powderblue" },
    }}
  >
    <BottomTab.Screen
      name="홈"
      component={HomeStack}
      // options={{ header: () => <HeaderView /> }} // HomeScreen에서 별도로 헤더를 설정
    />
    <BottomTab.Screen
      name="통계"
      component={StatisticsScreen}
      options={{ headerShown: false }} // 헤더 숨김
    />
    <BottomTab.Screen
      name="마이페이지"
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
          {/* <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{ headerShown: false }} // 헤더 숨김
          />
          <Stack.Screen
            name="SignUp"
            component={SignUpScreen}
            options={{ headerShown: false }} // 헤더 숨김
          /> */}
          <Stack.Screen
            name="Main"
            component={TabNavigator}
            options={{ headerShown: false }} // 헤더 숨김
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
