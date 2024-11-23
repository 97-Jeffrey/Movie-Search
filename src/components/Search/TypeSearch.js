import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';

import { movieTypes } from '../../constant/movie';
import { firstLetterUpper } from '../../utils/firstLetterUpper';

const TypeSearch = ({  searchCategory, setSearchCategory }) => {

    const changeMovieType= category =>{
        setSearchCategory(category)
    }
    
    return (
        <Dropdown data-bs-theme="dark">
            <Dropdown.Toggle 
                id="dropdown-button-dark" 
                >
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
    )
}


export default TypeSearch;