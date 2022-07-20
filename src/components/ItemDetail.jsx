import React from 'react';

const ItemDetail = ({detail}) => {
  return (
    <div className="card border rounded">
      <div className="row g-0">
        <div className='col-md-4'>
          <img className="card-img-top" src={detail.image[0]} alt={detail.name} />
        </div>
        <div className='col-md-8'>
          <div className="card-body">
            <h4>{detail.brand.name}</h4>
            <h3 className="card-title">{detail.name}</h3>
            <p className='card-text'>{detail.description}</p>
            <p className="card-text d-flex justify-content-between">
              <span>Stock: {detail.stock}</span>
              <span>${detail.cost}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ItemDetail