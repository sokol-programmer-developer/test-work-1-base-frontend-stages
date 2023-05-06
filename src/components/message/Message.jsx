import React from 'react'

import styles from './styles.module.css'

import {DataMessage} from "./DataMessage";

const Message = () => {
  return (


    <div className={styles.message__section}>
    
      {DataMessage.map(({
        id, headerTitle, headerInfo, iconSuccess, picture,
        iconComments, headingTitle, headingSubtitle,
        messageQuote, authorQuote, timeQuote, viewingIcon,
        viewingNumber, commentNumber, arrowRight
      }) => {
        return (
          <div
            className={styles.article__section}
            key={id}
          >

            <div className={styles.article__header}>
              <h5 className={styles.article__header__title} >
                {headerTitle}
              </h5>
              <div className={styles.article__header__inner} >
                <picture
                  className={styles.article__header__wrapper__picture}
                >
                  <img
                    className={styles.article__header__picture}
                    src={iconSuccess}
                    alt="icon-success"
                  />
                </picture>
                <h5 className={styles.article__header__info} >
                  {headerInfo} 
                </h5>
                <h5 className={styles.article__header__arrow__bottom } >
                  &#9660;
                </h5>
              </div>
            </div>

            <picture className={styles.article__content__wrapper__picture}>
              <img
                className={styles.article__content__picture}
                src={picture}
                alt="contentPicture"
              />
            </picture>

            <div className={styles.article__message__content}>
              <div className={styles.article__message__heading__block}>
                <picture className={styles.article__message__heading__wrapper__icon}>
                  <img
                    className={styles.article__message__heading__icon}
                    src={iconComments}
                    alt="icon-comments"
                  />
                </picture>
                <h5  className={styles.article__message__heading__title}>
                  {headingTitle}
                </h5>
                <h5 className={styles.article__message__heading__subtitle}>
                  {headingSubtitle}
                </h5>
              </div>

              <div className={styles.article__message__wrapper__quote}>
                <h5 className={styles.article__message__quote} >
                  {messageQuote}
                </h5>
                <div className={styles.article__message__info__quote}>
                  <h5 className={styles.article__message__author__quote}>
                    -{authorQuote},
                  </h5>
                  <h5 className={styles.article__message__time__quote} >
                    {timeQuote}
                  </h5>
                </div>            
              </div>

              <div
                className={styles.article__message__bottom}
              >
                <div className={styles.article__message__groups__icons} >
                  <div
                    className={styles.article__message__viewing__block}
                  >
                    <picture
                      className={styles.article__message__viewing__wrapper__icon}
                    >
                      <img
                        className={styles.article__message__viewing__icon}
                        src={viewingIcon}
                        alt="viewing-icon" />
                    </picture>
                    <h5 className={styles.article__message__viewing__number}>
                      {viewingNumber}
                    </h5>
                  </div>

                  <div className={styles.article__message__comment__block}>
                    <picture
                      className={styles.article__message__comment__wrapper__icon}
                    >
                      <img
                        className={styles.article__message__comment__icon}
                        src={iconComments}
                        alt="icon-comments"
                      />
                    </picture>
                    <h5
                      className={styles.article__message__comment__number}
                    >
                      {commentNumber}
                    </h5>
                  </div>
                </div>

                <div  className={styles.article__message__wrapper__post}  >
                  <h5
                    className={styles.article__message__post__title}
                  >
                    Read post
                  </h5>              
                  <picture
                  className={styles.article__message__post__wrapper__icon}
                  >
                    <img
                      className={styles.article__message__post__icon}
                      src={arrowRight}
                      alt="arrow-right"
                    />
                  </picture>
                </div>
            
              </div>          

            </div> 
          </div>                             
          )
        })}
      
      
    </div>
  )
}

export default Message