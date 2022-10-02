import React, { useState, useEffect } from "react";
import { Text, View, Image, TextInput, TouchableOpacity } from "react-native";

import styles from "./styles";

const App = () => {
  const price = 141800;
  const [amount, setAmount] = useState(1);

  const numberToString = (number) => {
    return number.toLocaleString("it-IT", {
      style: "currency",
      currency: "VND",
    });
  };

  return (
    <View style={styles.page}>
      <View style={styles.firstContainer}>
        <View style={styles.info}>
          <Image
            style={styles.image}
            source={require("./assets/book.png")}
          ></Image>
          <View style={styles.content}>
            <Text style={styles.textInfo}>
              Nguyên hàm tích phân và ứng dụng
            </Text>
            <Text style={styles.textInfo}>Cung cấp bởi Tiki Trading</Text>
            <Text style={styles.price}>{numberToString(price)}</Text>
            <Text style={styles.priceDiscount}>{numberToString(price)}</Text>
            <View style={styles.amountRow}>
              <View style={styles.amountGroup}>
                <TouchableOpacity
                  style={styles.buttonAmount}
                  onPress={() => {
                    -amount > 1 && setAmount(amount - 1);
                  }}
                >
                  <Text style={styles.buttonTextAmount}>-</Text>
                </TouchableOpacity>
                <Text style={styles.amountText}>{amount}</Text>
                <TouchableOpacity
                  style={styles.buttonAmount}
                  onPress={() => {
                    setAmount(amount + 1);
                  }}
                >
                  <Text style={styles.buttonTextAmount}>+</Text>
                </TouchableOpacity>
              </View>

              <Text style={styles.textInfoBlue}>Mua sau</Text>
            </View>
          </View>
        </View>
        <View style={styles.textRow}>
          <Text style={{ fontWeight: "bold", fontSize: 16, color: "black" }}>
            Mã giảm giá đã lưu
          </Text>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 16,
              color: "blue",
              marginLeft: 20,
            }}
          >
            Xem tại đây
          </Text>
        </View>
        <View style={styles.buttonRow}>
          <View style={styles.discountBox}>
            <View style={styles.yellowBox}></View>
            <TextInput
              placeholderTextColor="black"
              placeholder="Mã giảm giá"
              style={{ width: 100 }}
            ></TextInput>
          </View>
          <TouchableOpacity style={styles.buttonApply}>
            <Text style={styles.buttonTextApply}>Áp dụng</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.secondContainer}>
        <Text style={styles.textInfo}>
          Bạn có phiếu quà tặng Tiki/Got it/ Urbox?
        </Text>
        <Text style={styles.textInfoBlue}>Nhập tại đây?</Text>
      </View>
      <View style={styles.thirdContainer}>
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 24,
            marginTop: 5,
            color: "black",
          }}
        >
          Tạm tính
        </Text>
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 24,
            marginTop: 5,
            color: "red",
          }}
        >
          {amount * price}
        </Text>
      </View>
      <View style={styles.fourthContainer}>
        <View style={styles.totalRow}>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 24,
              marginTop: 5,
              color: "grey",
            }}
          >
            Thành tiền
          </Text>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 24,
              marginTop: 5,
              color: "red",
            }}
          >
            {amount * price}
          </Text>
        </View>
        <TouchableOpacity style={styles.buttonOrder}>
          <Text style={styles.textButtonOrder}>TIẾN HÀNH ĐẶT HÀNG</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default App;
