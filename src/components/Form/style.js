import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
  formContext: {
    width: "100%",
    height: "100%",
    justifyContent: "space-around",
    backgroundColor: "#ffffff",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30
  },
  form: {
    width: "100%",
    height: "auto",
    marginTop: 30,
    padding: 10
  },
  formLabel: {
    color: "#000000",
    fontSize: 18,
    paddingLeft: 20
  },
  formInput: {
    width: "90%",
    borderRadius: 50,
    backgroundColor: "#f6f6f6",
    height: 40,
    margin: 10,
    paddingLeft: 10
  },
  textButton: {
    fontSize: 20,
    color: "#ffffff",
  },
  button: {
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    width: "90%",
    backgroundColor: "#5E6EC4",
    paddingTop: 14,
    paddingBottom: 14,
    marginLeft: 12,
    margin: 30
  },
  errorMessage: {
    fontSize: 12,
    color: "red",
    fontWeight: "bold",
    paddingLeft: 20,
    padding: 10
  },
  resultImc: {
    width: "100%",
    height: "50%",
  },
  imcList: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
  itemImc: {
    color: "#5E6EC4",
    fontWeight: "bold",
    height: 50,
    width: "100%",
  },
  resultImcText: {
    fontWeight: "normal",
    color: "#000000"
  }
})