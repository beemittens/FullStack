import React from 'react'

const AddPerson = ({addPerson, newName, onChangeName, newNumber, onChangeNumber}) => {
 
    return (
      <>
      <form onSubmit={addPerson}>
        <div>
          name: 
          <input 
            value={newName} 
            onChange={onChangeName}
          />
        </div>
        <div>
          number: 
          <input 
            value={newNumber} 
            onChange={onChangeNumber}
          />
        </div>
        <div>
            <button type="submit">add</button>
          </div>
      </form>
      </>
    )
  }
  

export default AddPerson