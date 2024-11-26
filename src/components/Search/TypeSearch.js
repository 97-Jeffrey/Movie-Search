import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';

import { movieTypes } from '../../constant/movie';
import { firstLetterUpper } from '../../utils/firstLetterUpper';

const TypeSearch = ({  type, setType }) => {

    const changeMovieType= type =>{
        setType(type)
    }
    
    return (
        <Dropdown data-bs-theme="dark">
            <Dropdown.Toggle 
                id="dropdown-button-dark" 
                >
               {firstLetterUpper(type)}
            </Dropdown.Toggle>

            <Dropdown.Menu>
              {movieTypes.map((typ, index)=>(
                <Dropdown.Item 
                  key={index} 
                  onClick={()=>changeMovieType(typ)}
                  active={typ === type}
                >
                  {firstLetterUpper(typ)}
                </Dropdown.Item>
              ))}
              

            </Dropdown.Menu>
          </Dropdown>
    )
}


export default TypeSearch;