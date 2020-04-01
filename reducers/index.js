import { combineReducers } from "redux";
import decks from "./decks";
import quiz from "./quiz";

const reducer =  combineReducers({
  decks,
  quiz
});

export default reducer
