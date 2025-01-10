import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';

import { getYears } from '../../utils/getYears';

//Context:
import { useMovieContext } from '../../hooks/useMovieContext';

//styles:
import styles from  '../../style/searchBar.module.css'

const YearSearch: React.FC = () : React.ReactNode  => {

    const { year, setYear } = useMovieContext()

    const years = getYears()
    
    const changeMovieYear= (year: number) =>{
        setYear(year)
    }
    
    return (
        <Dropdown data-bs-theme="dark" className='dropdown-year' aria-setsize={10}>
            <Dropdown.Toggle 
                id={styles.dropdown_button_dark}
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