import React from "react";

//styling:
import styles from  '../style/notify.module.css'

const Notify = ({ text}) =>{

  return (
    <>
      <div className={styles.empty_search_word}>
        {text}
      </div>
    </>
  )

}


export default Notify;