import { useState, useEffect } from 'react'
import Persons from './components/Persons'
import PersonForm from './components/PersonForm'
import Filter from './components/Filter'
import personsService from './services/persons'
import Notification from './components/Notification'
import './index.css'


const App = () => {
  //\->added person phonebook datas
  const [persons, setPersons] = useState([])

  //Temporary Input Value Handel
  const [newPerson, setNewPerson] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')
  const [topMessage, settopMessage] = useState('Hello!!! You can View or Add Phone Numbers below')


  useEffect(() => {
    personsService
      .getAll()
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
    const formattedDateTime = (new Date()).toISOString().slice(0, 19).replace(/-/g, '');
    //console.log(`Formatted Date and Time: ${formattedDateTime}`);
    const personObject = {
      name: newPerson,
      number: newNumber,
      id: `${newPerson}${formattedDateTime}`
    }
    //To check whether the name input already exists 
    const personNameObject = persons.find((person) =>
      person.name.toLowerCase() === personObject.name.toLowerCase())

    if (personNameObject && personNameObject.name === personObject.name) {

      const confirmation = window.confirm(`${personObject.name} is already added to the phonebook, replace the old with the new one?`)
      if (confirmation == true) {
        const id = personNameObject.id
        //  console.log(id)
        deleteNumber(id)
        personsService
          .create(personObject)
          .then(response => {
            setPersons(persons.concat(response.data))
            setNewNumber(personObject.number)
            setNewPerson('')
            setNewNumber('')

          })
      }


    } else {
      personsService
        .create(personObject)
        .then(response => {
          setPersons(persons.concat(response.data))
          setNewNumber(personObject.number)
          setNewPerson('')
          setNewNumber('')

        })
      settopMessage(`Added ${personObject.name}`)
    }

  }

  const personsafterfilter = filter === ''
    ? persons
    : persons.filter(person => person.name.includes(filter))


  const deleteNumber = (id, name) => {
    personsService
      .deletenum(id)
      .then(() => {
        setPersons(persons.filter((person) => person.id !== id));
        setNewPerson('');

      })
      .catch((error) => {
        settopMessage(`Information of ${name} has already been removed from server. `

        )
        setTimeout(() => {
          settopMessage(null)
        }, 5000)
        console.error('Error deleting number:', error);
      });

  }

  const numberDeleteButton = (id, name) => {
    if (window.confirm(`Do You really want to delete ${name} Phone Number?`)) {
      deleteNumber(id, name)
      settopMessage(`Deleted ${name}`)
    }



  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={topMessage} />
      <Filter filter={filter} filterChange={filterChange} />

      <h2>Add a new</h2>
      <PersonForm nameInputChange={nameInputChange} numberInputChange={numberInputChange} newNumber={newNumber}
        newPerson={newPerson} buttonAddClick={buttonAddClick} />

      <h2>Numbers</h2>
      {personsafterfilter.map((person) => (
        <Persons key={person.id} persons={person} buttonClick={() => numberDeleteButton(person.id, person.name)} />
      ))}
    </div>
  )

}

export default App