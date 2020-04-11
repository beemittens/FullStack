import React from 'react'

const PersonLine = ({person}) => {
    return(
      <div>
        {person.name} {person.number}
      </div>
    )
  }

const Numbers = ({filter, persons}) => {

    const personsToShow = filter === ''
    ? persons
    : persons.filter(person => person.name.toLowerCase().includes(filter.toLowerCase())  )

    return (
    <div>
        {personsToShow.map(person => 
        <PersonLine key={person.id} person={person} />
        )}
    </div>
    )
}

export default Numbers