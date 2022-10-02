import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { EvilIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function Product() {
  const navigation = useNavigation();
  const onPress = () => {
    navigation.navigate("Option");
  };
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/vsmart_live_xanh1.png")}
        style={styles.image}
      ></Image>
      <Text style={styles.text}>Điện Thoại Vsmart Joy 3 - Hàng chính hãng</Text>
      <View stlye={styles.starRow}>
        <View style={styles.starGroup}>
          <Image
            source={require("../assets/Star1.png")}
            style={styles.star}
          ></Image>
          <Image
            source={require("../assets/Star1.png")}
            style={styles.star}
          ></Image>
          <Image
            source={require("../assets/Star1.png")}
            style={styles.star}
          ></Image>
          <Image
            source={require("../assets/Star1.png")}
            style={styles.star}
          ></Image>
          <Image
            source={require("../assets/Star1.png")}
            style={styles.star}
          ></Image>
          <Text style={styles.textRating}>(Xem 828 đánh giá)</Text>
        </View>
        <View style={styles.priceRow}>
          <Text style={styles.textPrice}>1.790.000 đ</Text>
          <Text style={styles.textDiscount}>1.790.000 đ</Text>
        </View>
        <View style={styles.textRow}>
          <Text style={styles.redText}>Ở ĐÂU RẺ HƠN HOÀN TIỀN</Text>
          <EvilIcons name="question" size={24} color="black" />
        </View>
        <TouchableOpacity style={styles.buttonSelect} onPress={onPress}>
          <Text>4 MÀU-CHỌN MÀU</Text>
          <MaterialIcons name="navigate-next" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonConfirm}>
          <Text style={styles.whiteText}>CHỌN MUA</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    flex: 1,
  },
  image: {
    flex: 1,
    alignSelf: "center",
    width: 100,
    maxHeight: 200,
  },
  text: {
    textAlign: "center",
  },
  starRow: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    marginTop: 20,
  },
  starGroup: {
    alignSelf: "center",
    flexDirection: "row",
    marginTop: 20,
  },
  textRating: {
    marginLeft: 10,
    marginTop: 5,
  },
  priceRow: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 85,
  },
  textPrice: {
    fontSize: 21,
    fontWeight: "bold",
  },
  textDiscount: {
    textDecorationLine: "line-through",
  },
  textRow: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
  },
  redText: {
    color: "red",
    fontWeight: "bold",
  },
  buttonSelect: {
    borderWidth: 1,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    maxWidth: "80%",
    marginTop: 20,
    marginLeft: 40,
    padding: 10,
  },
  buttonConfirm: {
    borderWidth: 1,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "flex-end",
    maxWidth: "80%",
    marginTop: 60,
    marginLeft: 40,
    padding: 10,
    backgroundColor: "red",
    color: "white",
  },
  whiteText: {
    color: "white",
    fontWeight: "bold",
  },
});
