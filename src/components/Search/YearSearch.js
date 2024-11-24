import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';

import { getYears } from '../../utils/getYears';

const YearSearch = ({ year, setYear }) => {

    const years = getYears()
    const changeMovieYear= year =>{
        setYear(year)
    }
    
    return (
        <Dropdown data-bs-theme="dark" className='dropdown-year' aria-setsize={10}>
            <Dropdown.Toggle 
                id="dropdown-button-dark" 
                >
               {year}
            </Dropdown.Toggle>

            <Dropdown.Menu className='dropdown-year-options'>
              {years.map((eachYear, index)=>(
                <Dropdown.Item 
                  key={index} 
                  onClick={()=>changeMovieYear(eachYear)}
                  active={eachYear === year}
                >
                  {eachYear}
                </Dropdown.Item>
              ))}
              

            </Dropdown.Menu>
          </Dropdown>
    )
}


export default YearSearch;