import React, {useState} from 'react'
import { Nav, SidebarNav, SidebarWrap, NavIcon} from '../styled/Nav'
import {SearchIcon, Logo, Searchbar} from '../styled/Search'
import SidebarData from './sidebar/SidebarData'
import SubMenu from './sidebar/SubMenu'
import Search from './sidebar/Search'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import { IconContext } from 'react-icons/lib'

const iconStyle = { color: 'black', height: '80px', marginLeft: '2rem',
fontSize: '2rem', display: 'flex', justifyContent: 'flex-start', alignItems: 'center'}

const Header = () => {
  const [sidebar, setSidebar] = useState(false)
  const [searchbar, setSearchbar] = useState(false)
  const [search, setSearch] = useState("")
  const showSidebar = () => setSidebar(!sidebar)
  const showSearchbar = () => setSearchbar(!searchbar)
  return (
    <>
    <IconContext.Provider value={{color:'white'}}/>
      <Nav>
        <NavIcon to="/">
          <FaIcons.FaBars aria-label="Open menu" onClick={showSidebar}/>
        </NavIcon>
      <Logo to="/">
        <h1>Golden Shoes</h1>
      </Logo>
      <SearchIcon to="#">
          <FaIcons.FaSearch aria-label="Search for product" aria-hidden="true" onClick={showSearchbar}/>
        </SearchIcon>
      </Nav>
      <Searchbar searchbar={searchbar}>
        <Search search={search} setSearch={setSearch}/>
      </Searchbar>
       <SidebarNav sidebar={sidebar}>
         <SidebarWrap>
          <AiIcons.AiOutlineClose style={iconStyle} onClick={showSidebar}/>
          {SidebarData.map((item, index) => {
            return <SubMenu item={item} key={index} />
          })}
         </SidebarWrap>
     </SidebarNav>
    </>

  )
}

export default Header