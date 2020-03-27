import {StyleSheet} from "react-native";
import {blue, gray, white} from "../utils/colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  input: {
    height: 40,
    width: 400,
    borderColor: gray,
    borderWidth: 1,
    margin: 20,
    padding: 10
  },
  button: {
    width: 150,
    height: 40,
    padding: 10,
    margin: 5,
    color: white,
    backgroundColor: blue
  }
});

export default styles;

