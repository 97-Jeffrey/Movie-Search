import React from 'react';
import styles from '../../style/searchBar.module.css'

interface IdSearchInterface {
    id: string,
    setId: React.Dispatch<React.SetStateAction<string>>
}


const IdSearch: React.FC<IdSearchInterface> =({ id,  setId }) : React.ReactNode =>{
    return (
        <input
            data-testid={styles.search_input}
            type="text"
            placeholder='Search Movie Id'
            name='Search'
            onChange={e=>setId(e.target.value)}
            value={id}
        >
        
        </input>
    )
}

export default IdSearch