import { createReducer } from "@reduxjs/toolkit";
import { attemptQuiz, completeQuiz, viewCard } from "../actions/quiz";

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
        state[title] = {
          cards: 0,
          correct: 0,
          attempts: 1,
          completions: 0
        };
      }
    },
    [completeQuiz]: (state, action) => {
      const { title } = action.payload.deck;
      state[title]["completions"] += 1;
    }
  }
);

export default quiz;
