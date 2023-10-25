import { useState, useEffect } from 'react';

import Content from './Content';
import Header from './Header';
import SearchItem from './SearchItem';
import Footer from './Footer';
import AddItem from './AddItem';

function App() {
  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem('shoppingList')) || []
  )

  const [newItem, setNewItem] = useState('')
  const [search, setSearch] = useState('')


  useEffect(() => {
    localStorage.setItem('shoppingList', JSON.stringify(items))
  }, [items])


  const addItem = (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1
    const myNewItem = {id, checked: false, item}
    const newItems = [...items, myNewItem]
    setItems(newItems)
  }

  const handleChecked = (id) => {
    const newItems = items.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          checked: !item.checked
        }
      }
      return item
    })
    setItems(newItems)
  }

  const handleDelete = (id) => {
    const newItems = items.filter((item) => item.id !== id)
    setItems(newItems)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!newItem) return;
    addItem(newItem)
    setNewItem('')
  }

  return (
    <div className="App">
      <Header title = "Grocereees"/>
      <AddItem 
        newItem = {newItem}
        setNewItem = {setNewItem}
        handleSubmit = {handleSubmit}
      />
      <SearchItem 
        search={search}
        setSearch={setSearch}
      />

      <Content 
        items = {items.filter(item => (item.item.toLowerCase().includes(search.toLowerCase())))}
        handleChecked = {handleChecked}
        handleDelete = {handleDelete}
      />
      <Footer 
        length = {items.length}
      />
    </div>
  );
}

export default App;
