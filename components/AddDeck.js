import React, { Component } from "react";
import { connect } from "react-redux";
import {
  View,
  Text,
  KeyboardAvoidingView,
  TextInput,
  Keyboard
} from "react-native";
import styles from "./styles";
import TextButton from "./TextButton";
import { createDeck, initDecks } from "../utils/api";
import { addDeck, setDecks } from "../actions/decks";
import { crimson } from "../utils/colors";

class AddDeck extends Component {
  state = {
    title: ""
  };

  handleSubmit = () => {
    const { navigate } = this.props.navigation;
    const { title } = this.state;
    this.setState({ title: "" });
    // Needed for Android when navigating back to main tab.
    Keyboard.dismiss();
    createDeck(title).then(() => this.props.dispatch(addDeck({ title })));
    navigate("Flash Cards");
  };

  handleInitDecks = data => {
    const { dispatch } = this.props;
    initDecks(data).then(decks => dispatch(setDecks(decks)));
    this.props.navigation.navigate('Flash Cards');
  };

  handleChange = text => {
    this.setState({ title: text });
  };

  render() {
    const { title } = this.state;
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <Text style={{ fontSize: 20, paddingTop: 20}}>
          Enter new deck name:
        </Text>
        <TextInput
          value={title}
          onChangeText={text => this.handleChange(text)}
          placeholder={"Deck Name"}
          maxLength={30}
          style={styles.input}
        />
        <TextButton
          style={styles.button}
          onPress={this.handleSubmit}
          disabled={!title}
        >
          Add New Deck
        </TextButton>
        <View style={styles.deleteButtons}>
          <TextButton
            style={styles.deleteButton}
            onPress={() => this.handleInitDecks({})}
          >
            Delete All Decks
          </TextButton>
          <TextButton
            style={styles.deleteButton}
            onPress={() => this.handleInitDecks()}
          >
            Set Test Decks
          </TextButton>
        </View>
      </KeyboardAvoidingView>
    );
  }
}
export default connect()(AddDeck);
