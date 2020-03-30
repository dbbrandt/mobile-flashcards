import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import { blue, gray } from "../utils/colors";
import { SimpleLineIcons, Ionicons } from "@expo/vector-icons";

class QuizResults extends Component {
  render() {
    const { correct, answered } = this.props.route.params;
    const pct_correct = ((100 * correct) / answered).toFixed(1);
    return (
      <View style={styles.container}>
        {pct_correct >= 80 ? (
          <SimpleLineIcons name="emotsmile" size={60} color={blue} />
        ) : (
          <Ionicons name="md-star-half" size={60} color={blue} />
        )}
        <Text style={styles.result}>Score: {pct_correct}%</Text>
        <Text style={styles.details}>Answered: {answered}</Text>
        <Text style={styles.details}>Correct: {correct}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  result: {
    fontSize: 40,
    color: blue,
    padding: 10
  },
  details: {
    fontSize: 20,
    color: gray
  }
});

export default QuizResults;
