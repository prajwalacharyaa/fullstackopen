import { useEffect, useState } from "react";
import WeatherService from '../services/weatherapi'


const Countries = ({ countries, clength, showButtonClick }) => {
    //  console.log(clength)
    const imgUrl = countries.flags.png

    return (
        <div>
            {clength == 1 ? (
                <div style={{ display: "flex", flexDirection: "column", }}>
                    <h2 > {countries.name.common} </h2>
                    <div>
                        capital {countries.capital}
                    </div>
                    <span>
                        <p style={{ margin: '0px' }}>area {countries.area}</p>
                    </span>

                    <Languages countries={countries} />
                    <span>
                        <img src={imgUrl} />
                    </span>

                    <Weather countries={countries} />

                </div>
            ) : (
                <div>
                    {countries.name.common}
                    <button onClick={() => showButtonClick(countries.name.common)}>
                        show
                    </button>
                </div>
            )
            }


        </div>
    )
}

const Languages = ({ countries }) => {
    //  console.log('countries', countries.languages)
    let langarray = Object.keys(countries.languages).map(key => countries.languages[key]);

    return (
        <div>
            <h2>Languages</h2>
            {langarray.map(languages => <li key={languages}>{languages}</li>)}
        </div>
    )

}

const Weather = (country) => {
    const [weather, setWeather] = useState()

    useEffect(() => {
        WeatherService.getAll(country.countries.name.common).then((res) => {
            setWeather(res.data)
        })
    }, [country])


    const iconUrl = `https://openweathermap.org/img/wn/${weather?.weather[0].icon}.png`;

    return (
        <div>
            <h2>Weather in {country.countries.name.common}</h2>
            <p>temperature {weather?.main.temp} F</p>
            <img src={iconUrl}></img>
            <p>wind {weather?.wind.speed}</p>
        </div>

    )
}


export default Countries