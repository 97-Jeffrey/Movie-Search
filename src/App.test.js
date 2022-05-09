import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import SearchBar from './components/searchBar';
import Movies from './components/movies';


test('Test If Header Name Is Rendered Properly', () => {
  render(<App />);
  const HeaderElement = screen.getByText(/MOVIE FREAK/i);
  expect(HeaderElement).toBeInTheDocument();
});


test('Test If Search Bar Component Is Rendered', ()=>{
  render(<App />);
  const searchBarElement = screen.queryByPlaceholderText(/Search Movie Name/i)
  expect(searchBarElement).toBeInTheDocument()
})


test('Test If Notify Component Is Rendered', ()=>{
  render(<App />);
  const notifyElement = screen.getByText(/Please Type In Search Box Above To Search For Movies/i);
  expect(notifyElement).toBeInTheDocument()
})


test('Test SearchBar Input And Its Type', ()=>{
  render (<SearchBar />);
  const inputElement = screen.getByTestId('search-input');
  expect(inputElement).toBeInTheDocument()
  expect(inputElement).toHaveAttribute("type", "text");
})

test('Test SearchBar Input Value', ()=>{
  const setSearchValue = jest.fn()
  render (<SearchBar setSearchValue={setSearchValue}/>);
  const inputElement = screen.getByTestId('search-input');
  fireEvent.change(inputElement, { target:{ value:"avengers" } });
  expect(inputElement.value).toBe("avengers");
})

test('Test If A Movie Can Be Rendered When Search Bar Is Typed A Value', ()=>{
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
