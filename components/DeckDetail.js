import React, { Component } from "react";
import { connect } from "react-redux";
import { StyleSheet, View, Text } from "react-native";
import { blue, gray, white } from "../utils/colors";
import TextButton from "./TextButton";

class DeckDetail extends Component {
  handleAddCard = () => {
    const { deck } = this.props;
    this.props.navigation.navigate("Add Card", { deck });
  };

  handleStartQuiz = () => {
    const { deck } = this.props;
    this.props.navigation.navigate("Quiz", { deck });
  };

  render() {
    const { title, questions } = this.props.deck;
    const length = questions.length;
    const cardLabel = length !== 1 ? "cards" : "card";
    return (
      <View style={styles.container}>
        <View style={styles.detail}>
          <Text style={{ fontSize: 30, padding: 10 }}>{title}</Text>
          <Text style={{ fontSize: 20 }}>
            ({length} {cardLabel})
          </Text>
        </View>
        <View style={styles.buttons}>
          <TextButton style={styles.addButton} onPress={this.handleAddCard}>
            Add Card
          </TextButton>
          <TextButton
            disabled={!length}
            style={styles.quizButton}
            onPress={this.handleStartQuiz}
          >
            Start Quiz
          </TextButton>
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state, props) => {
  const { title } = props.route.params;
  return {
    ...props,
    deck: state[title]
  }
};

export default connect(mapStateToProps)(DeckDetail);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "stretch"
  },
  detail: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  buttons: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
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


