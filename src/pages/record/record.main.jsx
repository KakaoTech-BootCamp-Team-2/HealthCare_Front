
import * as React from 'react';
import { View, Text, StyleSheet} from 'react-native';

function RecordScreen() {
  return (
    <View style={styles.container}>
      <Text>This is the Records Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'blue',
  }
});

export default RecordScreen;
