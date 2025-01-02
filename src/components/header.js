import React from "react";
import Dropdown from 'react-bootstrap/Dropdown';

// Context:
import { useContext } from "react";
import { MovieContext } from "../context/movieContext";

//styling:
import '../style/header.css'

const Header = () =>{

  const { searchMovieBy, setSearchMovieBy } = useContext(MovieContext)

  const toggleSearch = category => {
    setSearchMovieBy(category)
  }


  return (
    <>
      <div className="header">
        <div className='header-title'>Movie Freak</div>
        <div className='header-categories'>
        <Dropdown data-bs-theme="dark">
            <Dropdown.Toggle 
                id="dropdown-button-header" 
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