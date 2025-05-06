import { render, screen, fireEvent } from '@testing-library/react';
import App from '../App';

test('renders dashboard header', () => {
  render(<App />);
  const header = screen.getByText(/Support Ticket Dashboard/i);
  expect(header).toBeInTheDocument();
});

test('search filters tickets', () => {
  render(<App />);
  const input = screen.getByPlaceholderText(/search tickets/i);
  fireEvent.change(input, { target: { value: 'Safari' } });
  const result = screen.getByText(/Login failure on Safari/i);
  expect(result).toBeInTheDocument();
});

test('status change updates ticket', () => {
  render(<App />);
  const dropdown = screen.getAllByDisplayValue('Open')[0];
  fireEvent.change(dropdown, { target: { value: 'Closed' } });
  expect(dropdown.value).toBe('Closed');
});
