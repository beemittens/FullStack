import React from 'react'

const PersonLine = ({person, removePerson}) => {
    return(
      <div>
        {person.name} {person.number} 
        <button type="button" onClick={() => removePerson(person.id)}>
          delete</button>
      </div>
    )
  }

const Numbers = ({filter, persons, removePerson}) => {

    const personsToShow = filter === ''
    ? persons
    : persons.filter(person => person.name.toLowerCase().includes(filter.toLowerCase())  )

    return (
    <div>
        {personsToShow.map(person => 
        <PersonLine key={person.id} person={person} removePerson={removePerson} />
        )}
    </div>
    )
}

export default Numbers