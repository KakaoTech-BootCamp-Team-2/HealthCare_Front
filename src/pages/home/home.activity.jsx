
import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function HomeActivity() {
  return (
    <View style={styles.wrapper}>
      <Text>This is the Activity Screen</Text>
      <Text>This is the Activity Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    wrapper: {
      width: '100%',
      height: 700,
      backgroundColor: 'green',
    },
  });
  
  

export default HomeActivity;
