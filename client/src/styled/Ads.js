import styled from 'styled-components'
// import {Link} from 'react-router-dom'

const GalleryContainer = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  grid-gap: 1rem;
`
const ImageCard = styled.li`
  img{
    object-fit:cover;
    width: 100%;
    height: 150px
  }
`

const CalloutContainer = styled.div`
    background-color: #81b29a;  
    padding: 1rem;
    margin-bottom: 1rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;

  button{
    border: white solid 1px;
  }
`

const AdContainer = styled.div`
  position: relative;
  display: grid;
  margin-left: auto; 
  margin-right: auto; 
`

const TextBlock = styled.div`
  position: absolute;
  bottom: 20px;
  text-align: center;
  color: white;
  font-weight: 800;
`
const Ad = styled.div`
  margin-top: 1rem;
  width: 100%;
  height: 250px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    overflow: hidden;
  }
  
`
export {AdContainer, TextBlock, Ad, GalleryContainer, ImageCard, CalloutContainer}