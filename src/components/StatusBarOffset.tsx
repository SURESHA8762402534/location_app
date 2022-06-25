import React from "react";
import { View, Platform, StyleSheet, StatusBar } from "react-native";

const StatusBarOffset = () => {

  if(Platform.OS === "ios") return null;

  return <View style={styles.conteiner} />
}

const styles = StyleSheet.create({
  conteiner: {
    height: StatusBar.currentHeight,
    width: "100%"
  }
});

export default StatusBarOffset;