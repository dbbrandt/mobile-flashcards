import { createReducer } from "@reduxjs/toolkit";
import {completeQuiz, startQuiz} from "../actions/quiz";

const quiz = createReducer({completed: false}, {
  [completeQuiz]: (state, action) => {
    state["completed"] = true
  },
  [startQuiz]: (state, action) => {
    state["completed"] = false
  }
});

export default quiz;
