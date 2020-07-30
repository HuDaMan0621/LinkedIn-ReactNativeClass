// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
  View,
  ActivityIndicator,
  ProgressViewIOS,
  ProgressBarAndroid,
  Button,
  Alert,
  Dimensions,
  Text,
  Platform,
  StyleSheet,
} from 'react-native';

const { height, width } = Dimensions.get('window');

export default function App() {
  const onButtonPress = () => {
    Alert.alert(`${new Date().toLocaleTimeString()} button press`)
  }



  return (
    <View style={styles.page}>
      {/* {Platform.OS === "ios" && <ProgressViewIOS progress={0.50} />}
      {Platform.OS === "android" && <ProgressBarAndroid
        styleAttr="Horizontal"
        indeterminate={false}
        color="blue"
        progress={0.50} />}
      <ActivityIndicator size="large" color="#61DBFB" />
      <Button title="click me" onPress={onButtonPress} />
      <Text> Height: {height}</Text>
      <Text> Width: {width}</Text>
      <Text> OS: {Platform.OS}</Text> */}
      <Text style={styles.text}>Red</Text>
      <Text style={[styles.text, styles.selectedText]}>Green</Text>
      <Text style={styles.text}>Blue</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    marginTop: 40,
    backgroundColor: "#DDD"
  },
  text: {
    flex: 1,
    textAlign: "center",
    fontSize: 22,
    color: "red",
    backgroundColor: "yellow",
    margin: 10,
    padding: 5
  },
  selectedText: {
    backgroundColor: "green"
  }
})
