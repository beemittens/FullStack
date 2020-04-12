import React, { useState, useEffect } from 'react'
import Countries from './components/Countries.js'
import Filter from './components/Filter.js'
import countryService from './components/CountryService.js'

const App = () => {
    const [countries, setCountries] = useState([])
    const [filter, setFilter] = useState('')
  
    const handleFilterChange = (event) => {
      setFilter(event.target.value)
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

    return (
      <div>
        <Filter filter={filter} onFilterChanged={handleFilterChange}/>
        <Countries countries={coutriesToShow} showDetails={setFilter} />
      </div>
    )
  
  }
  
  export default App