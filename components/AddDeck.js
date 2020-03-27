import React, { Component } from "react";
import { Text, KeyboardAvoidingView, TextInput, Button } from "react-native";
import styles from "./styles";
import TextButton from "./TextButton";

class AddDeck extends Component {
  state = {
    title: ""
  };

  handleSubmit = () => {
    const { navigate } = this.props.navigation;
    this.setState({title: ""});
    // Todo: Save new deck
    navigate('Home');
  };

  handleChange = (text) => {
    this.setState({title: text});
  };

  render() {
    const { title } = this.state;
    return (
      <KeyboardAvoidingView
        keyboardVerticalOffset={50}
        behavior="padding"
        style={styles.container}
      >
        <Text style={{fontSize: 20}}>Enter the name of a new flash card deck:</Text>
        <TextInput
          value={title}
          onChangeText={text => this.handleChange(text)}
          placeholder={"Deck Name"}
          maxLength={30}
          style={styles.input}
        />
        <TextButton style={styles.button} onPress={this.handleSubmit} disabled={!title}>
          Submit
        </TextButton>
      </KeyboardAvoidingView>
    );
  }
}
export default AddDeck;
