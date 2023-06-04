import React from 'react'
import './style.css'
import CurrentWeather from './CurrentWeather/CurrentWeather'
import TempInfo from './TempInfo/TempInfo'

function WeatherApp() {
  return (
    <>
    <div className='container'>
        <CurrentWeather/>
        <TempInfo/>
    </div>
    </>
  )
}

export default WeatherApp