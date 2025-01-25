import './AddItem.css';
import { CiSquarePlus } from "react-icons/ci";
function AddItem({newItem,setNewItem,handleSubmit}){
    return(
        <form className='AddItem' onSubmit={(e)=>handleSubmit(e)}>
            <input 
            type='text'
            placeholder='Add Item'
            required
            value={newItem}
             onChange={(e)=>setNewItem(e.target.value)}/>
            <button type='submit'><CiSquarePlus /></button>

        </form>
    )
}
export default AddItem;