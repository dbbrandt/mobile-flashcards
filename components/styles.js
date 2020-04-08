import { StyleSheet, Platform } from "react-native";
import { blue, gray, white } from "../utils/colors";

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
    margin: 10,
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
  addButton: {
    width: 150,
    height: 40,
    padding: 10,
    margin: 5,
    color: white,
    backgroundColor: blue
  },
  deleteButtons: {
    opacity: .2,
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 40
  },
  deleteButton: {
    margin: 10,
    fontSize: 15,
    width: 70,
    height: 20,
    color: "#000",
  }
});

export default styles;
