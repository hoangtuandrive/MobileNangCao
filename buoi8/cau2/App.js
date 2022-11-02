import { StatusBar } from "expo-status-bar";
import { useRef, useState } from "react";
import { Animated, StyleSheet, Text, View } from "react-native";
import { Button, Image } from "react-native";
import icon from "./assets/cat.jpg";

export default function App() {
  const [location1, setLocation1] = useState({
    marginLeft1: getRndInteger(0, 150),
    marginTop1: getRndInteger(0, 150),
  });
  const [location2, setLocation2] = useState({
    marginLeft2: getRndInteger(0, 150),
    marginTop2: getRndInteger(0, 150),
  });
  const [location3, setLocation3] = useState({
    marginLeft3: getRndInteger(0, 150),
    marginTop3: getRndInteger(0, 150),
  });

  function setLocationImage1() {
    x = getRndInteger(0, 150);
    y = getRndInteger(0, 150);
    setLocation1({
      marginLeft1: x,
      marginTop1: y,
    });
  }
  function setLocationImage2() {
    x = getRndInteger(0, 150);
    y = getRndInteger(0, 150);
    setLocation2({
      marginLeft2: x,
      marginTop2: y,
    });
  }
  function setLocationImage3() {
    x = getRndInteger(0, 150);
    y = getRndInteger(0, 150);
    setLocation3({
      marginLeft3: x,
      marginTop3: y,
    });
  }

  function onPress() {
    setLocationImage1();
    setLocationImage2();
    setLocationImage3();
  }

  function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const { marginTop1, marginLeft1 } = location1;
  const { marginTop2, marginLeft2 } = location2;
  const { marginTop3, marginLeft3 } = location3;
  return (
    <View style={styles.container}>
      <Text style={{ marginTop: 30 }}>Show something!</Text>
      <Animated.Image
        source={icon}
        style={{
          marginLeft: marginLeft1,
          marginTop: marginTop1,
          width: 80,
          height: 80,
        }}
        onStartShouldSetResponder={() => true}
        onMoveShouldSetResponder={() => true}
        onResponderGrant={onPress}
      ></Animated.Image>
      <Animated.Image
        source={icon}
        style={{
          marginLeft: marginLeft2,
          marginTop: marginTop2,
          width: 80,
          height: 80,
        }}
        onStartShouldSetResponder={() => true}
        onMoveShouldSetResponder={() => true}
        onResponderGrant={onPress}
      ></Animated.Image>
      <Animated.Image
        source={icon}
        style={{
          marginLeft: marginLeft3,
          marginTop: marginTop3,
          width: 80,
          height: 80,
        }}
        onStartShouldSetResponder={() => true}
        onMoveShouldSetResponder={() => true}
        onResponderGrant={onPress}
      ></Animated.Image>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
