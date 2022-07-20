import React from 'react';
import ItemDetailContainer from '../containers/ItemDetailContainer';
import ItemCount from './ItemCount';

const Item = (props) => {
    const onAdd = (qty) => {
      alert(`Agregaste ${qty} del producto "${props.item.name}" al carrito`);
    }

  return (
    <div className="card border rounded">
        <img className="card-img-top" src={props.item.image[0]} alt={props.item.name} />
        <div className="card-body">
            <h3 className="card-title">{props.item.name}</h3>
            <p className="card-text d-flex justify-content-between">
                <span>Stock: {props.item.stock}</span>
                <span>${props.item.cost}</span>
            </p>
        </div>
        <div className="card-footer p-3">
            <ItemCount
                initial={1}
                stock={props.item.stock}
                onAddCallback={onAdd}
            />
        </div>
    </div>
  )
}

export default Item;