import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Platform } from "react-native";
import TextButton from "./TextButton";
import { crimson, forestGreen, white, blue } from "../utils/colors";


Completed = () => {
  return (
    <View style={styles.detail}>
      <Text style={{ fontSize: 30, padding: 10, textAlign: "center" }}>Quiz Completed</Text>
    </View>
  );
};

class CardDetail extends Component {
  state = {
    side: "Question"
  };

  handleFlip = () => {
    const { side } = this.state;
    this.setState({ side: side === "Question" ? "Answer" : "Question" });
  };

  getText = (card) => {
    const { side } = this.state;
    const { question, answer } = card;
    return {
      text: side === 'Question' ? question : answer,
      flipText: side === 'Question' ? "answer" : "question"
    }
  };

  render() {
    const { card, onSubmit, current, totalCards, completed } = this.props;
    if (completed) return <Completed/>;
    const { text, flipText } = this.getText(card);
    return (
      <View style={styles.container}>
        <View>
          <Text style={{fontSize: 25, textAlign: "right"}}>{current+1} of {totalCards}</Text>
        </View>
        <TouchableOpacity onPress={this.handleFlip} style={styles.detail}>
          <Text style={{ fontSize: 30, padding: 10, textAlign: "center" }}>{text}</Text>
          <Text style={{ fontSize: 20, padding: 10, color: blue }}>{flipText}</Text>
        </TouchableOpacity>
        <View style={styles.buttons}>
          <TextButton
            style={styles.correctButton}
            onPress={() => onSubmit(card, true)}
          >
            Correct!
          </TextButton>
          <TextButton
            style={styles.incorrectButton}
            onPress={() => onSubmit(card, false)}
          >
            Incorrect
          </TextButton>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "stretch"
  },
  detail: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    margin: 30
  },
  buttons: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  correctButton: {
    width: 150,
    height: 40,
    padding: 10,
    margin: 5,
    color: white,
    backgroundColor: forestGreen
  },
  incorrectButton: {
    width: 150,
    height: 40,
    padding: 10,
    margin: 5,
    color: white,
    backgroundColor: crimson
  }
});

export default CardDetail;
