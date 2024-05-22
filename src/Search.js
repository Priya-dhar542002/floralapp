import React from 'react'

const Search = ({search,setSearch}) => {
  return (
    <form className='searchform' onSubmit={(e)=>e.preventDefault()}>
        <input 
        type="text"
        // role="search item"//to give user the role of this
        placeholder='search'
        value={search}
        onChange={(e)=>setSearch(e.target.value)}
        />
        {/* <button id="search" onClick={(search)=>handlesearch(search)}>search</button> */}
       
    </form>
  )
}

export default Search