import React, { Component } from "react";
import { connect } from "react-redux";
import { Text, View, KeyboardAvoidingView, TextInput } from "react-native";
import TextButton from "./TextButton";
import styles from "./styles";
import { saveCard } from "../utils/api";
import { addCard } from "../actions/decks";
class AddCard extends Component {
  state = {
    question: "",
    answer: ""
  };

  handleSubmit = () => {
    const { dispatch } = this.props;
    const { deck } = this.props.route.params;
    const { question, answer } = this.state;
    const card = { question, answer };
    saveCard(deck, card).then(() => dispatch(addCard({ deck, card })));
    this.props.navigation.navigate("Deck Detail", { deck });
  };

  handleChange = (target, text) => {
    this.setState({ [target]: text });
  };

  render() {
    const { question, answer } = this.state;
    return (
      <KeyboardAvoidingView
        keyboardVerticalOffset={-110}
        behavior="padding"
        style={styles.container}
      >
        <View>
          <Text style={{ textAlign: "center", fontSize: 20 }}>Enter the new card details.</Text>
          <TextInput
            value={question}
            onChangeText={text => this.handleChange("question", text)}
            placeholder="Question?"
            style={styles.input}
          />
          <TextInput
            value={answer}
            onChangeText={text => this.handleChange("answer", text)}
            placeholder="Answer..."
            style={styles.input}
          />
        </View>
        <View style={{margin: 20}}>
          <TextButton
            style={styles.button}
            onPress={this.handleSubmit}
            disabled={!question || !answer}
          >
            Submit
          </TextButton>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

export default connect()(AddCard);
