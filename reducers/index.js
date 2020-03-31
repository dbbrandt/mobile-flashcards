import { createReducer } from "@reduxjs/toolkit";
import { setDecks, addDeck, addCard, deleteDeck } from "../actions";

const decks = createReducer({}, {
  [setDecks]: (state, action) => action.payload,
  [addDeck]: (state, action) => {
    const { key } = action.payload;
    state[key] = {title: key, questions: []}
  },
  [addCard]: (state, action) => {
    const { key, card } = action.payload;
    state[key].questions.push(card)
  },
  [deleteDeck]: (state, action) => {
    delete state[action.payload.key]
  }
});

export default decks;
