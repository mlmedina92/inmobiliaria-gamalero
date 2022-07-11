import { ItemListContainerData } from '../data/ItemListContainerData';
import Item from '../components/Item';

// defino un componente y en home lo llamo y le paso valor por props
const ItemListContainer = (props) => {
    return(
        <>
            <h2>{props.greeting}</h2>
            <span>los datos se van a traer de : {props.data}</span>
            <ul>
            {/* hago un map del arreglo de ItemListContainerData */}
                {ItemListContainerData.map((item, index) => {
                return (
                    <li key={index}>
                        {/* por c/ objeto literal item del arreglo se crea un compomnente Item y se le pasa por props el objeto entero  */}
                        <Item
                            item={item}
                        />
                    </li>
                );
                })}
            </ul>
        </>
    );
}

export default ItemListContainer;
