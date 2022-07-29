import React from 'react';
import ItemDetailContainer from '../containers/ItemDetailContainer';

const Item = (props) => {

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
          <ItemDetailContainer productId={props.item.id}/>
        </div>
    </div>
  )
}

export default Item;