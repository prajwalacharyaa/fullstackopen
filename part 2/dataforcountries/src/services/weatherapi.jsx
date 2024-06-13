import axios from "axios";

const APIkey = import.meta.env.VITE_WEATHER_KEY
// const countryName = countries[0]?.name?.common

const getAll = (country) => {
    const baseUrl = `https://api.openweathermap.org/data/2.5/weather?q=${country}&appid=${APIkey}`

    return axios.get(baseUrl)
}

export default { getAll }