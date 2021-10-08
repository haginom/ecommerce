import React, {useState} from 'react'
import { SidebarLabel, SidebarLink, DropdownLink } from '../../styled/Submenu'

const SubMenu = ({item}) => {
  const [subnav, setSubnav] = useState(false)

  const showSubnav = () => {
    setSubnav(!subnav)
  }

  return (
    <>
      <SidebarLink to={item.path} onClick={item.subNav && showSubnav}>
        <div>
        
          <SidebarLabel>{item.title}</SidebarLabel>
        </div>
        <div>
          {item.subNav && subnav 
          ? item.iconOpened
          : item.subNav 
          ? item.iconClosed 
          : null}
        </div>
      </SidebarLink>
      {subnav && item.subNav.map((item, index) => {
        return (
          <DropdownLink to={item.path} key={index}>
           {item.title}
          </DropdownLink>
        )
      })}
    </>

  )
 }

 export default SubMenu