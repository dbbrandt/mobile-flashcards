import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Animated
} from "react-native";
import TextButton from "./TextButton";
import {
  crimson,
  forestGreen,
  white,
  blue,
  darkBlue
} from "../utils/colors";

const FRONT = "QUESTION";
const BACK = "ANSWER";

class CardDetail extends Component {
  state = {
    face: FRONT,
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

  handleFlip = () => {
    const {
      face,
      frontAnimation,
      backAnimation,
      rotation,
      rotationBack,
      duration
    } = this.state;
    const toFace = face === FRONT ? BACK : FRONT;

    // Animation rotation toValues
    // Default to transition to BACK
    let frontVal = 1;
    let backVal = 0;
    let rotationVal = 0;
    let rotationBackVal = 3;
    if (toFace === BACK) {
      frontVal = 0;
      backVal = 1;
      rotationVal = 3;
      rotationBackVal = 0;
    };

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

    this.setState({face: toFace});
  };

  handleSubmit = (card, correct) => {
    const { face } = this.state;
    console.log("CardDetails handleSubmit face: ", face);
    this.setState({face: FRONT});
    if (face === BACK) this.handleFlip();
    this.props.onSubmit(card, correct)
  };

  render() {
    const { card, current, totalCards } = this.props;
    const {
      face,
      frontAnimation,
      backAnimation,
      rotation,
      rotationBack
    } = this.state;
    const toFace = face === FRONT ? BACK : FRONT;
    console.log("CardDetails Render face: ", face);
    const { question, answer } = card;
    return (
      <View style={styles.container}>
        <View>
          <Text style={{ fontSize: 25, textAlign: "right" }}>
            {current + 1} of {totalCards}
          </Text>
        </View>
        <View style={styles.detail}>
          <View style={styles.center}>
            <Animated.View
              style={{
                opacity: frontAnimation,
                backfaceVisibility: "hidden",
                transformStyle: "preserve-3d",
                transform: [{ rotateY: rotation }]
              }}
            >
              <Text style={styles.text}>{question}</Text>
            </Animated.View>
            <View style={styles.behind}>
              <Animated.View
                style={{
                  opacity: backAnimation,
                  backfaceVisibility: "hidden",
                  transformStyle: "preserve-3d",
                  transform: [{ rotateY: rotationBack }]
                }}
              >
                <Text style={styles.text}>{answer}</Text>
              </Animated.View>
            </View>
          </View>
        </View>
        <TouchableOpacity onPress={this.handleFlip}>
          <Text style={styles.textType}>{toFace}</Text>
        </TouchableOpacity>
        <View style={styles.buttons}>
          <TextButton
            style={styles.correctButton}
            onPress={() => this.handleSubmit(card, true)}
          >
            Correct!
          </TextButton>
          <TextButton
            style={styles.incorrectButton}
            onPress={() => this.handleSubmit(card, false)}
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
    padding: 20
  },
  text: {
    fontSize: 20,
    padding: 30,
    textAlign: "center",
    color: white
  },
  textType: {
    textAlign: "center",
    marginTop: 20,
    fontSize: 30,
    color: darkBlue
  },
  center: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: blue,
    borderRadius: 20
  },
  behind: {
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    left: 0,
    top: 0,
    width: "100%",
    height: "100%"
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
