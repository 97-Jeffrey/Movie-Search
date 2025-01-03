import React from "react"
import style from  '../../../style/button.module.css'
import { Link } from "react-router-dom"


const NavigateButton  = ({ text, url }) =>{
   return (
    <Link to={url}>
        <button className={style.back_button}>
            {text}
        </button>
    </Link>
   )

}

export default NavigateButton