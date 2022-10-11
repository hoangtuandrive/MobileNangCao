import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TextInput,
  TouchableOpacity,
} from "react-native";
import Add from "./component/Add";

export default function App() {
  const [data, setData] = useState([]);
  const addEvent = (value) => {
    setData((prevTodo) => {
      return [
        ...prevTodo,
        {
          value: value,
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
        renderItem={({ item, index }) => {
          return (
            <View style={styles.container1}>
              <Text style={styles.index}>{index + 1}</Text>
              <Text style={styles.text}>{item.value}</Text>
              <TouchableOpacity
                style={{ backgroundColor: "red" }}
                onPress={() => {
                  const tempData = [...data];
                  tempData.splice(index, 1);
                  setData(tempData);
                }}
              >
                <Text style={{ color: "yellow", padding: 10 }}>Xóa</Text>
              </TouchableOpacity>
            </View>
          );
        }}
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
  container1: {
    width: 300,
    borderWidth: 1,
    padding: 15,
    marginVertical: 5,
    alignItems: "center",
    borderRadius: 5,
    flexDirection: "row",
    backgroundColor: "lightblue",
    justifyContent: "space-between",
  },
  index: {
    borderWidth: 1,
    padding: 3,
    textAlign: "center",
  },
  text: {
    marginLeft: 15,
    marginRight: 100,
  },
});
