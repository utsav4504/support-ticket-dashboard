import React, { createContext, useContext, useState, useEffect } from 'react';
import mockData from '../data/mockTickets.json';

const TicketContext = createContext();

export const TicketProvider = ({ children }) => {
  const [tickets, setTickets] = useState([]);
  const [filter, setFilter] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    setTickets(mockData);
  }, []);

  const updateStatus = (id, status) => {
    setTickets(prev => prev.map(ticket =>
      ticket.id === id ? { ...ticket, status, updatedAt: new Date().toISOString() } : ticket
    ));
  };

  const filteredTickets = tickets.filter(ticket =>
    (!filter || ticket.status === filter) &&
    (!searchQuery ||
      ticket.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      ticket.customer.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <TicketContext.Provider value={{ tickets, updateStatus, filteredTickets, setFilter, searchQuery, setSearchQuery, darkMode, setDarkMode }}>
      {children}
    </TicketContext.Provider>
  );
};

export const useTicketContext = () => useContext(TicketContext);
