import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";
import { lightGray } from "../utils/colors";

export default function TextButton({
  children,
  onPress,
  disabled = false,
  style = {}
}) {
  const bgColor = disabled ? lightGray : style.backgroundColor;
  return (
    <TouchableOpacity style={{borderRadius: 10, backgroundColor: bgColor, margin: 5 }} onPress={onPress} disabled={disabled}>
      <Text style={[styles.text, style, { backgroundColor: bgColor }]}>
        {children}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  text: {
    textAlign: "center"
  }
});
