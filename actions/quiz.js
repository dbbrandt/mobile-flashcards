import { createAction } from "@reduxjs/toolkit";

export const viewCard = createAction("VIEW_CARD");
export const attemptQuiz = createAction("ATTEMPT_QUIZ");
export const completeQuiz = createAction("COMPLETE_QUIZ");
