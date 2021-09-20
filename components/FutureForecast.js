import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import moment from "moment-timezone";
import { globalStyles } from "../assets/styles/global";

const FutureForecast = ({ data }) => {
  return (
    <View style={{ flexDirection: "row" }}>
      {data && data.length > 0 ? (
        data.map(
          (data, idx) =>
            idx !== 0 && <FutureForecastItem key={idx} forecastItem={data} />
        )
      ) : (
        <View />
      )}
    </View>
  );
};

const FutureForecastItem = ({ forecastItem }) => {
  const img = {
    uri:
      "http://openweathermap.org/img/wn/" +
      forecastItem.weather[0].icon +
      "@2x.png",
  };
  return (
    <View style={globalStyles.futureForecastItemContainer}>
      <Text style={globalStyles.day}>
        {moment(forecastItem.dt * 1000).format("ddd")}
      </Text>
      <Image source={img} style={globalStyles.image} />
      <Text style={globalStyles.temp}>Night - {forecastItem.temp.night}&#176;C</Text>
      <Text style={globalStyles.temp}>Day - {forecastItem.temp.day}&#176;C</Text>
    </View>
  );
};

export default FutureForecast;