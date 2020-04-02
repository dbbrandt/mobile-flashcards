# Mobile Flashcards

This ReactNative/Redux app is a flash card mobile app that allows the users to creat and study decks of flashcards. 
This app uses local storage on the device to store decks. The goal of the application is for you user to add new 
decks and new cards and then take a quiz on the their flash cards. At the end of the quiz, their results 
for the quiz are displayed. Their cummulative resutls are also displayed on the deck details page.

# Instruction for Device Installation

The application is built using Expo and can be accessed by downloading Expo onto your mobile device and going the the
following link: https://expo.io/@dbbrandt/mobile-flashcards
For Android users, use the "Scan QR Code" feature in the expo Projects tab to download and launch the application.
For iOS users, open the camera and place the QR code in the frame. Click the notificaiton that appears to download and 
launch the app.    

## Features
* Add decks which can hold an unlimited number of cards.
    * Option to load some test data (overwrites current data)
    * Option to clear all data including all decks and results metrics.
* View the deck showing the users aggregate usage and quiz results. 
    * Add a card to a specific deck.
    * Start a quiz session.
    * Reset the aggregate quiz metrics
* View flash cards
    * Flip flash card by clicking in the text areas of the card.
    * Indicate correct or incorrect by clicking the appropriate button.
    * The next card will show automatically after selecting correct or incorrect.
    * The results will show after the final card is submitted.
* Quiz Results
    * Shows the Score and number of cards viewed and number correct.
    * Button to restart the quiz. Clicking back will also restart.
    * Button to return to the deck details which shows the aggregate results for that deck.
* Reminder Notification
    * Notification when not in the application to study sent daily
    * Studying any quiz will clear today notification
    * Note: Scheduling in this way is currently depricated and may snow a warning on iOS.

## Testing Performed

The app was tested on emulators and physical devices.
OS: iOS 13.4, Andriod 10.

Emulators: 
* iPhone 8
* iPhone 11 pro Max
* Android  Nexus 5s
* Andriod Pixel 2

Devices:
* iPhone Xs Max
* Samsung Galaxy S7 Edge
* Samsung Glalzxy S8+


## Local Installation and Testing Setup

To install and run the app:
* Install expo and the emulators you want to use for iOS and Android.
* Clone the repo: https://github.com/dbbrandt/mobile-flashcards.git
* Change directory to mobile-flashcards
* install all project dependencies with `yarn install`  or `npm install`
* start the development server with `yarn start` or `npm start`
* In the browser Metro Builder, select Run on Android or Run on iOS. To run on a physical device you can 
scan the bar code on the Metro Builder page as described in Device Installation above.

## Architectural Notes
* This project uses ReactNative 36.x and React Navigation 5.x. 
* This project uses @reduxjs/toolkit for simplifying actions and reducers, particulary to make the reducers 
more intuitive supporting direct state mutation. 
* A custom logging middleware provided in class is used.
* StyleSheets used are a mix of a global object (./components/styles.js) and StyleSheets local to components
or in-line. 

## Files in this project
```bash
├── README.md - This file.
├── app.json - Expo app settings
├── App.js - Main application. Sets up the redux store and the Navigation stack screens (routes).
├── package.json # npm package manager file.
├── yarn.lock # package manager file.
├── assets
│   ├── icon.png # Expo app icon
│   └── splash.png # Span image
└── actions  # reduxjs/toolkit actions using createAction
│   ├── decks.js # Deck storage and updates
│   └── quiz.js  # Quiz metrics storage and updates
├── components
│    ├── AddCard.js 
│    ├── AddDeck.js 
│    ├── CardDetail.js # Display a card and supporting card flip. Subcomponent of Quiz.js
│    ├── DeckDetail.js # Display Quiz results for the deck, add card and start quiz.
│    ├── DeckList.js # Main screen 
│    ├── NavBar.js # Setup of the main page Tab Navigation (DeckList and AddDeck) 
│    ├── Quiz.js # Handle quiz card submission, loop through cards and navigate to QuizResults.
│    ├── QuizResults.js
│    ├── sytles.js # Some styles shared across pages. Some styles remain in components and could be refactored here.
│    └── TextButton.js # a customizable text button which handles disabling
├── middleware # Redux middleware
│   ├── index.js 
│   └── logger.js  # Custon Redux logging 
├── reducers # reduxjs/toolkit reducers using createReducer
│   ├── index.js 
│   ├── decks.js 
│   └── quiz.js  
├── utils 
│   ├── api.js # AsyncStorage functions for deck persistence 
│   ├── colors.js # shared color definitions 
│   └── helpers.js # Expo notification helper functions  

```


