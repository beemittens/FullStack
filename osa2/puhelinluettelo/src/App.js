import React, { useState, useEffect } from 'react'
import './index.css'
import Numbers from './components/Numbers'
import AddPerson from './components/AddPerson'
import Filter from './components/Filter'
import Notification from './components/Notification'
import ErrorNotification from './components/ErrorNotification'
import personService from './components/PersonService'


const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')
  const [message, setMessage] = useState(null)
  const [errorMessage, setErrorMessage] = useState(null)

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
    setFilter(event.target.value)
  }

  const handleRemovePerson = (id) => {

    const name = persons.filter(person => person.id === id).map(person => person.name)
    if(!window.confirm(`Delete ${name}?`)) { 
      return
    }

    personService.remove(id)
      .then(() => {
        setPersons(persons.filter(person => person.id !== id))
        setMessage(`Deleted ${name}`)
      })
      .catch(error => {
        setErrorMessage(`Information of ${name} was already removed from server`)
        setPersons(persons.filter(person => person.id !== id))
      })
  }

  const handleAddPerson = (event) => {
    event.preventDefault()
    const names = persons.map(p => p.name)
    const foundIdx = names.indexOf(newName)

    const newPerson = { 
      name: newName, 
      number: newNumber 
    }

    if(foundIdx < 0)
    {
      personService.create(newPerson)
        .then(returnedPerson => {
          setPersons(persons.concat(returnedPerson))
          setNewName('')
          setNewNumber('')
          setMessage(`Added ${returnedPerson.name}`)
        })
        .catch(error => {
          console.log(error.response.data.error)
          setErrorMessage(error.response.data.error)
        })

    } else if(window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`))
    {
      const id = persons[foundIdx].id
      personService.update(id, newPerson)
        .then(returnedPerson => {
          setPersons(persons.map(person => person.id !== id ? person : returnedPerson))
          setMessage(`Updated ${returnedPerson.name}`)
        })
        .catch(error => {
          console.log(error)
          setErrorMessage(`Information of ${newName} was already removed from server`)
          setPersons(persons.filter(person => person.id !== id))
        })
    }
  }

  const getHook = (setPersonData) => {
    personService.getAll()
      .then(persons => {
        setPersonData(persons)
      })
  }

  useEffect(() => {getHook(setPersons)}, [])

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={message} setMessage={setMessage} />
      <ErrorNotification message={errorMessage} setMessage={setErrorMessage} />
      <Filter filter={filter} onFilterChanged={handleFilterChange}/>
      <h2>add a new</h2>
      <AddPerson addPerson={handleAddPerson} 
        newName={newName} onChangeName={handleNameChange}
        newNumber={newNumber} onChangeNumber={handleNumberChange} />
      <h3>Numbers</h3>
      <Numbers filter={filter} persons={persons} removePerson={handleRemovePerson}/>
    </div>
  )

}

export default App