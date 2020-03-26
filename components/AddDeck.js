import React, { Component } from "react";
import { StyleSheet, Text, KeyboardAvoidingView, TextInput, Button } from "react-native";
import { gray } from "../utils/colors";

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
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <Text style={{fontSize: 20}}>Enter the name of a new flash card deck:</Text>
        <TextInput
          value={title}
          onChangeText={text => this.handleChange(text)}
          placeholder={"Deck Name"}
          autoFocus={true}
          maxLength={30}
          style={styles.input}
        />
        <Button
          title={"Submit"}
          onPress={this.handleSubmit}
          disabled={!title}
        />
      </KeyboardAvoidingView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    margin: 20
  },
  input: {
    height: 40,
    width: 200,
    borderColor: gray,
    borderWidth: 1,
    margin: 20,
    padding: 10
  }

});

export default AddDeck;
