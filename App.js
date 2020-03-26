import React, { Component } from "react";
import { Text, View, StyleSheet, StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Constants from "expo-constants";
import { blue } from "./utils/colors";
import {NavBar} from "./components/NavBar";

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

export default class App extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <CustomStatusBar backgroundColor={blue}  barStyle="light-content" />
        <NavigationContainer>
          <NavBar/>
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
