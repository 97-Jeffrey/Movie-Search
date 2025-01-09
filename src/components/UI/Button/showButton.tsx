import React from "react"
import style from  '../../../style/button.module.css'


interface ShowButtonInterface {
  state: boolean,
  text: string,
  setState: React.Dispatch<React.SetStateAction<boolean>>
}

const ShowButton: React.FC<ShowButtonInterface> = ({ state, setState, text }) =>{
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