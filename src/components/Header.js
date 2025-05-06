import React from 'react';
import { useTicketContext } from '../context/TicketContext';

const Header = () => {
  const { darkMode, setDarkMode } = useTicketContext();

  return (
    <header className="header">
      <h1>Support Ticket Dashboard</h1>
      <button onClick={() => setDarkMode(prev => !prev)}>
        {darkMode ? '🌞 Light Mode' : '🌙 Dark Mode'}
      </button>
    </header>
  );
};

export default Header;