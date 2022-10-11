import React from "react";
import { TouchableOpacity, View, Text, Image } from "react-native";

export default function Item({ data }) {
  return (
    <TouchableOpacity
      style={{
        flexDirection: "row",
        marginTop: 5,
        justifyContent: "space-between",
        borderBottomWidth: 1,
        borderBottomColor: "rgb(196,196,196)",
      }}
    >
      <View style={{ flexDirection: "row" }}>
        <View style={{ marginRight: 20 }}>
          <Image
            source={{ uri: data.img }}
            style={{ width: 70, height: 70 }}
          ></Image>
        </View>

        <View style={{ flexDirection: "column" }}>
          <Text>{data.name}</Text>
          <Text>Shop: {data.shop}</Text>
        </View>
        <TouchableOpacity
          style={{
            borderWidth: 1,
            backgroundColor: "red",
            justifyContent: "center",
            marginLeft: 50,
            height: 40,
          }}
        >
          <Text style={{ padding: 5, color: "white", textAlign: "center" }}>
            Chat
          </Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
}
