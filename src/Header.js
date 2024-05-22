import React from 'react'

const Header = ({title="Floral.com"}) => {  //using props take the info as object
  return (
    <header>
         <p>{title}</p>
    </header>
  )
}
// Header.defaultProps={
//   title:"Floral.com"
// }
export default Header