import React from "react";
import { View, ScrollView, Image, Text, StyleSheet } from "react-native";
import moment from "moment-timezone";
import FutureForecast from "./FutureForecast";
import { globalStyles } from "../assets/styles/global";

const WeatherScroll = ({ weatherData }) => {
  return (
    <ScrollView horizontal={true} style={styles.scrollView}>
      <CurrentTempEl
        data={weatherData && weatherData.length > 0 ? weatherData[0] : {}}
      />
      <FutureForecast data={weatherData} />
    </ScrollView>
  );
};

const CurrentTempEl = ({ data }) => {
  if (data && data.weather) {
    const img = {
      uri:
        "http://openweathermap.org/img/wn/" + data.weather[0].icon + "@4x.png",
    };
    return (
      <View style={globalStyles.currentTempContainer}>
        <Image source={img} style={globalStyles.image2} />
        <View style={globalStyles.otherContainer}>
          <Text style={globalStyles.day}>
            {moment(data.dt * 1000).format("dddd")}
          </Text>
          <Text style={globalStyles.temp2}>Night - {data.temp.night}&#176;C</Text>
          <Text style={globalStyles.temp2}>Day - {data.temp.day}&#176;C</Text>
        </View>
      </View>
    );
  } else {
    return <View></View>;
  }
};

const styles = StyleSheet.create({

});

export default WeatherScroll;
