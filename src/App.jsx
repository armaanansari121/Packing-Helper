import React, { useState } from 'react'
import Form from "./components/Form"
import Logo from "./components/Logo"
import PackingList from "./components/PackingList"
import Stats from "./components/Stats"

function App() {
  const [items, setItems] = useState([]);

  function handleNewItem(item) {
    setItems((items) => [...items, item]);
  }

  function handleDeleteItem(id) {
    setItems((items) => items.filter(item => item.id !== id));
  }

  function handleToggleItem(id) {
    setItems((items) => items.map((item) => item.id === id ? { ...item, packed: !item.packed } : item))
  }

  function handleClearList() {
    const confirmed = window.confirm('Ar you sure you want to delete all items?')

    if (confirmed) setItems([]);
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItem={handleNewItem} />
      <PackingList items={items} onDeleteItem={handleDeleteItem} onToggleItem={handleToggleItem} onClearList={handleClearList} />
      <Stats items={items} />
    </div>
  )
}

export default App
