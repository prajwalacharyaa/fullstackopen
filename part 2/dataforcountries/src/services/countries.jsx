import axios from 'axios'
const baseUrl = 'https://studies.cs.helsinki.fi/restcountries/api/all'

const getAll = () =>{
    return axios.get(baseUrl)
}

// const update = ()=>{
//     return axios.put(`${baseUrl}/${id}`, countriesObject)
// }

export default {getAll}