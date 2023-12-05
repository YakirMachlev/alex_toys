import React from 'react'
import ListRouters from './ListRouters'
const info = [
  {
    link: "./toy",
    type: "put",
  }

]
const Toys = () => {
  return (
    <div>
      <h1>documantation</h1>
      <ListRouters change={info} />
    </div>
  )
}

export default Toys