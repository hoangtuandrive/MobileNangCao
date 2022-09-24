import React from "react";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  page: {
    justifyContent: "space-between",
    marginTop: 40,
    backgroundColor: "grey",
    flex: 1,
  },
  firstContainer: {
    flex: 1,
    backgroundColor: "white",
    maxHeight: 250,
  },
  info: {
    marginLeft: 15,
    flex: 1,
    flexDirection: "row",
    maxHeight: 140,
  },
  image: {
    maxheight: 200,
    maxWidth: 200,
  },
  content: {
    flex: 1,
    flexDirection: "column",
    marginLeft: 30,
    marginRight: 10,
  },
  textInfo: {
    fontWeight: "bold",
    fontSize: 16,
    marginTop: 5,
    color: "black",
  },
  textInfoBlue: {
    fontWeight: "bold",
    fontSize: 14,
    marginTop: 5,
    color: "blue",
  },
  textRow: {
    marginLeft: 15,
    flexDirection: "row",
  },

  price: { fontWeight: "bold", fontSize: 24, color: "red", marginTop: 5 },
  priceDiscount: {
    color: "grey",
    fontSize: 12,
    textDecorationLine: "line-through",
    marginTop: 5,
  },
  amountRow: {
    marginTop: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginRight: 5,
  },
  buttonAmount: {
    backgroundColor: "lightgrey",
    paddingVertical: 2,
    paddingHorizontal: 8,
    marginHorizontal: 10,
  },
  buttonTextAmount: {
    fontSize: 14,
    color: "black",
  },
  amountGroup: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  amountText: {
    alignItems: "center",
    fontSize: 16,
  },
  amountButton: {
    borderWidth: 1,
    color: "black",
    fontSize: 14,
    fontStyle: "bold",
  },
  discountBox: {
    marginTop: 10,
    marginLeft: 10,
    padding: 10,
    paddingRight: 80,
    alignItems: "center",
    flexDirection: "row",
    borderWidth: 1,
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  yellowBox: {
    marginRight: 10,
    borderWidth: 1,
    height: 25,
    width: 50,
    backgroundColor: "yellow",
  },
  buttonApply: {
    marginTop: 10,
    justifyContent: "center",
    backgroundColor: "blue",
    padding: 10,
    paddingHorizontal: 30,
    marginRight: 20,
    maxHeight: 50,
  },
  buttonTextApply: {
    fontSize: 14,
    color: "white",
    fontWeight: "bold",
  },
  secondContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    marginTop: 25,
    backgroundColor: "white",
    height: 50,
  },
  thirdContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    marginTop: 15,
    backgroundColor: "white",
    height: 100,
  },
  fourthContainer: {
    flex: 1,
    flexDirection: "column",
    marginTop: 200,
    backgroundColor: "white",

    maxHeight: 150,
  },
  totalRow: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  buttonOrder: {
    margin: 20,
    flex: 1,
    justifyContent: "center",
    backgroundColor: "blue",
    paddingVertical: 10,

    backgroundColor: "red",
  },
  textButtonOrder: {
    textAlign: "center",
    fontSize: 25,
    fontWeight: "bold",
    color: "white",
  },
});
export default styles;
