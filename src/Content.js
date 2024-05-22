import React,{useState} from 'react'
import Itemlist from './Itemlist';
const Content = ({Item,handleChange,handleclick}) => {
    const[Flower,setFlower]=useState("lily");//here we are setting flower lily as default state
    function namechange()
  {
    const name=["lavendar","lily","mariegold","lotus"];
    const opt=Math.floor(Math.random()*name.length);
    console.log(opt)
    setFlower(name[opt]);
  }
 
  // const handleclick=(id)=>
  //   {
  //      const remItem=Item.filter((item)=>item.id!==id);
  //      setItem(remItem);  
  //   }

  return (
    <div className="div">
      {Item.length?(
        <Itemlist
        Item={Item}
       handleChange={handleChange}
       handleclick={handleclick}
       />
      ):(<p>Your list is empty</p>)}
            
         <a href="https://www.1800flowers.com/" target="_blank" rel="noopener noreferrer">{Flower}</a><br />
         <button className="button" onClick={namechange}>Flowers</button>
    </div>
  )
}

export default Content