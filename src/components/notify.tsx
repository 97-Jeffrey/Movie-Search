import React from "react";

//styling:
import styles from  '../style/notify.module.css'

interface NotidyInterface {
   text: string
}

const Notify: React.FC<NotidyInterface> = ({ text }) =>{

  return (
    <>
      <div className={styles.empty_search_word}>
        {text}
      </div>
    </>
  )

}


export default Notify;