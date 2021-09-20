import React from "react";
import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1.5,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 15,
  },
  heading: {
    fontSize: 45,
    color: "white",
    fontWeight: "100",
  },
  subheading: {
    fontSize: 25,
    color: "#eee",
    fontWeight: "300",
  },
  rightAlign: {
    textAlign: "right",
    marginTop: 20,
  },
  timezone: {
    fontSize: 20,
    color: "white",
  },
  latlong: {
    fontSize: 16,
    color: "white",
    fontWeight: "700",
  },
  weatherItemContainer: {
    backgroundColor: "#18181b99",
    borderRadius: 10,
    padding: 10,
    marginTop: 10,
  },
  weatherItem: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  weatherItemTitle: {
    color: "#eee",
    fontSize: 14,
    fontWeight: "100",
  },
  image: {
    width: 100,
    height: 100,
  },
  futureForecastItemContainer: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#00000033",
    borderRadius: 10,
    borderColor: "#eee",
    borderWidth: 1,
    padding: 20,
    marginLeft: 10,
  },
  day: {
    fontSize: 20,
    color: "white",
    backgroundColor: "#3c3c44",
    padding: 10,
    textAlign: "center",
    borderRadius: 50,
    fontWeight: "200",
    marginBottom: 15,
  },
  temp: {
    fontSize: 14,
    color: "white",
    fontWeight: "100",
    textAlign: "center",
  },
  scrollView: {
    flex: 0.4,
    backgroundColor: "#18181bcc",
    padding: 30,
  },
  image2: {
    width: 150,
    height: 150,
  },
  currentTempContainer: {
    flexDirection: "row",
    backgroundColor: "#00000033",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    borderColor: "#eee",
    borderWidth: 1,
    padding: 15,
  },

  temp2: {
    fontSize: 16,
    color: "white",
    fontWeight: "100",
    textAlign: "center",
  },
  otherContainer: {
    paddingRight: 40,
  },
});

