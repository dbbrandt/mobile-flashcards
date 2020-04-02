import {StyleSheet} from "react-native";
import {blue, crimson, gray, white} from "../utils/colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  input: {
    height: 40,
    width: 300,
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
  },
  deleteButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: 150
  },
  deleteButton: {
    marginTop: 10,
    fontSize: 10,
    width: 70,
    height: 35,
    padding: 5,
    color: white,
    backgroundColor: gray
  }
});

export default styles;

