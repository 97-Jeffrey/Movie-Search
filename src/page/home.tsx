import React from 'react';

// context:
import { useMovieContext } from '../hooks/useMovieContext';

// components:
import SearchByTitle from '../components/Search/searchByTitle';
import SearchById from '../components/Search/searchById';
import Header from '../components/header';


// styling:
import '../App.css';

const Home: React.FC = (): React.ReactNode  => {

  const { searchMovieBy } = useMovieContext()


  return (

    
      
      <div className="App">
        <Header />

        {
          searchMovieBy ==='title'?
          <SearchByTitle/>
            :
          <SearchById />
        }

      </div>
    
  );
}

export default Home;
