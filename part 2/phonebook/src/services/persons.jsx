import axios from 'axios'
const baseUrl = 'http://localhost:3001/persons'

const getAll = () => {
    return axios.get(baseUrl)
}

const deletenum = (id, personObject) => {
    return axios.delete(`${baseUrl}/${id}`, personObject);
}


const create = personObject => {
    return axios.post(baseUrl, personObject)
}

const update = () => {
    return axios.put(`${baseUrl}/${id}`, personObject)

}

export default { getAll, deletenum, create, update }