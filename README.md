# Mobile Flashcards

This ReactNative/Redux app is a flash card mobile app that allows the users to creat and study decks of cards. 
This app uses local storage on the device to store decks with data stored in memory representing the valid users and preloaded questions.
The goal of the application is for you user to add new question and answer existing questions to accumulate points.
A point is awared for every question added and every question answered.

To use the app, login by selecting on of three predefined users and clicking login. On the home page you can view 
all the questions devided into two categories, those answered and those not answered by your user.
Answer questions by clicking the un-answered category and then the answer button on the question you want to answer.
You can view the results of all users answers to questions once you answer a question by clicking on the view button
in a quesiton on the home page. Add questions and review the leader board.  


## TL;DR

To install and run the app:
* Clone the repo
* Change directory to reactnd-project-would-you-rather
* install all project dependencies with `npm install` 
* start the development server with `npm start`

## Architectural Notes
* This project uses @reduxjs/toolkit for simplifying actions and reducers, particulary to make the reducers 
more intuitive supporting direct state mutation. 
* This uses the react-redux-loading-bar rather then the custom one provided in class to eliminate deprication warnings.
* A custom logging middleware provided in class is used.
* Specific CSS files, while still global, are placed in their responstive component directories for easier maintenance. 

## Files in this project
```bash
├── CONTRIBUTING.md
├── README.md - This file.
├── SEARCH_TERMS.md # The whitelisted short collection of available search terms for you to use with the Udacity api.
├── package.json # npm package manager file.
├── package-lock.json # npm package manager file.
├── public
│   ├── favicon.ico # React Icon
│   ├── manifest.json
│   ├── robots.txt
│   └── index.html 
└── src
    ├── decks.js # Main javascript file to render the React app and setup the Redux store
    ├── index.css # Styles for the app. Sets up the responsive grid layout of the app layout sections.
    │             # Sections are Header, Navigation, Main and Footer. The routes are rendered in the main section.
    ├── actions  
    ├── assets # various images include some addtional avatars that can be copied to pubic to vary the three users.
    ├── components
    │    ├── App.js # Container component for the routes and basic security
    │    ├── App.css 
    │    ├── dashboard # components and styles for homepage
    │    ├── footer  # component and style for simple static footer
    │    ├── heading # component and style for dynamic header with user info
    │    ├── leader-board # components and style for leader board 
    │    ├── login # Login, Logout and NotFound components
    │    ├── nav # Responsive navigation bar with links to routes and dynamicly changing login/logout menu link
    │    └── question # The various question forms, QuestionAnswer, QuestionView and QuestionAdd
    ├── middleware 
    ├── reducers
    └── utils # A think API.js file wraps the provided _DATA.js simulated API and helpers.js includes some 
                functions to calculate the leaderboard stats which are also used in the header for the current user.
```


The `_DATA.js` file represents a fake database and methods that let you access the data. The only thing you need to edit in the ` _DATA.js` file is the value of `avatarURL`. Each user should have an avatar, so you’ll need to add the path to each user’s avatar.


## Data

There are two types of objects stored in our database:

* Users
* Questions

### Users

Users include:

| Attribute    | Type             | Description           |
|-----------------|------------------|-------------------         |
| id                 | String           | The user’s unique identifier |
| name          | String           | The user’s first name  and last name     |
| avatarURL  | String           | The path to the image file |
| questions | Array | A list of ids of the polling questions this user created|
| answers      | Object         |  The object's keys are the ids of each question this user answered. The value of each key is the answer the user selected. It can be either `'optionOne'` or `'optionTwo'` since each question has two options.

### Questions

Questions include:

| Attribute | Type | Description |
|-----------------|------------------|-------------------|
| id                  | String | The question’s unique identifier |
| author        | String | The author’s unique identifier |
| timestamp | String | The time when the question was created|
| optionOne | Object | The first voting option|
| optionTwo | Object | The second voting option|

### Voting Options

Voting options are attached to questions. They include:

| Attribute | Type | Description |
|-----------------|------------------|-------------------|
| votes             | Array | A list that contains the id of each user who voted for that option|
| text                | String | The text of the option |

Your code will talk to the database via 4 methods:

* `_getUsers()`
* `_getQuestions()`
* `_saveQuestion(question)`
* `_saveQuestionAnswer(object)`

1) `_getUsers()` Method

*Description*: Get all of the existing users from the database.  
*Return Value*: Object where the key is the user’s id and the value is the user object.

2) `_getQuestions()` Method

*Description*: Get all of the existing questions from the database.  
*Return Value*: Object where the key is the question’s id and the value is the question object.

3) `_saveQuestion(question)` Method

*Description*: Save the polling question in the database.  
*Parameters*:  Object that includes the following properties: `author`, `optionOneText`, and `optionTwoText`. More details about these properties:

| Attribute | Type | Description |
|-----------------|------------------|-------------------|
| author | String | The id of the user who posted the question|
| optionOneText| String | The text of the first option |
| optionTwoText | String | The text of the second option |

*Return Value*:  An object that has the following properties: `id`, `author`, `optionOne`, `optionTwo`, `timestamp`. More details about these properties:

| Attribute | Type | Description |
|-----------------|------------------|-------------------|
| id | String | The id of the question that was posted|
| author | String | The id of the user who posted the question|
| optionOne | Object | The object has a text property and a votes property, which stores an array of the ids of the users who voted for that option|
| optionTwo | Object | The object has a text property and a votes property, which stores an array of the ids of the users who voted for that option|
|timestamp|String | The time when the question was created|

4) `_saveQuestionAnswer(object)` Method

*Description*: Save the answer to a particular polling question in the database.
*Parameters*: Object that contains the following properties: `authedUser`, `qid`, and `answer`. More details about these properties:

| Attribute | Type | Description |
|-----------------|------------------|-------------------|
| authedUser | String | The id of the user who answered the question|
| qid | String | The id of the question that was answered|
| answer | String | The option the user selected. The value should be either `"optionOne"` or `"optionTwo"`|

## Contributing

This repository is the starter code for *all* Udacity students. Therefore, we most likely will not accept pull requests. For details, check out [CONTRIBUTING.md](https://github.com/udacity/reactnd-project-would-you-rather-starter/blob/master/CONTRIBUTING.md).
# reactnd-project-would-you-rather
