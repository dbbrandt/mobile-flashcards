import React, { Component } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { white } from "../utils/colors";

const ItemDetail = ({ deck }) => {
  const { title, questions } = deck;
  return (
    <View style={styles.details}>
      <Text style={{fontSize: 30}}>{title}</Text>
      <Text style={{fontSize: 20, padding: 5}}>
        ({questions.length} {questions.length !== 1 ? "cards" : "card"})
      </Text>
    </View>
  )
};

class DeckList extends Component {
  render() {
    const decks = {
      React: {
        title: 'React',
        questions: [
          {
            question: 'What is React?',
            answer: 'A library for managing user interfaces'
          },
          {
            question: 'Where do you make Ajax requests in React?',
            answer: 'The componentDidMount lifecycle event'
          }
        ]
      },
      JavaScript: {
        title: 'JavaScript',
        questions: [
          {
            question: 'What is a closure?',
            answer: 'The combination of a function and the lexical environment within which that function was declared.'
          }
        ]
      }
    };
    const count = 3;
    return (
      <View style={styles.container}>
        {Object.values(decks).map((deck) => (
          <View key={deck.title} style={styles.item}>
            <TouchableOpacity onPress={() => {
              const { navigate } = this.props.navigation;
              navigate('Deck Detail', {deck});
            }}>
              <ItemDetail deck={deck}/>
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
    justifyContent: "space-around",
    alignItems: "flex-start",
    shadowRadius: 3,
    shadowOpacity: 0.8,
    shadowColor: "rgba(0, 0, 0, 0.24)",
    shadowOffset: {
      width: 0,
      height: 3
    },
  },
  details: {
    flexDirection: "row",
    alignItems: "flex-end",
  }
});

export default DeckList;
