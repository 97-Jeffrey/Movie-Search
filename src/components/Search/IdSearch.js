import React from 'react';
import styles from '../../style/searchBar.module.css'

const IdSearch =({ id,  setId })=>{
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