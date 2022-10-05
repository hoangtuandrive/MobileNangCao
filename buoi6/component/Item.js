import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";

const Item = ({ item, index }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.index}>{index + 1}</Text>
      <Text style={styles.text}>{item.value}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 300,
    borderWidth: 1,
    padding: 15,
    marginVertical: 5,
    alignItems: "center",
    borderRadius: 5,
    flexDirection: "row",
    backgroundColor: "lightblue",
  },
  index: {
    borderWidth: 1,
    padding: 3,
    textAlign: "center",
  },
  text: {
    marginLeft: 15,
  },
});

export default Item;
