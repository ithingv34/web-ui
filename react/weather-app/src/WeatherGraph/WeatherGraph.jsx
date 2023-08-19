import React, { useContext } from 'react'
import { WeatherContext } from '../WeatherProvider/WeatherProvider'
// import { Line, LabelList, LineChart, XAxis } from 'recharts';
import { WiStrongWind } from 'react-icons/wi';
import CurrentWeatherIcon from './../CurrentWeatherIcon/CurrentWeatherIcon';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const toCelsius = (fahrenheit) => {
    return ((fahrenheit - 32) * 5) / 9;
  };

const formatDate = (timestamp) => {
    const date = new Date(timestamp * 1000);
    const formattedDate = date.toLocaleDateString('en-US', { year: 'numeric', month: '2-digit', day: '2-digit' });
    const formattedTime = date.toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
    return [formattedDate, formattedTime];
};

const data = [
    { dt: 1685901600, temp: 291.47, weather: "Clouds" },
    { dt: 1685912400, temp: 291.28, weather: "Clouds" },
    { dt: 1685923200, temp: 295.38, weather: "Clouds" },
    { dt: 1685934000, temp: 298.32, weather: "Clouds" },
];


const transformedData = data.map(item => ({
    dt: formatDate(item.dt),
    temp: toCelsius(item.temp),
    weather: item.weather
  }));


function LineGraph({num}){

    console.log(transformedData)

    return (
        <LineChart 
            width={960}
            height={300}
            data={transformedData}
            margin={{
                top:30,
                right:30,
                left:30,
                bottom:10
            }}
        >
          {/* <CartesianGrid stroke="#ccc" /> */}
          <XAxis dataKey="dt" tick={{ fontSize: 10 }} />
          <YAxis dataKey="temp" label={{ value: '기온 (°C)', angle: -90, position: 'insideLeft' }} />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="temp" stroke="#8884d8" />
        </LineChart>
      );
}

function WeatherGraph() {

  return (
    <LineGraph/>
    )
}

export default WeatherGraph