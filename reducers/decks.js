import { createReducer } from "@reduxjs/toolkit";
import { setDecks, addDeck, addCard } from "../actions/decks";

const decks = createReducer({}, {
  [setDecks]: (state, action) => action.payload,
  [addDeck]: (state, action) => {
    const { title } = action.payload;
    state[title] = {title: title, questions: []}
  },
  [addCard]: (state, action) => {
    const { deck, card } = action.payload;
    state[deck.title].questions.push(card)
  }
});

export default decks;
