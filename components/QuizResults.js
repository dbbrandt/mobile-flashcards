import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import {blue, gray, white} from "../utils/colors";
import { SimpleLineIcons, Ionicons } from "@expo/vector-icons";
import TextButton from "./TextButton";

class QuizResults extends Component {
  render() {
    const { navigate } = this.props.navigation;
    const { deck, handleRestart, correct, answered } = this.props.route.params;
    const pct_correct = ((100 * correct) / answered).toFixed(1);
    // Reset quiz for back and button navigation returning to quiz
    handleRestart();
    return (
      <View style={styles.container}>
        <View style={styles.results}>
          {pct_correct >= 80 ? (
            <SimpleLineIcons name="emotsmile" size={60} color={blue} />
          ) : (
            <Ionicons name="md-star-half" size={60} color={blue} />
          )}
          <Text style={styles.resultTitle}>{deck.title}</Text>
          <Text style={styles.result}>Score: {pct_correct}%</Text>
          <Text style={styles.details}>Answered: {answered}</Text>
          <Text style={styles.details}>Correct: {correct}</Text>
        </View>
        <View style={styles.buttons}>
          <TextButton
            style={styles.restartButton}
            onPress={() => {
              navigate('Quiz', { deck })
            }}
          >
            Restart Quiz
          </TextButton>
          <TextButton
            style={styles.deckButton}
            onPress={() => navigate('Deck Detail')}
          >
            Return to Deck
          </TextButton>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  results: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end"
  },
  resultTitle: {
    fontSize: 30,
    color: blue
  },
  result: {
    fontSize: 40,
    color: blue,
    padding: 10
  },
  details: {
    fontSize: 20,
    color: gray
  },
  buttons: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start"
  },
  restartButton: {
    width: 150,
    height: 40,
    padding: 10,
    marginTop: 50,
    marginBottom: 5,
    color: white,
    backgroundColor: blue
  },
  deckButton: {
    width: 150,
    height: 40,
    padding: 10,
    margin: 5,
    color: white,
    backgroundColor: gray
  }
});

export default QuizResults;
