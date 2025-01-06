import React from "react"
import style from  '../../../style/button.module.css'


const ShowButton = ({ state, setState, text }) =>{
   return (
        <button 
            className={style.show_button}
            onClick={()=>{
                setState(!state)
              }}
        >
            {text}
        </button>
   )

}

export default ShowButton