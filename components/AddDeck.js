import React, { Component } from "react";
import { connect } from "react-redux";
import { Text, KeyboardAvoidingView, TextInput, Keyboard } from "react-native";
import styles from "./styles";
import TextButton from "./TextButton";
import {createDeck} from "../utils/api";
import {addDeck} from "../actions";

class AddDeck extends Component {
  state = {
    title: ""
  };

  handleSubmit = () => {
    const { navigate } = this.props.navigation;
    const { title } = this.state;
    this.setState({title: ""});
    // Needed for Android when navigating back to main tab.
    Keyboard.dismiss();
    createDeck(title).then(() =>
      this.props.dispatch(addDeck({ title })));
    navigate('Flash Cards');
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
export default connect()(AddDeck);
