import React, { useState } from 'react'
import Numbers from './components/Numbers'
import AddPerson from './components/AddPerson'
import Filter from './components/Filter'

const App = () => {
  const [persons, setPersons] = useState([
    { id: 1, name: 'Arto Hellas', number: '040-123456' },
    { id: 2, name: 'Ada Lovelace', number: '39-44-5323523' },
    { id: 3, name: 'Dan Abramov', number: '12-43-234345' },
    { id: 4, name: 'Mary Poppendieck', number: '39-23-6423122' }
  ]) 
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

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filter={filter} onFilterChanged={handleFilterChange}/>
      <h2>add a new</h2>
      <AddPerson addPerson={handleAddPerson} newName={newName} onChangeName={handleNameChange}
        newNumber={newNumber} onChangeNumber={handleNumberChange} />
      <h3>Numbers</h3>
      <Numbers filter={filter} persons={persons}/>
    </div>
  )

}

export default App