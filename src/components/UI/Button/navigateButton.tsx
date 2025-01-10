import React from "react"
import style from  '../../../style/button.module.css'
import { Link } from "react-router-dom"

interface NavigateButtonInterface {
   text: string,
   url: string
}


const NavigateButton: React.FC<NavigateButtonInterface>  = ({ text, url }) : React.ReactNode  =>{
   return (
    <Link to={url}>
        <button className={style.back_button}>
            {text}
        </button>
    </Link>
   )

}

export default NavigateButton