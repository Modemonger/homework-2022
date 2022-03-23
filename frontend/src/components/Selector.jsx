import React from 'react';

const Selector = ({setDropoffselect}) => {
  return (
    <div className="selector">
      <select
        name="select"
        className="selectbox"
        onChange={(e) => setDropoffselect(e.target.value)}>
        <option value={0}>Same drop-off</option>
        <option value={1}>Different drop-off</option>
      </select>
    </div>
  );
};

export default Selector;