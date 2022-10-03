import React from 'react'
import { ImageGalleryItem } from './ImageGalleryItem/ImageGalleryItem'
import { ImageGalleryList } from './ImageGallery.styled'

export const ImageGallery = ({images}) => {
  return (
      <ImageGalleryList>
        <ImageGalleryItem images={images}/>
      </ImageGalleryList>
    )
}
