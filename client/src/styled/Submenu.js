import styled from 'styled-components'
import {Link} from 'react-router-dom'

const SidebarLink = styled(Link)`
  display: flex;
  color: black;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  list-style: none;
  height: 60px;
  text-decoration: none;
  font-size: 18px;

  &:hover {
    background: #81b29a; 
    border-left: 4px solid #f2cc8f;
    cursor: pointer;
  }
`

const SidebarLabel = styled.span`
  margin-left: 16px;
`
const DropdownLink = styled(Link)`
    background-color:#a9d9c199;
    height: 60px;
    padding-left: 3rem;
    display: flex;
    align-items: center;
    text-decoration: none;
    color: black;
    font-size: 16px;
  `

export {SidebarLabel, SidebarLink, DropdownLink}