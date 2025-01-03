import React from "react";
import Dropdown from 'react-bootstrap/Dropdown';

// Context:
import { useContext } from "react";
import { MovieContext } from "../context/movieContext";

//styling:
import styles from '../style/header.module.css'
import searchStyle from '../style/searchBar.module.css'

const Header = () =>{

  const { searchMovieBy, setSearchMovieBy } = useContext(MovieContext)

  const toggleSearch = category => {
    setSearchMovieBy(category)
  }


  return (
    <>
      <div className={styles.header}>
        <div className={styles.header_title}>Movie Freak</div>
        <div className={styles.header_categories}>
        <Dropdown data-bs-theme="dark">
            <Dropdown.Toggle 
                id={searchStyle.dropdown_button_header}
                >
               Search Movie By {searchMovieBy}
            </Dropdown.Toggle>

            <Dropdown.Menu>
              
                <Dropdown.Item 
                  // key={index} 
                  onClick={()=>toggleSearch('title')}
                  active={searchMovieBy === 'title'}
                >
                  Title
                </Dropdown.Item>

                <Dropdown.Item 
                  // key={index} 
                  onClick={()=>toggleSearch('id')}
                  active={searchMovieBy === 'id'}
                >
                  {/* {firstLetterUpper(typ)} */}
                  Id
                </Dropdown.Item>
              
              

            </Dropdown.Menu>
        </Dropdown>
        </div>
      </div>
    </>
  )

}


export default Header;