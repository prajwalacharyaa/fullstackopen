import { useState, useEffect } from 'react'
import axios from 'axios'
import Persons from './components/Persons'
import PersonForm from './components/PersonForm'
import Filter from './components/Filter'


const App = () => {
  //\->added person phonebook datas
  const [persons, setPersons] = useState([])

  //Temporary Input Value Handel
  const [newPerson, setNewPerson] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')


  useEffect(() => {
    axios.get('http://localhost:3001/persons')
      .then(response => {
        setPersons(response.data)
      })
  }, [])

  const nameInputChange = (event) => {
    setNewPerson(event.target.value)
  }
  const numberInputChange = (event) => {
    setNewNumber(event.target.value)
  }

  const filterChange = (event) => {
    setFilter(event.target.value)
  }

  //Add Button Action
  const buttonAddClick = (btn) => {
    btn.preventDefault()
    const personObject = {
      name: newPerson,
      number: newNumber,
      id: persons.length + 1
    }
    //To check whether the name input already exists 
    const personNameObject = persons.find((person) =>
      person.name.toLowerCase() === personObject.name.toLowerCase())

    if (personNameObject && personNameObject.name === personObject.name) {
      alert(`${personObject.name} is already added to the phonebook`);
    } else {
      console.log(personObject);
      setPersons(persons.concat(personObject));
      setNewNumber(personObject.number)
      setNewPerson('')
      setNewNumber('')
    }

  }

  const personsafterfilter = filter === ''
    ? persons
    : persons.filter(person => person.name.includes(filter))

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filter={filter} filterChange={filterChange} />

      <h2>Add a new</h2>
      <PersonForm nameInputChange={nameInputChange} numberInputChange={numberInputChange} newNumber={newNumber}
        newPerson={newPerson} buttonAddClick={buttonAddClick} />

      <h2>Numbers</h2>
      {personsafterfilter.map((person) => (
        <Persons key={person.id} persons={person} />
      ))}
    </div>
  )

}

export default App