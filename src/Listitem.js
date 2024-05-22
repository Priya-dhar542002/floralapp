import React from 'react'
import { FaTrashAlt } from "react-icons/fa"
const Listitem = ({item,handleChange,handleclick}) => {
  return (
    <div>
    <li className='item' > 
    <input type="checkbox" checked={item.checked} onChange={()=>handleChange(item.id)}/>
    <label style={item.checked?{textDecoration: 'underline',color:"red"}:null} onDoubleClick={()=>handleChange(item.id)}>{item.item}</label>
    <FaTrashAlt  onClick={()=>handleclick(item.id)} type="button" tabIndex="0" aria-label={`Delete ${item.item}`}/>
    {/* <button>delete</button>//instead we can use icon */}
</li>
</div>
  )
}

export default Listitem