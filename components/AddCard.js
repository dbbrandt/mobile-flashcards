import React, { Component } from "react";
import { Text, KeyboardAvoidingView, TextInput, Button } from "react-native";
import TextButton from "./TextButton";
import styles from "./styles";
class AddCard extends Component {
  state = {
    question: "",
    answer: ""
  };

  handleSubmit = () => {
    const { question, answer } = this.state;
    const { deck } = this.props;
    this.setState({question: "", answer: ""});
    // ToDo: Save  new card
    this.props.navigation.goBack();
  };

  handleChange = (target, text ) => {
    this.setState({[target]: text});
  };

  render() {
    const { question, answer } = this.state;
    return (
      <KeyboardAvoidingView
        keyboardVerticalOffset={50}
        behavior="padding"
        style={styles.container}
      >
        <Text style={{fontSize: 20}}>Enter the new card details.</Text>
        <TextInput
          value={question}
          onChangeText={text => this.handleChange("question",text)}
          placeholder={"Question?"}
          style={styles.input}
        />
        <TextInput
          value={answer}
          onChangeText={text => this.handleChange("answer",text)}
          placeholder={"Answer..."}
          style={styles.input}
        />
        <TextButton style={styles.button} onPress={this.handleSubmit} disabled={!question || !answer}>
          Submit
        </TextButton>
      </KeyboardAvoidingView>
    );
  }
}

export default AddCard;
