import React from 'react'

import styles from './styles.module.css'

import { DataSidebarAvatar } from "./../sidebar/DataSidebar.js";

const SidebarAvatar = () => {
  return (
    <div
      className={styles.sidebarAvatar__section}
    >
      {DataSidebarAvatar.map(({
        id, title, subtitle, avatar, instagram, linkedin,
        twitter, telegram, facebook, vkontakte, whatsapp
      }) => {
        return (
           
          <div
            className={styles.sidebarAvatar__container}
            key={id}
          >
          <picture className={styles.sidebarAvatar__wrapper__picture__avatar} >
            <img
              className={styles.sidebarAvatar__picture__avatar}
              src={avatar}
              alt="Avatar"        
            />           
          </picture>

          <div className={styles.sidebarAvatar__info__block}> 
            <h4 className={styles.sidebarAvatar__title}> {title} </h4>
            <h4 className={styles.sidebarAvatar__subtitle}> {subtitle} </h4>
            <div className={styles.sidebarAvatar__group__icon}>
              <picture className={styles.sidebarAvatar__wrapper__icon}>
                <img
                  className={styles.sidebarAvatar__icon}
                  src={instagram}
                  alt="icon"
                />        
              </picture>
              <picture className={styles.sidebarAvatar__wrapper__icon}>
                <img
                  className={styles.sidebarAvatar__icon}
                  src={linkedin}
                  alt="icon"
                />        
              </picture>
              <picture className={styles.sidebarAvatar__wrapper__icon}>
                <img              
                  className={styles.sidebarAvatar__icon}
                  src={twitter}
                  alt="icon"
                />        
              </picture>
              <picture className={styles.sidebarAvatar__wrapper__icon}>
                <img
                  className={styles.sidebarAvatar__icon}
                  src={telegram}
                  alt="icon"
                />        
              </picture>
              <picture className={styles.sidebarAvatar__wrapper__icon}>
                <img
                  className={styles.sidebarAvatar__icon}
                  src={facebook}
                  alt="icon"
                />        
              </picture>
              <picture className={styles.sidebarAvatar__wrapper__icon}>
                <img
                  className={styles.sidebarAvatar__icon}
                  src={vkontakte}
                  alt="icon"
                />        
              </picture>
              <picture className={styles.sidebarAvatar__wrapper__icon}>
                <img
                  className={styles.sidebarAvatar__icon}
                  src={whatsapp}
                  alt="icon"
                />        
              </picture>
            </div>
          </div>
        </div> 
    

        )       
       
      })}
   
  </div>
  )
}

export default SidebarAvatar