import React from 'react';
import { useTicketContext } from '../context/TicketContext';
import TicketCard from './TicketCard';

const TicketList = () => {
  const { filteredTickets } = useTicketContext();

  return (
    <div className="ticket-list">
      {filteredTickets.map(ticket => (
        <TicketCard key={ticket.id} ticket={ticket} />
      ))}
    </div>
  );
};

export default TicketList;