import { createReducer } from "@reduxjs/toolkit";
import { setDecks, addDeck, addCard, deleteDeck } from "../actions";

const decks = createReducer({}, {
  [setDecks]: (state, action) => action.payload,
  [addDeck]: (state, action) => {
    const { key } = action.payload;
    state[key] = {title: key, questions: []}
  },
  [addCard]: (state, action) => {
    console.log("Reducer addCard action: ", action);
    const { deck, card } = action.payload;
    state[deck.title].questions.push(card)
  },
  [deleteDeck]: (state, action) => {
    const { deck } = action.payload;
    delete state[deck.title]
  }
});

export default decks;
