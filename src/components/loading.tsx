import React from 'react';
import Spinner from 'react-bootstrap/Spinner';
import  styles from '../style/loading.module.css'

const Loading: React.FC = () =>{
    return(
        <>
           <div className={styles.page}>
                <div className={styles.spinner_group}>
                    <Spinner 
                        animation="border" 
                        variant='light'
                        className='loading-spinner' 
                    />
                    <div className={styles.loading_text}>Loading Movie Info...</div>
                </div>
           </div>
        </>
    )
}


export default Loading