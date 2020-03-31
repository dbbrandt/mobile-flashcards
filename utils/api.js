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

export function getDecks () {
  return AsyncStorage.getItem(CARD_STORAGE_KEY)
    .then((results) => JSON.parse(results))
}

export function setDecks(decks = defaultDecks) {
  return AsyncStorage.mergeItem(
    CARD_STORAGE_KEY,
    JSON.stringify(defaultDecks)
  );
}

export function addDeck({ key }) {
  return AsyncStorage.mergeItem(
    CARD_STORAGE_KEY,
    JSON.stringify({
      [key]: { title: key, questions: [] }
    })
  );
}

export function deleteDeck(key) {
  return AsyncStorage.getItem(CARD_STORAGE_KEY).then(results => {
    const data = JSON.parse(results);
    data[key] = undefined;
    delete data[key];
    AsyncStorage.setItem(CARD_STORAGE_KEY, JSON.stringify(data));
  });
}

export function addCard(key, card) {
  return AsyncStorage.getItem(CARD_STORAGE_KEY).then(results => {
    const data = JSON.parse(results);
    if (data[key]) data[key]["questions"].push(card);
    AsyncStorage.setItem(CARD_STORAGE_KEY, JSON.stringify(data));
  });
}


