import React, {Children, useEffect, useState} from 'react';
import './ItemDetails.css';
import img404 from './404.avif';

export const Record = ({field, label, item}) => {
  return (
    <li className="list-group-item">
      <span className="term">{label}:</span>
      <span>{item[field] ? item[field] : '-'}</span>
    </li>
  )
}

const ItemDetails = ({itemId, getData, getImageUrl, children}) => {
  const [item, setItem] = useState(null);
  const [image, setImage] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const data = await getData(itemId);
      setItem(data);

      const image = await getImageUrl(itemId);
      setImage(image);
    }

    if (itemId) {
      fetchData();
    }
  }, [itemId, getData, getImageUrl]);

  const onImageError = () => {
    setImage(img404);
  }

  return (
    <>
      {!item
        ? <div className="person-details card">
          <span>Select item from list</span>
        </div>
        : <div className="person-details card">
          <img className="person-image"
               src={image}
               alt={'item-detail'}
               onError={onImageError}
          />

          <div className="card-body">
            <h4>{item.name}</h4>
            <ul className="list-group list-group-flush">
              {Children.map(children, (child) => {
                return React.cloneElement(child, {item});
              })}
            </ul>
          </div>
        </div>
      }
    </>
  )
};

export default ItemDetails;
