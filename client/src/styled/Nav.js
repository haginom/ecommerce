import styled from 'styled-components'
import {Link} from 'react-router-dom'

const Nav = styled.div`
  background-color: #81b29a;  
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const NavIcon = styled(Link)`
  color: black;
  margin-left: 2rem;
  font-size: 2rem;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`
const SidebarNav = styled.nav`
  background-color: #81b29a;  
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: ${({ sidebar }) => (sidebar? '0' : '-100%')};
  transition: 350ms;
  z-index: 10;

  nav > * {
    border-: white solid 1px;
  }
`
const SidebarWrap = styled.nav`
 width: 100%
`


export  {Nav, NavIcon, SidebarNav, SidebarWrap}