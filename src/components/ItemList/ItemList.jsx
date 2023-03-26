import './ ItemList.css';

const ItemList = ({onSelectedItem, children, data}) => {

  return (
    <ul className='item-list list-group'>
      {data.map((item) => {

        const {id} = item;

        const label = children(item);

        return (
          <li
            className='list-group-item'
            key={id}
            onClick={() => onSelectedItem(id)}
          >
            {label}
          </li>
        )
      })}
    </ul>
  );
};

export default ItemList;
