import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';




import { MOVIE_TYPES } from '../../constant/movie';
import { firstLetterUpper } from '../../utils/firstLetterUpper';

//Context: 
import { useContext } from 'react';
import { MovieContext } from '../../context/movieContext';

//styles:
import styles from  '../../style/searchBar.module.css'

const TypeSearch = () => {


    const { type, setType } = useContext(MovieContext);

    const changeMovieType= type =>{
        setType(type)
    }
    
    return (
        <Dropdown data-bs-theme="dark">
            <Dropdown.Toggle 
                id={styles.dropdown_button_dark}
                >
               {firstLetterUpper(type)}
            </Dropdown.Toggle>

            <Dropdown.Menu>
              {MOVIE_TYPES.map((typ, index)=>(
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