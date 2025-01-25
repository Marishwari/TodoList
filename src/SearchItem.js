import React from "react";
import './SearchItem.css';
const SearchItem =({search,setSearch})=>{
    return(
    <form className='searchBar' onSubmit={(e)=>e.preventDefault()} >
       <input
       type="text"
       placeholder="Search Item ..."
       value={search}
       onChange={(e)=>setSearch(e.target.value)}
       />

    </form>
    );

}
export default SearchItem;