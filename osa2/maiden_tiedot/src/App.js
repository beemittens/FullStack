import React, { useState, useEffect } from 'react'
import Countries from './components/Countries.js'
import Filter from './components/Filter.js'
import Weather from './components/Weather.js'
import countryService from './components/CountryService.js'
import weatherService from './components/WeatherService.js'

const App = () => {
    const [countries, setCountries] = useState([])
    const [filter, setFilter] = useState('')
    const [weather, setWeather] = useState(null)
  
    const handleFilterChange = (event) => {
      setFilter(event.target.value)
      console.log(event.target.value)
    }

    useEffect(() => {
        countryService.getAll()
        .then(countries => {
            setCountries(countries)
        })
    }, [])

    const coutriesToShow = filter === ''
      ? countries
      : countries.filter(c => c.name.toLowerCase().includes(filter.toLowerCase()))

      if(coutriesToShow.length === 1 && weather === null) {
        weatherService.getCurrent(coutriesToShow[0].capital)
          .then(weather => {
            setWeather(weather)
          })
      } 

    return (
      <div>
        <Filter filter={filter} onFilterChanged={handleFilterChange}/>
        <Countries countries={coutriesToShow} showDetails={setFilter} />
        <Weather weather={weather} />
      </div>
    )
  
  }
  
  export default App