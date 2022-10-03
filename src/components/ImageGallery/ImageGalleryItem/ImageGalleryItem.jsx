import React from 'react'
import { GalleryCard, CardImage } from './ImageGalleryItem.styled'

export const ImageGalleryItem = ({images}) => {
    return (
      images.map(({id, webformatURL, largeImageURL, tags}) => (
        < GalleryCard key={id}>
          <CardImage src={webformatURL} alt={tags} />
        </ GalleryCard>
      ))
    )
}
