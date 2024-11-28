import React from 'react';

import TitleSearch from './TitleSearch';
import TypeSearch from './TypeSearch';
import YearSearch from './YearSearch';


//styling:
import '../../style/searchBar.css'



const SearchByTitle = ({ 
  type, 
  year,
  setTitle, 
  setType,
  setYear
}) =>{

  return (
    <>
      <div className="search">
          <TitleSearch 
            setTitle={setTitle}
          />
          <TypeSearch 
            type={type}
            setType={setType}
          />
          <YearSearch
             year={year}
             setYear={setYear}
          />
      </div>
    </>
  )
}



export default SearchByTitle;