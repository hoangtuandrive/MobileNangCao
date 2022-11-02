import { StatusBar } from "expo-status-bar";
import { useRef, useState } from "react";
import { Animated, StyleSheet, Text, View } from "react-native";
import { Button, Image } from "react-native";
import icon from "./assets/cat.jpg";

export default function App() {
  const [location, setLocation] = useState({
    x: null,
    y: null,
    marginLeft: new Animated.Value(10),
    marginTop: new Animated.Value(10),
  });

  function onPress(evt) {
    // console.log("====================================");
    var x = evt.nativeEvent.locationX;
    // console.log("====================================");
    // console.log(x);
    // console.log("====================================");
    var y = evt.nativeEvent.locationY;
    // console.log("====================================");
    setLocation({
      x: x,
      y: y,
      marginLeft: x,
      marginTop: y,
    });
  }
  function onMove(evt) {
    // console.log("====================================");
    // console.log(location);
    // console.log("====================================");
    var x = evt.nativeEvent.locationX;
    var y = evt.nativeEvent.locationY;
    setLocation({
      x: x,
      y: y,
      marginLeft: x,
      marginTop: y,
    });
    // setLocation({ marginLeft: x, marginTop: y });
  }
  function onRelease() {
    // console.log("Realse!");
  }
  const { marginTop, marginLeft } = location;
  return (
    <View
      onStartShouldSetResponder={() => true} //must have
      onMoveShouldSetResponder={() => true} //must have
      onResponderGrant={onPress}
      onResponderMove={onMove} //move but not released
      onResponderRelease={onRelease}
      style={styles.container}
    >
      <Text style={{ marginTop: 30 }}>Show something!</Text>

      <Animated.Image
        source={icon}
        style={{
          marginLeft: marginLeft,
          marginTop: marginTop,
          width: 200,
          height: 200,
        }}
      ></Animated.Image>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
