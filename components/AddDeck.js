import React, { Component } from "react";
import { StyleSheet, Text, KeyboardAvoidingView, TextInput, Button } from "react-native";
import {gray, white, blue} from "../utils/colors";
import TextButton from "./TextButton";

class AddDeck extends Component {
  state = {
    title: ""
  };

  handleSubmit = () => {
    const { navigate } = this.props.navigation;
    this.setState({title: ""});
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
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  input: {
    height: 40,
    width: 200,
    borderColor: gray,
    borderWidth: 1,
    margin: 20,
    padding: 10
  },
  button: {
    width: 150,
    height: 40,
    padding: 10,
    margin: 5,
    color: white,
    backgroundColor: blue
  }

});

export default AddDeck;
