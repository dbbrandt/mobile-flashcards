import { createReducer } from "@reduxjs/toolkit";
import { setDecks, addDeck, addCard, deleteDeck } from "../actions";

const decks = createReducer({}, {
  [setDecks]: (state, action) => action.payload,
  [addDeck]: (state, action) => {
    const { title } = action.payload;
    state[title] = {title: title, questions: []}
  },
  [addCard]: (state, action) => {
    const { deck, card } = action.payload;
    state[deck.title].questions.push(card)
  },
  [deleteDeck]: (state, action) => {
    const { deck } = action.payload;
    delete state[deck.title]
  }
});

export default decks;
