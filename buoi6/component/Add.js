import React, { useState } from "react";
import { View, Text, StyleSheet, Pressable, TextInput } from "react-native";

const AddButton = ({ addEvent }) => {
  const [value, setValue] = useState("");

  const onChangeText = (text) => {
    setValue(text);
  };
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text>Input: </Text>
        <TextInput style={styles.input} onChangeText={onChangeText}></TextInput>
      </View>

      <Pressable
        style={[styles.button]}
        onPress={() => {
          setValue(addEvent(value));
        }}
      >
        <Text>Add</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    alignItems: "center",
    marginBottom: 40,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  input: {
    width: "50%",
    borderWidth: 1,
    padding: 15,
    marginVertical: 5,
    marginLeft: 20,

    alignItems: "center",
    borderRadius: 5,
  },
  button: {
    backgroundColor: "yellow",
    width: "25%",
    borderWidth: 1,
    padding: 15,
    marginVertical: 5,

    alignItems: "center",
    borderRadius: 5,
  },
});

export default AddButton;
