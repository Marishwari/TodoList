import React  from 'react';
import {useState} from 'react';
import { MdDelete } from "react-icons/md";
import './Content.css';
import './Header.css';

function Content(){
    const [items,setItems]=useState(
        [
            {
                id:1,
                checked:false,
                item:"coding practice"
            },
            {
                id:2,
                checked:false,
                item:"Playing cricket"
            },
            {
                id:3,
                checked:false,
                item:"watching movie"
            },{
                id:4,
                checked:false,
                item:"reading books"
            },
            {
                id:5,
                checked:true,
                item:"sleeping 8 Hours"

            }
        ]
    )
  const stateChange=(id)=>{
    const listItem=items.map((item)=>id===item.id ?{...item,checked:!item.checked}:item)
    setItems(listItem);
  }
 const deleteitem=(id)=>{
    const deleteItem=items.filter((item)=> id!==item.id)
    setItems(deleteItem) 

 }
    return(
        <div className='content'>
            {(items.length)?(
            <ul>
                {items.map(item=>(
                <li className='item'  key={item.id}>
                    <input type='checkbox' checked={item.checked} onChange={()=>stateChange(item.id)}></input>
                    <p  style={(item.checked)?{textDecoration : "line-through"}:null}onDoubleClick={()=>stateChange(item.id)}>{item.item}</p> 
                    <MdDelete role='button' tabIndex="0" onClick={()=>deleteitem(item.id)} />

                </li>
                ))}
            </ul>):(<p>Your List is Empty</p>)}
        </div>
    );


}
export default  Content;