import { React, createContext, useEffect, useState } from 'react'

export const WeatherContext = createContext();

function WeatherProvider({children}) {
    const [weatherInfo, setWeatherInfo] = useState({});
    const weatherApiKey = process.env.REACT_APP_WEATHER_API_KEY;
    const getWeatherInfo = async () => {
        try {
            const currentWeatherInfoAPI = 
                `http://api.openweathermap.org/data/2.5/weather?q=seoul&appid=${weatherApiKey}&units=metric`;
            const currentWeatherInfo = await fetch(currentWeatherInfoAPI);
            const { 
                name,
                coord: {lat, lon},
                main: {temp, humidity,  feels_like, temp_min, temp_max},
                sys: {sunset, sunrise},
                weather: [{main: weatherState}],
                wind: {speed, deg}
            } = await currentWeatherInfo.json()

            const threeHourlyInfoAPI = `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${weatherApiKey}`
            const threeHourlyInfo = await fetch(threeHourlyInfoAPI);
            const {list} = await threeHourlyInfo.json();
            setWeatherInfo({
                name, temp, humidity,  weatherState, feels_like, speed, deg, list, sunset, sunrise, temp_max, temp_min
            })
        } catch (error){
            console.error(error)
        }
    }

    useEffect(()=>{
        getWeatherInfo();
    }, [])

    return (
    <WeatherContext.Provider value={{...weatherInfo}}>
        {children}
    </WeatherContext.Provider>
    )
}

export default WeatherProvider