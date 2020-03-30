import React, { Component } from "react";
import {StyleSheet, View, Text } from "react-native";
import { blue, gray } from "../utils/colors";

class QuizResults extends Component {

  render() {
    const { correct, incorrect } = this.props.route.params.results;
    const total = correct + incorrect;
    const pct_correct = (100 * correct / total).toFixed(1);
    return (
      <View style={styles.container}>
        <Text style={styles.result}>Percent Correct: {pct_correct}%</Text>
        <Text style={styles.details}>Answered: { total }</Text>
        <Text style={styles.details}>Correct: { correct }</Text>
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
    fontSize: 50,
    color: blue,
    padding: 10
  },
  details: {
    fontSize: 20,
    color: gray
  }
});

export default QuizResults;
