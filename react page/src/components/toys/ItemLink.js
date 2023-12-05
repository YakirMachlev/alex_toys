import React from 'react'

const ItemLink = ({ url, type }) => {
  return (
    <div className='col-md-4 p-2' >
      <div className="card shadow p-1">
        <h1>{url}</h1>
        <h5>{type}</h5>
      </div>
    </div>
  )
}

export default ItemLink