import React from "react";
import { TouchableOpacity, View, Text, Image, Dimensions } from "react-native";
import { Rating } from "react-native-ratings";
export default function Item({ data }) {
  return (
    <View
      style={{
        width: Dimensions.get("window").width / 2 - 20,
        padding: 10,
        marginLeft: 10,
      }}
    >
      <Image
        source={{ uri: data.img }}
        style={{ height: 100, width: Dimensions.get("window").width / 2 - 20 }}
      />
      <Text>{data.name}</Text>
      <View style={{ flexDirection: "row" }}>
        <Rating
          type="custom"
          imageSize={20}
          ratingCount={5}
          startingValue={data.star}
          tintColor="rgb(229,229,229)"
          ratingBackgroundColor="rgb(200,200,200)"
        />
        <Text style={{ fontSize: 12, marginLeft: 10 }}>{data.buy}</Text>
      </View>
      <View style={{ flexDirection: "row" }}>
        <Text style={{ fontSize: 15, fontWeight: "bold" }}>{data.price}</Text>
        <Text style={{ fontSize: 15, marginLeft: 10, color: "grey" }}>
          {data.discount}
        </Text>
      </View>
    </View>
  );
}
