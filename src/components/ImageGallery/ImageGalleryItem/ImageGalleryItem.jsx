import React from 'react'

export const ImageGalleryItem = ({images}) => {
  return (
    images.map(({id, webformatURL, largeImageURL, tags}) => (
      <li key={id}>
        <img src={webformatURL} alt={tags} />
      </li>
    ))
  )
}
