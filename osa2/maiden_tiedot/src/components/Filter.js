import React from 'react'

const Filter = ({filter, onFilterChanged}) => {
  
    return (
      <div>
          find countries: 
          <input 
            value={filter} 
            onChange={onFilterChanged}
          />
        </div>
    )
  }

  
export default Filter