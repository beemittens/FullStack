import React from 'react'

const Filter = ({filter, onFilterChanged}) => {
  
    return (
      <div>
          filter show with: 
          <input 
            value={filter} 
            onChange={onFilterChanged}
          />
        </div>
    )
  }

  
export default Filter