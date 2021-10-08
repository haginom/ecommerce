import styled from 'styled-components'
// import {Link} from 'react-router-dom'

const FiltersList = styled.section`
  background-color: #f3f1de;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1rem;
  position: fixed;
  top: 250px;
  left: ${({ filters }) => (filters? '0' : '-100%')};
  transition: 150ms;
  z-index: 5;

  section > * {
    border-: white solid 1px;
  }

  fieldset{
    margin-bottom: 1rem;
    padding: 1rem;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }

  fieldset > * {
    margin-left: 0.5rem;
    margin-right: 0.5rem;
  }


  input[type="radio"] {
    opacity: 0;
    position: fixed;
    width: 0;
  }

  .gender {
    display: inline-block;
    padding: 10px 20px;
    font-family: sans-serif, Arial;
    font-size: 16px;
    border: 2px solid #444;
    border-radius: 4px;
    cursor: pointer;
}
 
input[type="range"]{
 
}

.brandLabel{
  width: 6rem;
  cursor: pointer;
  padding: 0 1rem 0 1rem;
  border: solid black 1px;
  font-family: sans-serif, Arial;
  font-size: 16px;
  border: 1px solid #444;
  border-radius: 4px;
}

#brand{
  gap: 1rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  
}
`


export {FiltersList}