import React from 'react';
import { TicketProvider, useTicketContext } from './context/TicketContext';
import Header from './components/Header';
import FilterBar from './components/FilterBar';
import TicketList from './components/TicketList';
import './styles/App.css';

const AppContent = () => {
  const { darkMode } = useTicketContext();
  return (
    <div className={darkMode ? 'app dark' : 'app'}>
      <Header />
      <FilterBar />
      <TicketList />
    </div>
  );
};

const App = () => (
  <TicketProvider>
    <AppContent />
  </TicketProvider>
);

export default App;