import React from "react";

export default function WeatherTemperature(props) {
  if (props.unit === "celsius") {
    return <div className="col-4 align-self-center">{props.temp}</div>;
  } else {
    return (
      <div className="col-4 align-self-center">
        {Math.round(props.temp * 1.8 + 32)}
      </div>
    );
  }
}
