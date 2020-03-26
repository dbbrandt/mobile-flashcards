import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

class AddDeck extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Add Deck</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default AddDeck;
