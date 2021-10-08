import styled from 'styled-components'

const ShoeGrid = styled.ul`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fill, minmax(14rem, 1fr));  
  align-content: center;
  justify-content: center;
`

const ShoeItem = styled.li`
    margin: 0 1rem 0 1rem;
    display: grid;
    grid-gap: 0.25rem;
    border: 0.1rem solid black;
    padding: 1rem;
    background-color: #fff;
    justify-content: center;

    img {
      justify-self: center;
      width: 10rem;
      object-fit: cover;
      
    }
`

export {ShoeGrid, ShoeItem}