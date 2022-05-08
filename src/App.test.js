import { getByText, render, screen } from '@testing-library/react';
import App from './App';
import SearchBar from './components/searchBar';

test('Renders Header Name Properly', () => {
  render(<App />);
  const HeaderElement = screen.getByText(/MOVIE FREAK/i);
  expect(HeaderElement).toBeInTheDocument();
});


test('Test Search Bar Component', ()=>{
  render(<App />);
  const searchBarElement = screen.queryByPlaceholderText(/Search Movie Name/i)
  expect(searchBarElement).toBeInTheDocument()
})


test('Test Notify Component', ()=>{
  render(<App />);
  const notifyElement = screen.getByText(/Please Type In Search Box Above To Search For Movies/i);
  expect(notifyElement).toBeInTheDocument()
})
