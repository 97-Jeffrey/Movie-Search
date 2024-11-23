import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';

import { getYears } from '../../utils/getYears';

const YearSearch = ({  searchYear, setSearchYear }) => {

    const years = getYears()
    const changeMovieYear= year =>{
        setSearchYear(year)
    }
    
    return (
        <Dropdown data-bs-theme="dark" className='dropdown-year' aria-setsize={10}>
            <Dropdown.Toggle 
                id="dropdown-button-dark" 
                >
               {searchYear}
            </Dropdown.Toggle>

            <Dropdown.Menu className='dropdown-year-options'>
              {years.map((year, index)=>(
                <Dropdown.Item 
                  key={index} 
                  onClick={()=>changeMovieYear(year)}
                  active={year === searchYear}
                >
                  {year}
                </Dropdown.Item>
              ))}
              

            </Dropdown.Menu>
          </Dropdown>
    )
}


export default YearSearch;