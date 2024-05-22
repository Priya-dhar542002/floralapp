import React from 'react'
import Listitem from './Listitem'
const Itemlist = ({Item,handleChange,handleclick}) => {
  return (
    <div>
    <ul>
            {Item.map((Item)=>
            (
                <Listitem
                item={Item}
                handleChange={handleChange}
                handleclick={handleclick}
                key={Item.id}
                />
            ))
        }
        </ul>
        </div>
  )
}

export default Itemlist