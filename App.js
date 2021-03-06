import React, { Component } from "react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { View, StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Constants from "expo-constants";
import { NavBar } from "./components/NavBar";
import { createStackNavigator } from "@react-navigation/stack";
import DeckDetail from "./components/DeckDetail";
import AddCard from "./components/AddCard";
import { blue, white } from "./utils/colors";
import CardDetail from "./components/CardDetail";
import Quiz from "./components/Quiz";
import QuizResults from "./components/QuizResults";
import middleware from './middleware';
import reducer from './reducers';

const CustomStatusBar = ({ backgroundColor, ...props }) => {
  return (
    <View
      style={{
        backgroundColor: backgroundColor,
        height: Constants.statusBarHeight
      }}
    >
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  );
};

const DeckStack = createStackNavigator();

const HeaderOptions = {
  headerTintColor: white,
  headerStyle: {
    backgroundColor: blue
  }
};

const store = configureStore({
  reducer,
  middleware
});

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <View style={{ flex: 1 }}>
          <CustomStatusBar backgroundColor={blue} barStyle="light-content" />
          <NavigationContainer>
            <DeckStack.Navigator>
              <DeckStack.Screen
                name="Flash Cards"
                component={NavBar}
                options={HeaderOptions}
              />
              <DeckStack.Screen
                name="Deck Detail"
                component={DeckDetail}
                options={HeaderOptions}
              />
              <DeckStack.Screen
                name="Add Card"
                component={AddCard}
                options={HeaderOptions}
              />
              <DeckStack.Screen
                name="Quiz"
                component={Quiz}
                options={HeaderOptions}
              />
              <DeckStack.Screen
                name="Card Detail"
                component={CardDetail}
                options={HeaderOptions}
              />
              <DeckStack.Screen
                name="Quiz Results"
                component={QuizResults}
                options={HeaderOptions}
              />
            </DeckStack.Navigator>
          </NavigationContainer>
        </View>
      </Provider>
    );
  }
}

