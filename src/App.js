import Header from './Header';
import './App.css';
import Footer from './Footer';
import Content from './Content';
import {useState} from 'react';
import AddItem from './AddItem';
import SearchItem from './SearchItem';


function App() {
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
      const[newItem,setNewItem]=useState('');
      const handleSubmit=(e)=>{
       e.preventDefault();
        if(!newItem) return;
        console.log(newItem)
        setNewItem("");
        addItem(newItem);

      }
      const addItem=(item)=>{
        const id=Date.now();
        const addNewItem={id,checked:false,item};
        const listItems=[...items,addNewItem];
        setItems(listItems)
      localStorage.setItem("todolist",JSON.stringify(listItems))
         
      }
      const[search,setSearch]=useState('');

    const stateChange=(id)=>{
      const listItem=items.map((item)=>id===item.id ?{...item,checked:!item.checked}:item)
      setItems(listItem);
      localStorage.setItem("todolist",JSON.stringify(listItem))
    }
   const deleteitem=(id)=>{
      const deleteItem=items.filter((item)=> id!==item.id)
      setItems(deleteItem) 
      localStorage.setItem("todolist",JSON.stringify(deleteItem))
   }
  
  return (
    <div className="App">
      <Header />
      <Content 
      items={items.filter(item=>((item.item).toLowerCase()).includes(search.toLowerCase()))}
      stateChange={stateChange}
      deleteitem={deleteitem}
      />
      <AddItem 
      newItem={newItem}
      setNewItem={setNewItem}
      handleSubmit=
      {(e)=>handleSubmit(e)}
      />
      <SearchItem 
      search={search}
      setSearch={setSearch}
      />
     <Footer length={items.length}/>
      
    </div>
  );
}

export default App;
