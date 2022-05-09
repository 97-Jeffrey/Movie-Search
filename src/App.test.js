import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import SearchBar from './components/searchBar';
import Movies from './components/movies';
import axios from 'axios';


test('Renders Header Name Properly', () => {
  render(<App />);
  const HeaderElement = screen.getByText(/MOVIE FREAK/i);
  expect(HeaderElement).toBeInTheDocument();
});


test('Test If Search Bar Component Is Rendered', ()=>{
  render(<App />);
  const searchBarElement = screen.queryByPlaceholderText(/Search Movie Name/i)
  expect(searchBarElement).toBeInTheDocument()
})


test('Test If Notify Component is Rendered', ()=>{
  render(<App />);
  const notifyElement = screen.getByText(/Please Type In Search Box Above To Search For Movies/i);
  expect(notifyElement).toBeInTheDocument()
})


test('Test SearchBar Input and its Type', ()=>{
  render (<SearchBar />);
  const inputElement = screen.getByTestId('search-input');
  expect(inputElement).toBeInTheDocument()
  expect(inputElement).toHaveAttribute("type", "text");
})

test('Test SearchBar Input value', ()=>{
  const setSearchValue = jest.fn()
  render (<SearchBar setSearchValue={setSearchValue}/>);
  const inputElement = screen.getByTestId('search-input');
  fireEvent.change(inputElement, { target:{ value:"avengers" } });
  expect(inputElement.value).toBe("avengers");
})

test('Test If A Movie can be rendered When Search Bar is Typed A Value', ()=>{
  const setSearchValue = jest.fn()
  const movie = [
    { Title: 'The Avengers', Year: '2012', imdbID: 'tt0848228', Type: 'movie' }
  ]
  render (<SearchBar setSearchValue={setSearchValue}/>);
  render (<Movies movies={movie} />)

  const inputElement = screen.getByTestId('search-input');
  fireEvent.change(inputElement, {target:{value:"avengers"}});

  const movieElement = screen.getByText(/The Avengers/i);
  expect(movieElement).toBeInTheDocument()
})
