import React from 'react'
import styles from './styles.module.css'

import iconProfile from "./../../assets/images/profile.svg"
import iconMoney from "./../../assets/images/money.svg"
import iconConnections from "./../../assets/images/connections.svg"
import iconFriends from "./../../assets/images/friends.svg"
import iconScheduley from "./../../assets/images/schedule.svg"
import iconSetting from "./../../assets/images/setting.svg"

const SidebarNavigation = () => {
  return (    
    <div className={styles.sidebarNavigation__section}>
        <div className={styles.sidebarNavigation__heading}>
          <h5 className={styles.sidebarNavigation__heading__title}>
            Navigation
          </h5>
          <h5 className={styles.sidebarNavigation__heading__arrow__bottom}>
            &#9660;
          </h5>
        </div>
        <div  className={styles.sidebarNavigation__group__info}>
          <div className={styles.sidebarNavigation__wrapper__info}>
            <picture className={styles.sidebarNavigation__wrapper__icon}>
              <img
                className={styles.sidebarNavigation__icon}
                src={iconProfile}
                alt="icon"
              />
            </picture>
            <h5  className={styles.sidebarNavigation__title}  >
              My profile
            </h5>
          </div>
          <div className={styles.sidebarNavigation__wrapper__info}>
            <div className={styles.sidebarNavigation__wrapper__inner}>
              <picture className={styles.sidebarNavigation__wrapper__icon}>
                <img
                  className={styles.sidebarNavigation__icon}
                  src={iconMoney}
                  alt="icon"
                />
              </picture>
              <h5  className={styles.sidebarNavigation__title}  >
                Balance
              </h5>
            </div>
            <h5 className={styles.sidebarNavigation__price}  >
              $ 1821
            </h5>
          </div>             
          <div className={styles.sidebarNavigation__wrapper__info}>
            <div className={styles.sidebarNavigation__wrapper__inner}>
              <picture className={styles.sidebarNavigation__wrapper__icon}>
                <img
                  className={styles.sidebarNavigation__icon}
                  src={iconConnections}
                  alt="icon"
                />
              </picture>
            <h5  className={styles.sidebarNavigation__title}  >
              Connections
            </h5>
            </div>
            <h5  className={styles.sidebarNavigation__number}  >
              23
            </h5>
          </div>
           <div className={styles.sidebarNavigation__wrapper__info}>
            <div className={styles.sidebarNavigation__wrapper__inner}>
              <picture className={styles.sidebarNavigation__wrapper__icon}>
                <img
                  className={styles.sidebarNavigation__icon}
                  src={iconFriends}
                  alt="icon"
                />
              </picture>
            <h5  className={styles.sidebarNavigation__title}  >
              Friends
            </h5>
            </div>
             <h5  className={styles.sidebarNavigation__number}  >
              35
            </h5>
          </div>
          <div className={styles.sidebarNavigation__wrapper__info}>
            <div className={styles.sidebarNavigation__wrapper__inner}>
              <picture className={styles.sidebarNavigation__wrapper__icon}>
                <img
                  className={styles.sidebarNavigation__icon}
                  src={iconScheduley}
                  alt="icon"
                />
              </picture>
            <h5  className={styles.sidebarNavigation__title}  >
              Events
            </h5>
            </div>            
            <h5  className={styles.sidebarNavigation__number}  >
              23
            </h5>
          </div>
           <div className={styles.sidebarNavigation__wrapper__info}>
            <picture className={styles.sidebarNavigation__wrapper__icon}>
              <img
                className={styles.sidebarNavigation__icon}
                src={iconSetting}
                alt="icon"
              />
            </picture>
            <h5  className={styles.sidebarNavigation__title}  >
              Account setting
            </h5>
          </div>
        </div>
    </div>     
  )
}

export default SidebarNavigation