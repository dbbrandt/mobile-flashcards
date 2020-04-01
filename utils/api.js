import { AsyncStorage } from "react-native";

const CARD_STORAGE_KEY = 'FlashCards:decks';

export const defaultDecks = {
  React: {
    title: 'React',
    questions: [
      {
        question: 'What is React?',
        answer: 'A library for managing user interfaces'
      },
      {
        question: 'Where do you make Ajax requests in React?',
        answer: 'The componentDidMount lifecycle event'
      }
    ]
  },
  JavaScript: {
    title: 'JavaScript',
    questions: [
      {
        question: 'What is a closure?',
        answer: 'The combination of a function and the lexical environment within which that function was declared.'
      }
    ]
  },
  Ruby: {
    title: 'Ruby',
    questions: []
  }
};

export function retrieveDecks () {
  return AsyncStorage.getItem(CARD_STORAGE_KEY)
    .then((results) => JSON.parse(results))
}

export function initDecks(decks = defaultDecks) {
  return AsyncStorage.setItem(
    CARD_STORAGE_KEY,
    JSON.stringify(decks)
  ).then(() => decks);
}


export function createDeck(title) {
  return AsyncStorage.mergeItem(
    CARD_STORAGE_KEY,
    JSON.stringify({
      [title]: { title: title, questions: [] }
    })
  );
}

export function saveCard(deck, card) {
  const { title } = deck;
  return AsyncStorage.getItem(CARD_STORAGE_KEY).then(results => {
    const data = JSON.parse(results);
    data[title]["questions"].push(card);
    AsyncStorage.setItem(CARD_STORAGE_KEY, JSON.stringify(data));
  });
}


