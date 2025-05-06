import React from 'react';

const TicketDetails = ({ ticket }) => {
  if (!ticket) return <p>Select a ticket to view details.</p>;

  return (
    <div className="ticket-details">
      <h3>{ticket.title}</h3>
      <p><strong>ID:</strong> {ticket.id}</p>
      <p><strong>Customer:</strong> {ticket.customer}</p>
      <p><strong>Email:</strong> {ticket.customerEmail}</p>
      <p><strong>Status:</strong> {ticket.status}</p>
      <p><strong>Priority:</strong> {ticket.priority}</p>
      <p><strong>Created:</strong> {new Date(ticket.createdAt).toLocaleString()}</p>
      <p><strong>Updated:</strong> {new Date(ticket.updatedAt).toLocaleString()}</p>
      <p><strong>Description:</strong> {ticket.description}</p>
      <p><strong>Category:</strong> {ticket.category}</p>
    </div>
  );
};

export default TicketDetails;
