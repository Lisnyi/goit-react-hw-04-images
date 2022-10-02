import React from 'react'
import { ImageGalleryItem } from './ImageGalleryItem/ImageGalleryItem'

export const ImageGallery = ({images}) => {
  return (
    <ul>
        <ImageGalleryItem images={images}/>
    </ul>
  )
}
