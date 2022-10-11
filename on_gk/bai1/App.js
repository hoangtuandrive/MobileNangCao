import { StatusBar } from "expo-status-bar";
import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import data from "./data";
import Item from "./component/Item";
export default function App() {
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          backgroundColor: "#1BA9FF",
          justifyContent: "space-between",
          alignItems: "center",
          paddingTop: 30,
          padding: 20,
        }}
      >
        <Ionicons name="arrow-back" size={24} color="white" />
        <Text style={{ color: "white", fontSize: 16 }}>Chat</Text>
        <FontAwesome5 name="shopping-cart" size={24} color="white" />
      </View>
      <View style={{ flexDirection: "column", marginTop: 10, marginLeft: 20 }}>
        <Text>Bạn có thắc mắc với sản phẩm vừa xem, Đừng ngại</Text>
        <Text>chat với shop</Text>
      </View>
      <FlatList
        data={data}
        renderItem={({ item, index }) => <Item data={item} />}
      ></FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "lightgrey",
    justifyContent: "flex-start",
  },
});
