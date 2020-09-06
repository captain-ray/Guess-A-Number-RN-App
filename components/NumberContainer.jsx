import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Colors from "../constants/color";

const NumberContainer = (props) => (
  <View style={styles.numberContainer}>
    <Text style={styles.number}>{props.children}</Text>
  </View>
);

const styles = StyleSheet.create({
  numberContainer: {
    marginVertical: 10,
    padding: 10,
    borderColor: Colors.secondary,
    borderWidth: 2,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  number: {
    color: Colors.secondary,
    fontSize: 20,
  },
});

export default NumberContainer;
