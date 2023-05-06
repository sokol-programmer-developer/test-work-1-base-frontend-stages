import React from 'react'

import SidebarAvatar from './../sidebarAvatar/SidebarAvatar'
import SidebarNavigation from './../sidebarNavigation/SidebarNavigation'

import styles from './styles.module.css'

const Sidebar = () => {
  return (   
      <div className={styles.sidebar__section}>
        <SidebarAvatar />
        <SidebarNavigation />
      </div>  
  )
}

export default Sidebar