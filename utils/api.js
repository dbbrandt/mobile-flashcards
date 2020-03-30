import { AsyncStorage } from "react-native";

const CARD_STORAGE_KEY = 'FlashCards:decks';

export function getDecks () {
  return AsyncStorage.getItem(CARD_STORAGE_KEY)
    .then((results) => JSON.parse(results))
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


