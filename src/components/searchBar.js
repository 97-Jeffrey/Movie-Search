import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';

import { movieTypes } from '../constant/movieTypes';
import { firstLetterUpper } from '../utils/firstLetterUpper';

//styling:
import '../style/searchBar.css'


const SearchBar = ({ searchCategory, setSearchValue, setSearchCategory }) =>{

  const changeMovieType= category =>{
    setSearchCategory(category)
  }

  return (
    <>
      <div className="search">
          <input
            data-testid="search-input"
            type="text"
            placeholder='Search Movie Name'
            name='Search'
            onChange={e=>setSearchValue(e.target.value)}
          >
          </input>

          <Dropdown data-bs-theme="dark">
            <Dropdown.Toggle id="dropdown-button-dark" variant="secondary" style={{ height:"95px", width:'100px', backgroundColor:"#33314e", outline:'none', border:'none', borderRadius:'20px'}}>
               {firstLetterUpper(searchCategory)}
            </Dropdown.Toggle>

            <Dropdown.Menu>
              {movieTypes.map((type, index)=>(
                <Dropdown.Item 
                  key={index} 
                  onClick={()=>changeMovieType(type)}
                  active={type === searchCategory}
                >
                  {firstLetterUpper(type)}
                </Dropdown.Item>
              ))}
              

            </Dropdown.Menu>
          </Dropdown>
      </div>
    </>
  )
}



export default SearchBar;