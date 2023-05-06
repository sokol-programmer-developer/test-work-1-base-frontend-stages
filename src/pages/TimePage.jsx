import React from 'react'

import DateTime from './../components/time/DateTime'

import styles from './styles.module.css'

const Time = () => {
  return (
    <div className={styles.time__section}>
      <h5 className={styles.time__title} >Real current Date</h5>
      <p className={styles.time__paragraph}>
        Реализовать страницу "Таймер". <br/>
        Таймер показывает сколько времени посетитель находится на сайте.<br/>
        Таймер не сбрасывается при переходе между страницами, <br/>
        но сбрасывается когда вкладка закрывается и открывается заново. <br/>
      </p>
      <DateTime />
    </div>
  )
}

export default Time