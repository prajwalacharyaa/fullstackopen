import React, { useEffect, useState } from "react";
import Countries from './components/countries'
import countriesService from './services/countries'
import Filter from './components/countriesFilter'


const App = () => {
  const [countries, setCountries] = useState([]);
  const [filter, setFilter] = useState('')
  const [countriesafterFilter, setCountriesAfterFilter] = useState([])

  const filterChange = (event) => {
    setFilter(event.target.value)
  }


  // const countriesafterFilter = filter === ''
  //   ? countries
  //   : countries.filter(countries => countries.name.common.toLowerCase(includes(filter.toLowerCase()))

  // console.log(filter)
  const showButtonClick = (name) => {
    const selectedCountry = countries.filter(country => country.name.common.toLowerCase() === name.toLowerCase())
    //  console.log(selectedCountry)
    setCountriesAfterFilter(selectedCountry)
  }

  useEffect(() => {
    countriesService
      .getAll()
      .then(response => {
        setCountries(response.data)
      })
  }, [])

  useEffect(() => {
    if (countries) {
      //  console.log('filter', filter)
      //  console.log(countries)
      if (filter == '') {
        setCountriesAfterFilter(countries)
      } else {
        const filteredCountries = countries.filter(country => country.name.common.toLowerCase().includes(filter.toLowerCase()))
        setCountriesAfterFilter(filteredCountries)
      }
    }
  }, [filter, countries])

  return (
    <div>
      <Filter filter={filter} filterChange={filterChange} />
      {
        countriesafterFilter.length < 10 || countriesafterFilter.length == 250 ? (
          countriesafterFilter.map(country => (
            <Countries
              key={country.cca2} countries={country}
              clength={countriesafterFilter.length}
              showButtonClick={showButtonClick}
            />
          ))
        ) : (
          <p>Too many matches, specify another filter</p>
        )
      }

    </div>
  )
}

export default App