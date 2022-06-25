import React from "react";
import { TouchableOpacity, Text, StyleSheet, StyleProp, ViewStyle, TextStyle } from "react-native";

type Props = {
  title: string;
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  testID?: string;
}

const Button: React.FC<Props> = ({ title, onPress, style, textStyle, testID }) => {

  return(
    <TouchableOpacity
      onPress={onPress}
      style={[styles.container, style]}
      testID={testID}
    >
      <Text style={[styles.text, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: "#ccc",
    borderRadius: 8
  },
  text: {
    color: "#777",
    fontSize: 16,
    textAlign: "center"
  }
});

export default Button;