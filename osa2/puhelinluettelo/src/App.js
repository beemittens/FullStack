import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Numbers from './components/Numbers'
import AddPerson from './components/AddPerson'
import Filter from './components/Filter'

const hook = (setPersonData) => {
  axios
    .get('http://localhost:3001/persons')
    .then(response => {
      setPersonData(response.data)
    })
}

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
    setFilter(event.target.value)
  }

  const handleAddPerson = (event) => {
    event.preventDefault()
    const names = persons.map(p => p.name)

    if(names.indexOf(newName) >= 0)
    {
      alert(`${newName} is already added to phonebook`)
      return
    }

    const newValue = { 
      id: persons.length + 1, 
      name: newName, 
      number: newNumber }
    setPersons(persons.concat(newValue))
    setNewName('')
    setNewNumber('')
  }

  useEffect(() => {hook(setPersons)}, [])

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filter={filter} onFilterChanged={handleFilterChange}/>
      <h2>add a new</h2>
      <AddPerson addPerson={handleAddPerson} 
        newName={newName} onChangeName={handleNameChange}
        newNumber={newNumber} onChangeNumber={handleNumberChange} />
      <h3>Numbers</h3>
      <Numbers filter={filter} persons={persons}/>
    </div>
  )

}

export default App