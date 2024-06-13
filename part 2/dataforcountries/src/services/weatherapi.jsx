import axios from "axios";

const APIkey = '4b6bb136d0180a25ebe6e97fe6b0fda0'
// const baseUrl = `https://api.openweathermap.org/data/3.0/onecall?lat=${latitude}&lon=${longtitude}&exclude=hourly,daily&appid=${APIkey}`
const baseUrl = "https://api.openweathermap.org/data/2.5/weather?q=Nepal&appid=4b6bb136d0180a25ebe6e97fe6b0fda0"

const getAll = () => {
    return axios.get(baseUrl)
}

// const update = ()=>{
//     return axios.put(`${baseUrl}/${id}`, countriesObject)
// }

export default { getAll }