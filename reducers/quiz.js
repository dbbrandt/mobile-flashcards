import { createReducer } from "@reduxjs/toolkit";
import {attemptQuiz, initQuiz, completeQuiz, viewCard} from "../actions/quiz";

const initialResults = {
  cards: 0,
  correct: 0,
  attempts: 0,
  completions: 0
};

const quiz = createReducer(
  {},
  {
    [viewCard]: (state, action) => {
      const { deck, correct } = action.payload;
      state[deck.title]["cards"] += 1;
      if (correct) state[deck.title]["correct"] += 1;
    },
    [attemptQuiz]: (state, action) => {
      const { title } = action.payload.deck;
      if (state[title]) {
        state[title]["attempts"] += 1;
      } else {
        state[title] = initialResults;
        state[title]["attempts"] = 1;
      }
    },
    [completeQuiz]: (state, action) => {
      const { title } = action.payload.deck;
      state[title]["completions"] += 1;
    },
    [initQuiz]: (state, action) => {
      if (action.payload && action.payload.deck) {
        const { title } = action.payload.deck;
        state[title] = initialResults;
      } else {
        return {}
      }
    }
  }
);

export default quiz;
