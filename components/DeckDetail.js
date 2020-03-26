import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";

class DeckDetail extends Component {
  render() {
    const { deck } = this.props.route.params;
    return (
      <View style={styles.container}>
        <Text>{deck}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    margin: 20
  }
});

export default DeckDetail;
