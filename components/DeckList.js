import React, { Component } from "react";
import { connect } from "react-redux";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { blue, white } from "../utils/colors";
import { initDecks, retrieveDecks } from "../utils/api";
import { setDecks } from "../actions/decks";
import { setLocalNotification } from "../utils/helpers";
import {initQuiz} from "../actions/quiz";

const ItemDetail = ({ deck }) => {
  const { title, questions } = deck;
  return (
    <View style={styles.details}>
      <Text style={{ fontSize: 30 }}>{title}</Text>
      <Text style={{ fontSize: 20, padding: 5 }}>
        ({questions.length} {questions.length !== 1 ? "cards" : "card"})
      </Text>
    </View>
  );
};

const NoDecks = () => {
  return (
    <View style={styles.item}>
      <Text style={{ fontSize: 20, color: blue }}>
        Add some decks to begin studying.
      </Text>
    </View>
  );
};

class DeckList extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    retrieveDecks().then(decks => dispatch(setDecks(decks)));
    setLocalNotification();
  }

  handleClick = (deck) => {
    const { dispatch, quiz } = this.props;
    const { navigate } = this.props.navigation;
    const { title } = deck;
    if (!quiz[title]) dispatch(initQuiz({ deck }));
    navigate("Deck Detail", { title });

  };

  render() {
    const { decks } = this.props;
    if (!Object.keys(decks).length) return <NoDecks />;
    return (
      <View style={styles.container}>
        {Object.values(decks).map(deck => (
          <TouchableOpacity
            key={deck.title}
            style={styles.item}
            onPress={() => this.handleClick(deck)}
          >
            <ItemDetail deck={deck} />
          </TouchableOpacity>
        ))}
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "stretch"
  },
  item: {
    backgroundColor: white,
    borderRadius: Platform.OS === "ios" ? 8 : 2,
    padding: 20,
    marginTop: 2,
    justifyContent: "space-around",
    alignItems: "flex-start",
    shadowRadius: 3,
    shadowOpacity: 0.8,
    shadowColor: "rgba(0, 0, 0, 0.24)",
    shadowOffset: {
      width: 0,
      height: 3
    }
  },
  details: {
    flexDirection: "row",
    alignItems: "flex-end"
  }
});

const mapStateToProps = ({ decks, quiz })  => {
  return {
    decks,
    quiz
  };
};

export default connect(mapStateToProps)(DeckList);
