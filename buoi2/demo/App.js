import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import React, { useState } from "react";

export default function App() {
  //useState hook
  const [name,setName] = useState("");
  function callFunction(){
    console.warn(name);
  }
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Text>Open up App.js to start working on your app!</Text>
      <TextInput placeholder="Text" style={styles.input}  onChangeText={setName}></TextInput>
      <Button title='Click' style={styles.button} onPress={callFunction}></Button>
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
  input:{
    marginTop: 10,
    borderWidth: 1,
    width: 100,
	textAlign: "center",
  },
  button:{
    marginTop: 10,
  }
});
