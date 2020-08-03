import React from "react";

export default function FormattedDate(props) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let months = [
    "Jan",
    "Feb",
    "March",
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
  let year = props.date.getFullYear();
  let month = months[props.date.getMonth()];
  let day = days[props.date.getDay()];

  let actualDay = props.date.getDate();

  return (
    <div>
      {day}, {actualDay} {month} {year}
    </div>
  );
}
