import React from 'react'
import Item from './Item';

const ItemList = ({ list }) => {
  return (
    <div className='card-group mb-4 px-1 row row-cols-2 row-cols-md-3 row-cols-lg-4'>
    {/* hago un map del arreglo pasado por props list dondo guardo lo q levante del json */}
        {list.map((item, index) => {
        return (
            <div className="col p-2 m-0" key={index}>
                <Item
                    item={item}
                />
            </div>
        );
        })}
    </div>  )
}
// {/* por c/ objeto literal item del arreglo se crea un compomnente Item y se le pasa por props el objeto entero  */}

export default ItemList