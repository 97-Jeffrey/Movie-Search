
import Spinner from 'react-bootstrap/Spinner';
import '../style/loading.css'

const Loading = () =>{
    return(
        <>
           <div className='page'>
                <div className='spinner-group'>
                    <Spinner animation="border" variant='light'className='loading-spinner' />
                    <div className='loading-text'>Loading Movie Info...</div>
                </div>
           </div>
        </>
    )
}


export default Loading