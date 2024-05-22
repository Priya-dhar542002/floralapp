import React from 'react'
import { FaPlus } from 'react-icons/fa'

const Additem = ({newItem,setNewItem,handlesubmit}) => {
  // const[isvisible,setIsVisible]=useState(false);
  // const handlebutton=()=>
  //   {
  //     setIsVisible(!isvisible)
  //   }

  return (
    <form className='additem' onSubmit={handlesubmit}>
        <label htmlFor='additem'></label>
        <input
        autoFocus
         type="text"
         id="additem"
         placeholder='additem'
         value={newItem}
         onChange={(e)=>setNewItem(e.target.value)}
         required
         />
         <button id="submit" aria-label="add item">
            <FaPlus/>
         </button>
          </form>
  )
}
//     <>
//     <button id="submit" aria-label="add item" onClick={handlebutton}>
//             <FaPlus/>
//          </button>
//    { isvisible && (
//     <form className='additem' onSubmit={handlesubmit}>
//         <label htmlFor='additem'></label>
//         <input
//         autoFocus
//          type="text"
//          id="additem"
//          placeholder='additem'
//          value={newItem}
//          onChange={(e)=>setNewItem(e.target.value)}
//          required
//          />
//           </form>
//   )
// }
// </> //this is called fragment wrapper while returning multiple elements use this


export default Additem