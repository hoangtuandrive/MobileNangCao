import React from "react";
import { FlatList, StyleSheet, Text, View, TextInput } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";
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
        <View
          style={{
            flexDirection: "row",
            backgroundColor: "white",
            width: 220,
            paddingHorizontal: 10,
            paddingVertical: 5,
          }}
        >
          <FontAwesome name="search" size={24} color="black" />
          <TextInput
            style={{ fontSize: 15, marginLeft: 12, width: 160 }}
            placeholder="Dây cáp USB"
          ></TextInput>
        </View>
        <View style={{ flexDirection: "row", marginRight: 20 }}>
          <MaterialCommunityIcons name="cart-check" size={30} color="white" />
          <SimpleLineIcons
            name="options"
            size={24}
            color="white"
            style={{ marginLeft: 20 }}
          />
        </View>
      </View>
      <FlatList
        style={{ marginTop: 10 }}
        data={data}
        renderItem={({ item, index }) => {
          return <Item data={item} />;
        }}
        keyExtractor={(item, index) => index}
        numColumns={2}
      />
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
