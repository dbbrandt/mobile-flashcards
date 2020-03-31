import { getDefaultMiddleware } from "@reduxjs/toolkit";
import logger from "./logger";
import decks from "../reducers";

const middleware = [...getDefaultMiddleware(), logger];

export default middleware;
