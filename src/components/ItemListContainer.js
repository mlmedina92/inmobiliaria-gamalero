import { ItemListContainerData } from './ItemListContainerData';

// defino un componente y en home lo llamo y le paso valor por props
const ItemListContainer = (props) => {
    return(
        <>
            <h2>{props.title}</h2>
            <span>los datos se van a traer de : {props.data}</span>
            <ul>
            {/* hago un map del arreglo de ItemListContainerData */}
                {ItemListContainerData.map((item, index) => {
                return (
                    <li key={index}>
                        <img src={item.src} alt={item.title}/>
                        <h3>{item.title}</h3>
                        <span>{item.precio}</span>
                    </li>
                );
                })}
            </ul>
        </>
    );
}

export default ItemListContainer;
