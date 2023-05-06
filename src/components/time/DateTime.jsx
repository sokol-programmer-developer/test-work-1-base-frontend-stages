import React, { useState, useEffect } from 'react'

import Stopwatch from './../Stopwatch/Stopwatch'

import styles from './styles.module.css'

const DateTime = () => {
  const [date, setDate] = useState(new Date())
 
  
  useEffect(() => {
    const timer = setInterval(() => {
      setDate(new Date())
    }, 1000);

    return function cleanup() {
      clearInterval(timer)
    } 
  })

  

  
  return (
    <div className={styles.dateTime__section}>
      <p className={styles.dateTime__title}>
        Time: {date.toLocaleTimeString()}
      </p>
      <p className={styles.dateTime__title}>
        Date: {date.toLocaleDateString()}
      </p>
      <Stopwatch />
    </div>
  )
}

export default DateTime
