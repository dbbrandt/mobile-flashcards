import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import { lightGray } from "../utils/colors";

export default function TextButton ({ children, onPress, disabled=false, style = {} }) {
  const bgColor = disabled ? lightGray : style.backgroundColor;
  return (
    <TouchableOpacity onPress={onPress} disabled={disabled}>
      <Text style={[styles.reset, style, {backgroundColor: bgColor}]}>{children}</Text>
    </TouchableOpacity>
  )
};

const styles = StyleSheet.create({
  reset: {
    textAlign: 'center'
  }
});
