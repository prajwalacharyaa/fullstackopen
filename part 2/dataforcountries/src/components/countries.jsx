

const Countries = ({ countries, clength, showButtonClick, weather }) => {
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

                    <Weather countries={countries} weather={weather} />

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

const Weather = ({ countries, weather }) => {
    const weatherCondition = weather.weather[0];
    const iconCode = weatherCondition.icon;
    const iconUrl = `https://openweathermap.org/img/wn/${iconCode}.png`;
    console.log(iconCode)

    return (
        <div>
            <h2>Weather in {countries.name.common}</h2>
            <p>temperature {weather.main.temp} F</p>
            <img src={iconUrl}></img>
            <p>wind {weather.wind.speed}</p>
        </div>

    )
}


export default Countries