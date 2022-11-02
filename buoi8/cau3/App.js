import { StatusBar } from "expo-status-bar";
import { useEffect, useRef, useState, useEffect } from "react";
import { Animated, StyleSheet, Text, View } from "react-native";
import { Button, Image } from "react-native";
import cat from "./assets/cat.png";
import mouse from "./assets/mouse.png";

export default function App() {
  const [location1, setLocation1] = useState({
    marginLeft1: getRndInteger(0, 300),
    marginTop1: getRndInteger(0, 400),
  });
  const [location2, setLocation2] = useState({
    marginLeft2: getRndInteger(0, 300),
    marginTop2: getRndInteger(0, 400),
  });
  const [location3, setLocation3] = useState({
    marginLeft3: getRndInteger(0, 300),
    marginTop3: getRndInteger(0, 400),
  });
  const [locationCat, setLocationCat] = useState({
    marginLeftCat: getRndInteger(0, 300),
    marginTopCat: getRndInteger(0, 400),
  });

  // useEffect(() => {
  //   const roll = getRndInteger(1, 7);
  //   console.log(roll);
  // }, []);

  function setLocationImage1() {
    x = getRndInteger(0, 300);
    y = getRndInteger(0, 400);
    setLocation1({
      marginLeft1: x,
      marginTop1: y,
    });
  }
  function setLocationImage2() {
    x = getRndInteger(0, 300);
    y = getRndInteger(0, 400);
    setLocation2({
      marginLeft2: x,
      marginTop2: y,
    });
  }
  function setLocationImage3() {
    x = getRndInteger(0, 300);
    y = getRndInteger(0, 400);
    setLocation3({
      marginLeft3: x,
      marginTop3: y,
    });
  }

  function onPress1() {
    setLocationImage1();
    setLocationImage2();
    setLocationImage3();
    const { marginTop1, marginLeft1 } = location1;
    setLocationCat({
      marginLeftCat: marginLeft1,
      marginTopCat: marginTop1,
    });
  }

  function onPress2() {
    setLocationImage1();
    setLocationImage2();
    setLocationImage3();
    const { marginTop2, marginLeft2 } = location2;
    setLocationCat({
      marginLeftCat: marginLeft2,
      marginTopCat: marginTop2,
    });
  }

  function onPress3() {
    setLocationImage1();
    setLocationImage2();
    setLocationImage3();
    const { marginTop3, marginLeft3 } = location3;
    setLocationCat({
      marginLeftCat: marginLeft3,
      marginTopCat: marginTop3,
    });
  }

  function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const { marginTop1, marginLeft1 } = location1;
  const { marginTop2, marginLeft2 } = location2;
  const { marginTop3, marginLeft3 } = location3;
  const { marginTopCat, marginLeftCat } = locationCat;
  return (
    <View style={styles.container}>
      <Text style={{ marginTop: 30 }}>Show something!</Text>
      <Animated.Image
        source={mouse}
        style={{
          position: "absolute",
          marginLeft: marginLeft1,
          marginTop: marginTop1,
          width: 80,
          height: 80,
        }}
        onStartShouldSetResponder={() => true}
        onMoveShouldSetResponder={() => true}
        onResponderGrant={onPress1}
      ></Animated.Image>
      <Animated.Image
        source={mouse}
        style={{
          position: "absolute",
          marginLeft: marginLeft2,
          marginTop: marginTop2,
          width: 80,
          height: 80,
        }}
        onStartShouldSetResponder={() => true}
        onMoveShouldSetResponder={() => true}
        onResponderGrant={onPress2}
      ></Animated.Image>
      <Animated.Image
        source={mouse}
        style={{
          position: "absolute",
          marginLeft: marginLeft3,
          marginTop: marginTop3,
          width: 80,
          height: 80,
        }}
        onStartShouldSetResponder={() => true}
        onMoveShouldSetResponder={() => true}
        onResponderGrant={onPress3}
      ></Animated.Image>
      <Animated.Image
        source={cat}
        style={{
          position: "absolute",
          marginLeft: marginLeftCat,
          marginTop: marginTopCat,
          width: 80,
          height: 80,
        }}
        onStartShouldSetResponder={() => true}
        onMoveShouldSetResponder={() => true}
      ></Animated.Image>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
