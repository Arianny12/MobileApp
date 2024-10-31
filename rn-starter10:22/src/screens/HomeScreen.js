import React from "react";
import { Text, StyleSheet } from "react-native";

const HomeScreen = () => {
  return (
    <View>
      <Text style={styles.text}>HomeScreen</Text>
      <Text style={styles.text}>More text</Text>
    </View>
  )
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    color: 'red',
  },
});

export default HomeScreen;
