import styled from 'styled-components'
import {Link} from 'react-router-dom'

const SearchIcon = styled(Link)`
  color: black;
  margin-right: 2rem;
  font-size: 2rem;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`
const Logo = styled(Link)`
text-decoration: none;
cursor: pointer;
h1{
  font-size: 2rem; 
  color: black;
  font-weight: 900;
  font-family: 'Pattaya'
  
}
`
const Searchbar = styled.div`
  background-color: #81b29a;  
  width: 100vw;
  height: 80px;
  border-top: #f4f1de solid 0.5px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 80;
  top: ${({ searchbar }) => (searchbar? '80' : '-100%')};
  transition: 350ms;
  z-index: 10;
`

const SearchForm = styled.form`
  input {
    height: 4ch;
    width: 80vw;
  }
`

export  {SearchIcon, Logo, Searchbar, SearchForm}