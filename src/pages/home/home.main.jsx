// src/components/home.main.jsx
import * as React from 'react';
import { View, StyleSheet, ScrollView} from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';
import RecordScreen from '../record/record.main';
import StatisticScreen from '../statistics/statistics.main';
import HomeToday from '../home/home.today';
import HomeActivity from './home.activity';

const TopTab = createMaterialTopTabNavigator();

function HomeTabs() {
  return (
    <TopTab.Navigator>
      <TopTab.Screen name="Record" component={RecordScreen} />
      <TopTab.Screen name="Statistics" component={StatisticScreen} />
    </TopTab.Navigator>
  );
}

const HomeScreen = () => {
  return (
    <ScrollView style = {styles.wrapper}>
      <HomeToday/>
      <HomeActivity></HomeActivity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex:1,
    width: '100%',
  },
});


export default HomeScreen;
