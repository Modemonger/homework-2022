import React from 'react';
import {FaCar} from 'react-icons/fa';

const TextInput = ({search, setSearch, data}) => {
  return (
    <div className="textInput">
      <i className="icon">
        <FaCar />
      </i>
      <input
        id="auto"
        type={'text'}
        placeholder="From?"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
        onBlur={(event) => {
          event.preventDefault();
          setSearch(data[0].cityname);
        }}
        autoComplete="off"
      />
    </div>
  );
};

export default TextInput;