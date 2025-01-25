import React  from 'react';
import { MdDelete } from "react-icons/md";
import './Content.css';
import './Header.css';

function Content({items,stateChange,deleteitem}){
   
    return(
        <div className='content'>
            {(items.length)?(
            <ul >
                {items.map(item=>(
                <li className='item'  key={item.id}>
                    <div className='inputs'>
                    <input type='checkbox' checked={item.checked} onChange={()=>stateChange(item.id)}></input>
                    <p  style={(item.checked)?{textDecoration : "line-through"}:null}onDoubleClick={()=>stateChange(item.id)}>{item.item}</p>
                    </div> 
                    <MdDelete role='button' tabIndex="0" onClick={()=>deleteitem(item.id)} />

                </li>
                ))}
            </ul>):(<p>Your List is Empty</p>)}
        </div>
    );


}
export default  Content;