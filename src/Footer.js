import React from 'react'

const Footer = ({length}) => {
    const year=new Date();
    const handledouble=()=>
    {
        console.log("Copyright reserved");
    }
  return (
  
   <footer onDoubleClick={handledouble}>
    Copyright &copy;{year.getFullYear()}
    <p>List item length:{length}</p>
   </footer>
  )
}

export default Footer