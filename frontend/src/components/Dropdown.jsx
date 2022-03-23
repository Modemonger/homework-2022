import React from 'react';
import {FaCity, FaPlane} from 'react-icons/fa';

const Dropdown = ({data, setSearch}) => {
  return (
    <div className="dropdown">
      {data.map((item) => {
        return (
          <div
            className="dropdownItem"
            key={item.id + Math.random() * 10}
            onClick={(event) => {
              event.preventDefault();
              setSearch(item.cityname);
            }}>
            {item.displayType.type === 'airport' ? <FaPlane /> : <FaCity />}
            <div className="itemInfo">
              <p className="city">{item.cityname}</p>
              <p className="country">{item.country}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Dropdown;

