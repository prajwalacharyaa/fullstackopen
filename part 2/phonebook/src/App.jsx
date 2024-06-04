import { useState } from 'react'
import Phonedetail from './components/Phonedetail'


const App = () => {
  //\->added person phonebook datas
  const [persons, setPersons] = useState([{ name: 'Arto Hellas' }])
  //Temporary Input Value Handel
  const [newPerson, setNewPerson] = useState({
    name: 'Name Here',
    number: 'Number Here'
  })

  const nameInputChange = (event) => {
    setNewPerson(event.target.value)
  }

  const buttonAddClick = (btn) => {
    btn.preventDefault()
    const personObject = {
      name: newPerson
    }
    //To check whether the name input already exists 
    const personNameObject = persons.find((person) =>
      person.name.toLowerCase() === personObject.name.toLowerCase())

    if (personNameObject && personNameObject.name === personObject.name) {
      alert(`${personObject.name} is already added to the phonebook`);
    } else {
      //console.log(personNameObject);
      setPersons(persons.concat(personObject));
      setNewPerson('');
    }

  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div> Name: <input onChange={nameInputChange} value={newPerson.name} /></div>
        <div>Number: <input value={newPerson.number} /></div>
        <br></br>
        <div>
          <button type="submit" onClick={buttonAddClick}>
            Add
          </button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map(person => <Phonedetail key={person.name}
        persons={person}
      />
      )}
    </div>
  )

}

export default App