import React from 'react'

function Filter({filter, handleFilterChange}) {
  return (
    <div className='mb-4'>
        <label htmlFor="filter">Filter:</label>
      <select className='border-2 rounded-lg p-2 m-2' id="filter" value={filter} onChange={handleFilterChange}>
        <option value="All Tasks">All Tasks</option>
        <option value="Completed Tasks">Completed Tasks</option>
        <option value="Pending Tasks">Pending Tasks</option>
      </select>
    </div>
  )
}

export default Filter