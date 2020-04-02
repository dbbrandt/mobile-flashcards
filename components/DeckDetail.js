import React, { Component } from "react";
import { connect } from "react-redux";
import { StyleSheet, View, Text } from "react-native";
import { blue, gray, white } from "../utils/colors";
import TextButton from "./TextButton";
import {initQuiz} from "../actions/quiz";

class DeckDetail extends Component {
  handleAddCard = (deck) => {
    this.props.navigation.navigate("Add Card", { deck });
  };

  handleStartQuiz = (deck) => {
    this.props.navigation.navigate("Quiz", { deck });
  };

  handleReset = (deck) => {
    console.log("handleReset deck: ", deck);
    this.props.dispatch(initQuiz({ deck }))
  };

  render() {
    const { deck, cards, correct, attempts, completions } = this.props;
    const { title, questions } = deck;
    const length = questions.length;
    const cardLabel = length !== 1 ? "cards" : "card";
    return (
      <View style={styles.container}>
        <View style={styles.detail}>
          <Text style={styles.deckHeading}>{title}</Text>
          <Text style={{ fontSize: 20, marginBottom: 20, color: blue}}>
            ({length} {cardLabel})
          </Text>

          <Text style={styles.resultsHeading}>Cards</Text>
          <Text style={styles.results}>Answers: {cards}</Text>
          <Text style={styles.results}>Correct: {correct}%</Text>
          <Text style={styles.resultsHeading}>Quizes</Text>
          <Text style={styles.results}>Started: {attempts}</Text>
          <Text style={styles.results}>Completed: {completions}</Text>
        </View>
        <View style={styles.buttons}>
          <TextButton style={styles.resetButton} onPress={() => this.handleReset(deck)}>
            Reset
          </TextButton>
          <TextButton style={styles.addButton} onPress={() => this.handleAddCard(deck)}>
            Add Card
          </TextButton>
          <TextButton
            disabled={!length}
            style={styles.quizButton}
            onPress={() => this.handleStartQuiz(deck)}
          >
            Start Quiz
          </TextButton>
        </View>
      </View>
    );
  }
}

const mapStateToProps = ({ decks, quiz }, props) => {
  const { title } = props.route.params;
  const { cards, correct, attempts, completions } = quiz[title];
  return {
    ...props,
    cards,
    correct: correct ? (100 * correct / cards ).toFixed(0) : 0,
    attempts,
    completions,
    deck: decks[title]
  }
};

export default connect(mapStateToProps)(DeckDetail);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  detail: {
    alignItems: "center",
  },
  deckHeading: {
    fontSize: 30,
    marginTop: 100,
    padding: 10,
    color: blue
  },
  resultsHeading: {
    marginTop: 10,
    fontSize: 25,
    color: gray
  },
  results: {
    fontSize: 20,
    color: gray
  },
  buttons: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  resetButton: {
    marginBottom: 80,
    margin: 10,
    padding: 5,
    color: white,
    backgroundColor: gray
  },
  addButton: {
    width: 150,
    height: 40,
    padding: 10,
    margin: 5,
    color: white,
    backgroundColor: blue
  },
  quizButton: {
    width: 150,
    height: 40,
    padding: 10,
    margin: 5,
    color: white,
    backgroundColor: gray
  }
});


