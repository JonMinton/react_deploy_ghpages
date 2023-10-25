import { useState } from 'react';
import ItemList from './ItemList';

const Content = ({ items,  handleChecked, handleDelete }) => {

  return (
    <main>
      {items.length ? (
        <ItemList
          items={items}
          handleChecked={handleChecked}
          handleDelete={handleDelete}
        />
        
      ) : (
        <p className="empty">No items in your list</p>
      )}
    </main>
  )
}

export default Content