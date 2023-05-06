import React from 'react'
import Message from './../message/Message'
import Sidebar from './../sidebar/Sidebar'

import styles from './styles.module.css'

const Main = () => {
  return (
    <div className={styles.main__section}>
      <Message />    
      <Sidebar />
    </div>
  )
}

export default Main