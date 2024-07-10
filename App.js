import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './src/pages/home/home.main';
import MyPageScreen from './src/pages/mypage/mypage.main';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { enableScreens } from 'react-native-screens';


enableScreens();

const BottomTab = createBottomTabNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <BottomTab.Navigator>
          <BottomTab.Screen name="Home" component={HomeScreen} />
          <BottomTab.Screen name="My" component={MyPageScreen} />
        </BottomTab.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}


