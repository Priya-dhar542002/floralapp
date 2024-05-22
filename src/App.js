import {useState} from 'react'
import './App.css';
import Header from './Header'
import Content from './Content'
import Footer from './Footer'
import AddItem from './AddItem'
import Search from './Search'

function App() {
  const [Item,setItem]=useState(JSON.parse(localStorage.getItem("tosavefloral"))  
  );
  const AddNewItem=(item)=>
    {
      const id=Item.length?Item[Item.length-1].id+1:1;
      const newItem={id,checked:false,item};
      const ListItem=[...Item,newItem];
      setItem(ListItem);
      localStorage.setItem("tosavefloral",JSON.stringify(ListItem));
    }
  const[newItem,setNewItem]=useState('');
  const handlesubmit=(e)=>
    {
      e.preventDefault();
      if(!newItem)  return;
      AddNewItem(newItem)
      setNewItem('')
      console.log("submitted")
    }
   
const handleChange=(id)=>
    {
       const listItem=Item.map((item)=>
    (item.id===id?{...item,checked:!item.checked}:item))
       setItem(listItem);
       localStorage.setItem("tosavefloral",JSON.stringify(listItem));
    }
    const handleclick = (id) => {
      const remItem = Item.map(item =>
        item.id === id ? null : item//null means it makes the element with id as null
      ).filter(Boolean);//filter boolean returns the remaining array which is not null
      setItem(remItem);
      localStorage.setItem("tosavefloral",JSON.stringify(remItem));
    };
   const [search,setSearch]=useState('');
  //  const handlesearch=(search)=>
  //   {
  //     Item.filter(item=>(item.item.toLowerCase()).includes(search.toString().toLowerCase()))
  //   }
  return(
    <div className='App'>
     <Header title=" Welcome to my website Flora.com...."/>
     <AddItem
     newItem={newItem}
     setNewItem={setNewItem}
     handlesubmit={handlesubmit}
     />
    <Search
     search={search}
     setSearch={setSearch}
    //  handlesearch={handlesearch}
    />
     <Content
       Item={Item.filter(item=>((item.item).toLowerCase()).includes(search.toLowerCase()))}
       handleChange={handleChange}
       handleclick={handleclick}
     />
     <Footer
      length={Item.length}
     />
   
    </div>
  );
}

export default App;
