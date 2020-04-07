import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Animated } from "react-native";
import TextButton from "./TextButton";
import {crimson, forestGreen, white, blue, gray} from "../utils/colors";


class CardDetail extends Component {
  state = {
    side: "Question",
    fadeAnim: new Animated.Value(1)
  };

  handleFlip = () => {
    const { side } = this.state;
    this.setState({ side: side === "Question" ? "Answer" : "Question" });
  };

  fadeIn = () => {
    // Will change fadeAnim value to 1 in 5 seconds
    Animated.timing(this.state.fadeAnim, {
      toValue: 1,
      duration: 500
    }).start();
  };

  fadeOut = () => {
    // Will change fadeAnim value to 0 in 5 seconds
    Animated.timing(this.state.fadeAnim, {
      toValue: 0,
      duration: 500
    }).start();
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
    const { card, onSubmit, current, totalCards } = this.props;
    const { text, flipText } = this.getText(card);
    const { fadeAnim } = this.state;
    console.log("FadeAnim: ", fadeAnim);
    return (
      <View style={styles.container}>
        <View>
          <Text style={{fontSize: 25, textAlign: "right"}}>{current+1} of {totalCards}</Text>
        </View>
        <Animated.View style={[styles.detail, {opacity: fadeAnim}]}>
          <Text style={{ fontSize: 30, padding: 10, textAlign: "center" }}>{text}</Text>
          <Text style={{ fontSize: 20, padding: 10, color: blue }}>{flipText}</Text>
        </Animated.View>
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
          <TextButton
            style={styles.fadeButton}
            onPress={this.fadeIn}
          >
            Fade In
          </TextButton>
          <TextButton
            style={styles.fadeButton}
            onPress={this.fadeOut}
          >
            Fade Out
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
    alignItems: "center",
    justifyContent: "center",
    margin: 30
  },
  buttons: {
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
  },
  fadeButton: {
    width: 150,
    height: 40,
    padding: 10,
    margin: 5,
    color: white,
    backgroundColor: gray
  }
});

export default CardDetail;
