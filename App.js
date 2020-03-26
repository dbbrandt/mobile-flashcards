import React, { Component } from "react";
import { Text, View, StyleSheet, StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Constants from "expo-constants";
import { blue, white } from "./utils/colors";
import { NavBar } from "./components/NavBar";
import { createStackNavigator } from "@react-navigation/stack";
import DeckDetail from "./components/DeckDetail";

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

const DeckDetailOptions = {
  headerTintColor: white,
  headerStyle: {
    backgroundColor: blue
  }
};

export default class App extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <CustomStatusBar backgroundColor={blue} barStyle="light-content" />
        <NavigationContainer>
          <DeckStack.Navigator>
            <DeckStack.Screen name="Home" component={NavBar} />
            <DeckStack.Screen
              name="Deck Detail"
              component={DeckDetail}
              options={DeckDetailOptions}
            />
          </DeckStack.Navigator>
        </NavigationContainer>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
