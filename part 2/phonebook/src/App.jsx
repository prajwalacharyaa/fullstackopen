import { useState } from 'react'
import Persons from './components/Persons'
import PersonForm from './components/PersonForm'
import Filter from './components/Filter'


const App = () => {
  //\->added person phonebook datas
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '9876543210', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])

  //Temporary Input Value Handel
  const [newPerson, setNewPerson] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')

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