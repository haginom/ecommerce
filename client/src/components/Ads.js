import React from 'react'
import { Link } from 'react-router-dom'
import { AdContainer, TextBlock, Ad, GalleryContainer, ImageCard, CalloutContainer} from '../styled/Ads'

const Ads = ({title, imgSrc}) => {
  return (
    <AdContainer>
      <Ad>
        <img src={imgSrc} alt="adPhotoForTrainers" />
      </Ad>
      <TextBlock>
        <h1 >{title}</h1>
        <Link to="/trainers">
        < button >Shop Now</button>
        </Link>
      </TextBlock>
    </AdContainer>
  )
}

const Insta = () => {
  return (
    <>
    <h1>#sneakersaddict</h1>
    <p>We love seeing our sneakers on the streets. Share your photos with #sneakersaddict and tag @goldenshoesofficial to be featured here.</p>
    <div className="center">
    <GalleryContainer>
      <ImageCard><img src='./ad3.jpg' alt='instaPhoto'/></ImageCard>
      <ImageCard><img src='./insta1.jpg' alt='instaPhoto'/></ImageCard>
      <ImageCard><img src='./insta2.jpg' alt='instaPhoto'/></ImageCard>
      <ImageCard><img src='./insta3.jpg' alt='instaPhoto'/></ImageCard>
      <ImageCard><img src='./insta4.jpg' alt='instaPhoto'/></ImageCard>
      <ImageCard><img src='./insta5.jpg' alt='instaPhoto'/></ImageCard>
    </GalleryContainer>
    </div>
    </>
  )
}

const Callout = ({title, text, button, path}) => {
  return (
    <CalloutContainer>
      <h1>{title}</h1>
      <p>{text}</p>
      <Link to={path}>
        <button><p>{button}</p></button>
      </Link>
    </CalloutContainer>
  )
}

export {Ads, Insta, Callout} 
