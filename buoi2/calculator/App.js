import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import React, { useState } from "react";

export default function App() {
  const [a,setA] = useState("");
  const [b,setB] = useState(""); 
  const [kq,setKQ] = useState("");
  function calculate(){
    setKQ(Number(a) + Number(b));
  }
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.text}>a</Text>
        <TextInput style={styles.input} placeholder={"Number"} onChangeText={setA}></TextInput>
      </View>
      <View style={styles.row}>
        <Text style={styles.text}>b</Text>
        <TextInput style={styles.input} placeholder={"Number"} onChangeText={setB}></TextInput>
      </View>
      <Button title="SUM" style={styles.button} onPress={calculate}></Button>
      <View style={styles.row}>
      <Text style={styles.text}>Result: </Text>
        <Text style={styles.result}>{kq}</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  row: {
    flexDirection: "row",
    alignItems: "center"
  },
  text:{
    textSize: 16,
  },
  input:{
    borderWidth: 2,
    borderRadius: 5,
    margin: 5,
    width: 100,
    height: 50,
    textAlign: "center",
  },
  result:{
    borderWidth: 2,
    borderRadius: 5,
    margin: 7,
    width: 50,
    height: 25,
    color: "black",
    textAlign: "center",
    justifyContent: "center",
  },
  button:{
    borderWidth: 2,
    width: 150,
    height: 50,
    
  }
});
