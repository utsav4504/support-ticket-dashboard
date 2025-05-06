import React from 'react';
import { useTicketContext } from '../context/TicketContext';

const TicketCard = ({ ticket }) => {
  const { updateStatus } = useTicketContext();

  return (
    <div className="ticket-card">
      <h4>{ticket.title}</h4>
      <p>{ticket.customer}</p>
      <p>Status: {ticket.status}</p>
      <select value={ticket.status} onChange={e => updateStatus(ticket.id, e.target.value)}>
        <option value="Open">Open</option>
        <option value="In Progress">In Progress</option>
        <option value="Closed">Closed</option>
      </select>
    </div>
  );
};

export default TicketCard;
