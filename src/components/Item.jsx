import React from 'react';
import ItemCount from './ItemCount';

const Item = (props) => {
    const onAdd = (qty) => {
      alert(`Agregaste ${qty} del producto "${props.item.title}" al carrito`);
    }

  return (
    <div>
        <img src={props.item.src} alt={props.item.title}/>
        <h3>{props.item.title}</h3>
        <span>${props.item.precio}</span>
        <span>Stock: {props.item.stock}</span>
        <ItemCount
            initial={1}
            stock={props.item.stock}
            onAddCallback={onAdd}
            />
    </div>
  )
}

export default Item;