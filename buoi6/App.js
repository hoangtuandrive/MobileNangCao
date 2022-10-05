import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, FlatList, TextInput } from "react-native";
import Add from "./component/Add";
import Item from "./component/Item";

export default function App() {
  const [data, setData] = useState([]);
  const addEvent = (value) => {
    setData((prevTodo) => {
      return [
        ...prevTodo,
        {
          value: value,
          key: Math.random().toString(),
        },
      ];
    });
  };

  return (
    <View style={styles.container}>
      <Add addEvent={addEvent}></Add>
      <FlatList
        data={data}
        keyExtractor={(item) => item.key}
        renderItem={({ item, index }) => (
          <Item item={item} index={index}></Item>
        )}
      ></FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
