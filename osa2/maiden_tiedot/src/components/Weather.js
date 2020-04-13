import React from 'react'

const Weather = ({weather}) => {

  if(weather === null || weather.success === false) {
    return null
  }
  
  console.log(weather)

  return(
    <div>
      <h2>Weather in {weather.location.name}</h2>
      <div>
        <b>temperature: </b> {weather.current.temperature} Celcius
      </div>
      <img src={weather.current.weather_icons[0]} alt="Weather"/>
      <div>
        <b>wind: </b> 
        {weather.current.wind_speed} mph direction {weather.current.wind_dir} 
      </div>
    </div>
  )
}

export default Weather