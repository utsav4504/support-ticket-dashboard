import React from 'react';
import { useTicketContext } from '../context/TicketContext';

const FilterBar = () => {
  const { setFilter, searchQuery, setSearchQuery } = useTicketContext();

  return (
    <div className="filter-bar">
      <input
        type="text"
        placeholder="Search tickets..."
        value={searchQuery}
        onChange={e => setSearchQuery(e.target.value)}
      />
      <select onChange={e => setFilter(e.target.value)}>
        <option value="">All</option>
        <option value="Open">Open</option>
        <option value="In Progress">In Progress</option>
        <option value="Closed">Closed</option>
      </select>
    </div>
  );
};

export default FilterBar;
