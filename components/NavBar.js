import React from "react";
import { Platform } from "react-native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import AddDeck from "./AddDeck";
import DeckList from "./DeckList";
import {blue, white, gray, lightBlue} from "../utils/colors";

// Options passed into Tab.Screen
const DecksTabIcon = {
  tabBarIcon: () => <Ionicons name="ios-albums" size={30} color={blue} />
};

const AddDeckIcon = {
  tabBarIcon: () => <FontAwesome name="plus-square" size={30} color={blue} />
};

// Options passed into Tabs.Navigator
const tabBarOptions = {
  activeTintColor: Platform.OS === "ios" ? blue : white,
  style: {
    backgroundColor: Platform.OS === "ios" ? white : blue,
    shadowColor: "rgba(0, 0, 0, 0.24)",
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowRadius: 6,
    shadowOpacity: 1
  }
};

// Select the tab bar component based on the platform
export const Tabs =
  Platform.OS === "ios"
    ? createBottomTabNavigator()
    : createMaterialTopTabNavigator();

// Setup the TabBar layout
export const NavBar = () => {
  return (
    <Tabs.Navigator
      initialRouteName="Home"
      tabBarOptions={tabBarOptions}
      navigationOptions={{headerShown: false}}
    >
      <Tabs.Screen
        name="Home"
        component={DeckList}
        options={DecksTabIcon}
      />
      <Tabs.Screen
        name="Add Deck"
        component={AddDeck}
        options={AddDeckIcon}
      />
    </Tabs.Navigator>
  );
};
