import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import moment from "moment-timezone";
import { globalStyles } from "../assets/styles/global";

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const WeatherItem = ({ title, value, unit }) => {
  return (
    <View style={globalStyles.weatherItem}>
      <Text style={globalStyles.weatherItemTitle}>{title}</Text>
      <Text style={globalStyles.weatherItemTitle}>
        {value}
        {unit}
      </Text>
    </View>
  );
};

const DateTime = ({ current, lat, lon, timezone }) => {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  useEffect(() => {
    setInterval(() => {
      const time = new Date();
      const month = time.getMonth();
      const date = time.getDate();
      const day = time.getDay();
      const hour = time.getHours();
      const hoursIn12HrFormat = hour >= 13 ? hour % 12 : hour;
      const minutes = time.getMinutes();
      const ampm = hour >= 12 ? "pm" : "am";

      setTime(
        (hoursIn12HrFormat < 10 ? "0" + hoursIn12HrFormat : hoursIn12HrFormat) +
          ":" +
          (minutes < 10 ? "0" + minutes : minutes) +
          ampm
      );

      setDate(days[day] + ", " + date + " " + months[month]);
    }, 1000);
  }, []);
  return (
    <View style={globalStyles.container}>
      <View>
        <View>
          <Text style={globalStyles.heading}>{time}</Text>
        </View>
        <View>
          <Text style={globalStyles.subheading}>{date}</Text>
        </View>
        <View style={globalStyles.weatherItemContainer}>
          <WeatherItem
            title="Humidity"
            value={current ? current.humidity : ""}
            unit="%"
          />
          <WeatherItem
            title="Pressure"
            value={current ? current.pressure : ""}
            unit="hPA"
          />
          <WeatherItem
            title="Sunrise"
            value={
              current
                ? moment.tz(current.sunrise * 1000, timezone).format("HH:mm")
                : ""
            }
            unit="am"
          />
          <WeatherItem
            title="Sunset"
            value={
              current
                ? moment.tz(current.sunset * 1000, timezone).format("HH:mm")
                : ""
            }
            unit="pm"
          />
        </View>
      </View>
      <View style={globalStyles.rightAlign}>
        <Text style={globalStyles.timezone}>{timezone}</Text>
        <Text style={globalStyles.latlong}>
          {lat}N {lon}E
        </Text>
      </View>
    </View>
  );
};

export default DateTime;
