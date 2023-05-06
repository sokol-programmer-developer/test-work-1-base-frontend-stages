import React,{useState} from 'react'
import { NavLink } from "react-router-dom";

import styles from './styles.module.css'

import { DataNavbarTop } from "./DataNavbar";
import { DataNavbarMiddleLeft } from "./DataNavbar";
import { DataNavbarMiddleRight } from "./DataNavbar";
import { DataNavbarMobile } from "./DataNavbar";


import left from "./../../assets/images/left.svg"
import activity from "./../../assets/images/activity.svg"
import close from "./../../assets/images/close.svg"




const Navigation = () => {

  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar)
  const closeMobileMenu = () => setSidebar(false);
  
  return (
     
    <div  className={styles.navigation__section}>
      <header className={styles.header__section}>
        <article className={styles.article__header__top}>
          <NavLink
            className={styles.btn__link}
            to='/'
          > 
            <button
              className={styles.btn__link}
              onClick={closeMobileMenu}
            >
              Главная
            </button>
          </NavLink>          
        </article>

        
        <article className={styles.article__header__middle}>
          <NavLink to='/' >                     
            <button
              className={styles.btn__light__logo}
              onClick={closeMobileMenu}
            >
              <picture className={styles.icon__header__wrapper__logo}>
                <img
                  className={styles.icon__header__link__logo}
                  src={left}
                  alt="logo svg"
                />
              </picture>
              <h5 className={styles.btn__light__title__logo}> User Pages-Profile </h5>
            </button>
          </NavLink>
          

          <nav className={styles.nav__header__middle}> 
            <ul className={styles.nav__header__group__item}> 
              {DataNavbarTop.map(({id, path, icon, title}) => {
                return (
                  <li key={id} className={styles.nav__header__link}>
                    <NavLink to={path} >    
                      <button className={styles.btn__light}>
                        <picture className={styles.icon__header__wrapper}>
                          <img
                            className={styles.icon__header__pic}
                            src={icon} 
                            alt="logo-svg"
                          />
                        </picture>
                       <h5 className={styles.btn__light__title}> {title} </h5>
                      </button>
                    </NavLink>
                  </li>
                )
              })}             
            </ul>            
          </nav>       
        </article>
        

     
        <article className={styles.article__header__bottom}>      
          <nav className={styles.nav__header__bottom}> 
            <ul className={styles.nav__header__group__item__two}> 
              {DataNavbarMiddleLeft.map(({id, path, icon, title}) => {
                return (
                  <li key={id} className={styles.nav__header__link}>
                    <NavLink to={path} >    
                      <button className={styles.btn__light}>
                        <picture className={styles.icon__header__wrapper}>
                          <img
                            className={styles.icon__header__pic}
                            src={icon} 
                            alt="logo-svg"
                          />
                        </picture>
                        <h5 className={styles.btn__light__title}> {title} </h5>
                      </button>
                    </NavLink>
                  </li>
                )
              })}                 
            </ul> 
            
            <ul className={styles.nav__header__group__item__three}> 
               {DataNavbarMiddleRight.map(({id, path, icon, title}) => {
                return (
                  <li key={id} className={styles.nav__header__link}>
                    <NavLink to={path} >    
                      <button className={styles.btn__light}>
                        <picture className={styles.icon__header__wrapper}>
                          <img
                            className={styles.icon__header__pic}
                            src={icon} 
                            alt="logo-svg"
                          />
                        </picture>
                        <h5 className={styles.btn__light__title}> {title} </h5>
                      </button>
                    </NavLink>
                  </li>
                )
              })}   
            </ul>       
          </nav> 
        </article>

        

        <article className={styles.article__mobile__header}>             
          <div className={styles.navbar__mobile__states}>
            <NavLink
              to="#"              
            >
              <img
                className={styles.navbar__mobile__icon__open}
                onClick={showSidebar}
                src={activity}
                alt="icon-close"
              />             
            </NavLink>
              <nav className={sidebar ? `${styles.nav__menu__active}` : `${styles.nav__menu}` }>
              <div className={styles.nav__menu__items}>
                <div className={styles.navbar__toggle}>
                  <NavLink
                    to="#"
                    className={styles.menu__bars__close}
                  >
                    <img
                      className={styles.navbar__mobile__icon__close}
                      onClick={showSidebar}
                      src={close}
                      alt="icon"
                    /> 
                    </NavLink>
                </div>
                <div className={styles.navbar__mobile__container__button} >
                  {DataNavbarMobile.map(({id,  path,  title}) => {
                    return (
                      <div key={id} className={styles.navbar__mobile__group__link} >
                        <NavLink to={path} className={styles.navbar__mobile__link} onClick={closeMobileMenu}>
                          <div className={styles.navbar__mobile__group__button}>
                            <button className={styles.navbar__mobile__button} >
                              <h5 className={styles.navbar__mobile__button__text}>
                                {title}
                              </h5>
                            </button>
                          </div>
                        </NavLink>
                      </div>
                    )
                  })}
                </div>
                   
                </div>
              </nav>
          </div>                  
        </article>
    </header>

  </div>
)
}

export default Navigation