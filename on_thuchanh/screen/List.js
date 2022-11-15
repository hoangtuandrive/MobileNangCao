import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
  FlatList,
} from "react-native";
import { useRoute } from "@react-navigation/native";
import { Entypo } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";
import promotion from "../assets/promotion.png";
import category from "../category";

export default function List({ navigation }) {
  const route = useRoute();
  const windowWidth = Dimensions.get("window").width;

  return (
    <View style={styles.container}>
      <StatusBar></StatusBar>
      <View
        style={{
          height: 50,
          backgroundColor: "white",
          marginTop: 40,
          flexDirection: "row",
        }}
      >
        <Entypo name="menu" size={24} color="black" style={{ marginLeft: 5 }} />
        <EvilIcons
          name="location"
          size={24}
          color="darkorange"
          style={{ marginLeft: 40, marginTop: 9 }}
        />
        <View
          style={{
            flexDirection: "column",
            marginLeft: 10,
          }}
        >
          <Text>Sukrabadm, Dhaka</Text>
          <Text>Bangladesh</Text>
        </View>
        <Ionicons
          name="chatbox-outline"
          size={24}
          color="black"
          style={{ marginLeft: 50 }}
        />
        <Octicons
          name="bell"
          size={22}
          color="black"
          style={{ marginLeft: 20, marginTop: 2 }}
        />
      </View>
      <View
        style={{
          flex: 1,
          flexDirection: "column",
          backgroundColor: "lavender",
          alignItems: "flex-start",
          justifyContent: "flex-start",
        }}
      >
        <TouchableOpacity
          style={{
            marginTop: 10,
            borderRadius: 30,
            width: windowWidth - 100,
            alignSelf: "center",
            justifyContent: "center",
            height: 120,
          }}
        >
          <Image
            source={promotion}
            style={{
              borderRadius: 30,
              resizeMode: "contain",
              width: windowWidth - 100,
              height: 120,
            }}
          ></Image>
        </TouchableOpacity>
        <FlatList
          horizontal
          data={category}
          renderItem={({ item, index }) => {
            return (
              <TouchableOpacity
                style={{
                  marginTop: 20,
                  flexDirection: "column",
                  backgroundColor: "white",
                  width: 100,
                  height: 30,
                  borderRadius: 10,
                  marginHorizontal: 10,
                  justifyContent: "center",
                  borderWidth: 1,
                  borderColor: "darkorange",
                }}
              >
                <Text style={{ textAlign: "center" }}>{item.name}</Text>
              </TouchableOpacity>
            );
          }}
        ></FlatList>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "white",
  },
});
