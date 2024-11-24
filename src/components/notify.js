import React from "react";

//styling:
import '../style/notify.css'

const Notify = ({ text}) =>{

  return (
    <>
      <div className="empty-search-word">
        {text}
      </div>
    </>
  )

}


export default Notify;