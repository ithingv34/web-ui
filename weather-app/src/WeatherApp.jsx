import React from 'react'
import './style.css'
import CurrentWeather from './CurrentWeather/CurrentWeather'

function WeatherApp() {
  return (
    <>
    <div className='container'>
        <CurrentWeather/>
    </div>
    </>
  )
}

export default WeatherApp