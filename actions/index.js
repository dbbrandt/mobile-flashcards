import { createAction } from "@reduxjs/toolkit";

export const setDecks = createAction("SET_DESK");
export const addDeck = createAction("ADD_DECK");
export const deleteDeck = createAction("DELETE_DECK");
export const addCard = createAction("ADD_CARD");
