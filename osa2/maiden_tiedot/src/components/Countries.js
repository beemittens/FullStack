import React from 'react';

const CountryLine = ({country, showDetails}) => {
  return(
    <div>
      {country.name}
      <button type="button" onClick={() => showDetails(country.name)}>
          show</button>
    </div>
  )
}

const Languages = ({languages}) => {
  return (
    <div>
        <ul>
        {languages.map((language, i) => 
          <li key={i}>
            {language.name}
          </li> 
        )}
        </ul>
    </div>
  )
}

const Flag = ({flagAddress}) => {
  return (
    <div>
      <img src={flagAddress} width="200" alt="Flag"/>
    </div>
  )
}

const CountryDetails = ({country}) => {
    return (
      <div>
        <h2>{country.name}</h2>
        <div>capital {country.capital}</div>
        <div>population {country.population}</div>
        <h3>languages</h3>
        <Languages languages={country.languages} />
        <Flag flagAddress={country.flag} />
      </div>
    )
  }

const Countries = ({countries, showDetails, setCapital}) => {
  if(countries.length === 1) {
    const country = countries[0];

    return (
      <CountryDetails country={country} />
    )
  }

  if(countries.length > 10) {
    return (
      <div>
        Too many matches, specify another filter
      </div>
      )
  }

  return (
  <div>
    {countries.map((country, i) => 
    <CountryLine key={i} country={country} showDetails={showDetails} />
    )}
  </div>
  )
}

export default Countries