import styled from 'styled-components'

const ImageWrapper = styled.div`

  height: 50vh;
  background: white;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 2rem;
  margin-bottom: 2rem;

  img{
    object-fit: cover;
    width: 100%;
  }
`

const ProductInfo = styled.div`
  padding-left: 2rem;
  padding-right: 2rem;
  margin-bottom: 1rem;

  div:first-child{
    float: right;
  }

  div:not(:first-child) {
    clear: both;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}

`

const Choices = styled.div`
  margin-top: 1rem;
  padding-left: 2rem;
  padding-right: 2rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 2rem;

  label{
    font-weight: 600;
  }

  button{
    width: 100%;
    background: var(--green);
    border: none;
    padding: 10px 0;
    font-size: 1rem;
    color: black;
    font-weight: 900;
    font-family: 'Rajdhani', sans-serif;
    text-transform: uppercase;
    line-height: 20px;
    text-align: center;
    cursor: pointer;
  }

  div{
    display: flex;
    gap: 1rem;
    margin-bottom: 1rem;
  }

  div span{
    color: hotpink;
    border: 1px solid hotpink;
    padding: 0.2rem;
  }
`

export { ImageWrapper, ProductInfo, Choices }