import { StyleSheet } from "react-native";

const style = StyleSheet.create({
  formContent: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: 12,
    alignItems: "center",
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    paddingTop: 14,
  },
  form: {
    width: "100%",
    height: "auto",
    padding: 10,
  },
  formLabel: {
    color: "#000",
    fontSize: 18,
    paddingLeft: 20,
  },
  input: {
    width: "90%",
    borderRadius: 50,
    backgroundColor: "#f6f6f6",
    height: 40,
    margin: 12,
    paddingLeft: 10,
  },
  textButtomCalculator: {
    fontSize: 20,
    color: "#fff",
  },
  buttomCalculator: {
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    width: "90%",
    backgroundColor: "#ff0043",
    paddingTop: 14,
    paddingBottom: 14,
    marginLeft: 12,
    marginTop: 30,
  },
  errorMessage: {
    fontSize: 12,
    color: "red",
    fontWeight: "bold",
    paddingLeft: 20,
  },
  exhibitionResultBmi: {
    width: "100%",
    height: "25%",
  },
  listBmi: {
    marginTop: 20,
  },
  resultBmiItem: {
    fontSize: 22,
    color: "red",
    height: "50",
    width: "100%",
    paddingRight: 20,
  },
  textResultItemList: {
    fontSize: 40,
  },
});

export default style;
