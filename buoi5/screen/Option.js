import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { useRoute } from "@react-navigation/native";

export default function ProductDetail({ navigation }) {
  const route = useRoute();
  const imgDefault = require("../assets/vsmart_live_xanh1.png");
  const [url, setUrl] = useState(imgDefault);
  useEffect(() => {
    if (route.params != null) setUrl(route.params.url);
  }, []);

  const handlerChooseColor = (prop) => {
    setUrl(prop);
  };
  return (
    <View style={styles.container}>
      <View style={styles.imgRow}>
        <Image style={styles.img} source={url}></Image>
        <View style={{ marginTop: 10, marginLeft: 10, marginRight: 50 }}>
          <Text>Điện Thoại Vsmart Joy 3</Text>
          <Text>Hàng chính hãng</Text>
        </View>
      </View>
      <View style={styles.optionPane}>
        <Text style={{ marginLeft: 10, marginTop: 10 }}>
          Chọn một màu bên dưới:{" "}
        </Text>
        <View style={styles.colorColumn}>
          <TouchableOpacity
            style={styles.cyan}
            onPress={() =>
              handlerChooseColor(require("../assets/vs_bac_1.png"))
            }
          ></TouchableOpacity>
          <TouchableOpacity
            style={styles.red}
            onPress={() =>
              handlerChooseColor(require("../assets/vs_red_a_2.png"))
            }
          ></TouchableOpacity>
          <TouchableOpacity
            style={styles.black}
            onPress={() =>
              handlerChooseColor(require("../assets/vsmart_black_star_1.png"))
            }
          ></TouchableOpacity>
          <TouchableOpacity
            style={styles.blue}
            onPress={() =>
              handlerChooseColor(require("../assets/vsmart_live_xanh1.png"))
            }
          ></TouchableOpacity>
        </View>
        <TouchableOpacity
          style={styles.buttonConfirm}
          onPress={() => navigation.navigate("Home", { url: url })}
        >
          <Text style={styles.whiteText}>XONG</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    marginTop: 30,
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  imgRow: {
    flexDirection: "row",
  },
  img: {
    width: 130,
    height: 170,
  },
  optionPane: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#C4C4C4",
    width: "100%",
  },
  colorColumn: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    marginTop: 20,
  },
  cyan: {
    marginTop: 10,
    backgroundColor: "#C5F1FB",
    width: 60,
    height: 60,
  },
  red: {
    marginTop: 10,
    backgroundColor: "#F30D0D",
    width: 60,
    height: 60,
  },
  black: {
    marginTop: 10,
    backgroundColor: "#000000",
    width: 60,
    height: 60,
  },
  blue: {
    marginTop: 10,
    backgroundColor: "#234896",
    width: 60,
    height: 60,
  },
  buttonConfirm: {
    borderWidth: 1,
    borderRadius: 20,
    alignItems: "center",
    maxWidth: "80%",
    marginLeft: 40,
    padding: 10,
    marginBottom: 10,
    backgroundColor: "#1952E2",
  },
  whiteText: {
    color: "white",
    fontWeight: "bold",
  },
});
