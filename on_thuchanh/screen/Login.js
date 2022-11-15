import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { useRoute } from "@react-navigation/native";
import login from "../assets/login.png";
import facebook from "../assets/facebook.png";
import google from "../assets/google.png";

export default function Login({ navigation }) {
  const route = useRoute();
  const windowWidth = Dimensions.get("window").width;

  return (
    <View style={styles.container}>
      <Image
        source={login}
        style={[styles.image, { width: windowWidth, marginBottom: 10 }]}
      ></Image>
      <View
        style={{
          flexDirection: "column",
          alignItems: "flex-start",
          marginTop: 10,
        }}
      >
        <Text style={styles.text}>Discover</Text>
        <Text style={styles.text}>premium coffee</Text>
        <Text style={styles.text}>around you</Text>
      </View>
      <TouchableOpacity
        style={{
          marginTop: 30,
          width: windowWidth - 50,
          height: 40,
          borderWidth: 1,
          borderColor: "darkgoldenrod",
          borderRadius: 10,
          alignSelf: "center",
          justifyContent: "center",
        }}
        onPress={() => navigation.navigate("List")}
      >
        <View
          style={{
            alignItems: "center",
            flexDirection: "row",
            marginLeft: 50,
          }}
        >
          <Image source={facebook} style={{ width: 30, height: 30 }}></Image>
          <Text style={{ color: "white", textAlign: "center", marginLeft: 10 }}>
            SIGN IN WITH FACEBOOK
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          marginTop: 10,
          width: windowWidth - 50,
          height: 40,
          borderWidth: 1,
          borderColor: "darkgoldenrod",
          borderRadius: 10,
          alignSelf: "center",
          justifyContent: "center",
        }}
        onPress={() => navigation.navigate("List")}
      >
        <View
          style={{
            alignItems: "center",
            flexDirection: "row",
            marginLeft: 50,
          }}
        >
          <Image source={google} style={{ width: 30, height: 30 }}></Image>
          <Text style={{ color: "white", textAlign: "center", marginLeft: 10 }}>
            SIGN IN WITH GOOGLE
          </Text>
        </View>
      </TouchableOpacity>
      <View
        style={{
          flexDirection: "column",
          alignItems: "center",
          marginTop: 30,
        }}
      >
        <Text style={{ color: "grey" }}>Don't have an account ?</Text>
        <Text style={{ color: "yellow", textDecorationLine: "underline" }}>
          REGISTER
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "black",
  },
  text: {
    marginLeft: 20,
    fontSize: 20,
    color: "white",
  },
  image: {
    alignSelf: "center",
    height: 250,
    resizeMode: "stretch",
  },
});
