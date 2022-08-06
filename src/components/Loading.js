import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

const Loading = () => {
  const styles = styleFn();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{"Loading..."}</Text>
    </View>
  );
};
export default Loading;

import { StyleSheet } from "react-native";

const styleFn = (disabled, reverse) => {
  return StyleSheet.create({
    container: {
      borderRadius: 9.34,
      paddingHorizontal: 30,
      paddingVertical: 10,
    },
    text: {
      fontFamily: "Avenir",
      alignSelf: "center",
      textAlign: "center",
    },
  });
};

