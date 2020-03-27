import React, { Component } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { white } from "../utils/colors";

class DeckList extends Component {
  render() {
    const decks = ["deck1","deck2","deck3"];
    return (
      <View style={styles.container}>
        {decks.map((deck) => (
          <View key={deck} style={styles.item}>
            <TouchableOpacity onPress={() => {
              const { navigate } = this.props.navigation;
              navigate('Deck Detail', {deck});
            }}>
                <Text style={{fontSize: 30}}>{deck}</Text>
            </TouchableOpacity>
          </View>
          ))}
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "stretch"
  },
  item: {
    backgroundColor: white,
    borderRadius: Platform.OS === "ios" ? 8 : 2,
    padding: 20,
    marginTop: 2,
    justifyContent: "center",
    shadowRadius: 3,
    shadowOpacity: 0.8,
    shadowColor: "rgba(0, 0, 0, 0.24)",
    shadowOffset: {
      width: 0,
      height: 3
    }
  }
});

export default DeckList;
