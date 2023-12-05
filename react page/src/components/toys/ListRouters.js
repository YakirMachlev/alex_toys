import React from 'react'
import ItemLink from './ItemLink'

const ListRouters = ({ change }) => {

  return (
    <div className='row'>
      {
        change.map(p => (<ItemLink
          url={p.link}
          type={p.type}
        />))
      }
    </div>
  )
}

export default ListRouters