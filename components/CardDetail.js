import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Animated } from "react-native";
import TextButton from "./TextButton";
import {crimson, forestGreen, white, blue, gray, lightBlue, darkBlue} from "../utils/colors";


class CardDetail extends Component {
  state = {
    frontAnimation: new Animated.Value(1),
    backAnimation: new Animated.Value(0),
    rotation: new Animated.Value(0),
    rotationBack: new Animated.Value(3)
  };

  constructor(props) {
    super(props);
    this.state.handleFlip = this.handleFlip;
    this.state.duration = 500;
  }

  handleFlip = (onFront = true, frontVal = 0, backVal = 1, rotationVal = 3, rotationBackVal = 0) => {
    const { frontAnimation, backAnimation, rotation, rotationBack, duration } = this.state;
    Animated.timing(frontAnimation, {
      toValue: frontVal,
      duration: duration
    }).start();
    Animated.timing(backAnimation, {
      toValue: backVal,
      duration: duration
    }).start();
    Animated.timing(rotation, {
      toValue: rotationVal,
      duration: duration
    }).start();
    Animated.timing(rotationBack, {
      toValue: rotationBackVal,
      duration: duration
    }).start();

    onFront ? this.setState({handleFlip: () => this.handleFlip(false, 1, 0, 0, 3)})
      : this.setState({handleFlip: () => this.handleFlip()});
  };


  render() {
    const { card, onSubmit, current, totalCards } = this.props;
    const { handleFlip, frontAnimation, backAnimation, rotation, rotationBack } = this.state;
    const { question, answer } = card;
    return (
      <View style={styles.container}>
        <View>
          <Text style={{fontSize: 25, textAlign: "right"}}>{current+1} of {totalCards}</Text>
        </View>
        <TouchableOpacity onPress={handleFlip} style={styles.detail}>
          <View style={styles.center}>
          <Animated.View style={{opacity: frontAnimation, backfaceVisibility: "hidden", transformStyle: "preserve-3d", transform: [{rotateY: rotation}] }}>
            <Text style={styles.text}>{question}</Text>
            <Text style={[styles.text, { fontSize: 20, color: darkBlue}]}>Answer</Text>
          </Animated.View>
            <View style={styles.behind}>
              <Animated.View style={{opacity: backAnimation, backfaceVisibility: "hidden", transformStyle: "preserve-3d", transform: [{rotateY: rotationBack}]}}>
                <Text style={styles.text}>{answer}</Text>
                <Text style={[styles.text, { fontSize: 20, color: darkBlue}]}>Question</Text>
              </Animated.View>
            </View>
          </View>
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
    padding: 20,
  },
  text: {
    fontSize: 30,
    padding: 10,
    textAlign: "center",
    color: white
  },
  center: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: blue,
    borderRadius: 20
  },
  behind: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    left: 0,
    top: 0,
    width: '100%',
    height: '100%',
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
  },
});

export default CardDetail;
