import React, { Component } from "react";
import {StyleSheet, View, Text } from "react-native";
import { blue, gray } from "../utils/colors";
import {SimpleLineIcons, Ionicons} from "@expo/vector-icons";

const GoodIcon = () => <SimpleLineIcons name="emotsmile" size={60} color={blue} />;
const PoorIcon = () => <Ionicons name="md-star-half" size={60} color={blue} />;

class QuizResults extends Component {

  render() {
    const { correct, incorrect } = this.props.route.params.results;
    const total = correct + incorrect;
    const pct_correct = (100 * correct / total).toFixed(1);
    const ResultIcon = pct_correct >= 80 ? GoodIcon : PoorIcon;
    return (
      <View style={styles.container}>
        <ResultIcon/>
        <Text style={styles.result}>Score: {pct_correct}%</Text>
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
