import React from 'react'
import PropTypes from 'prop-types'
import { ImageGalleryItem } from './ImageGalleryItem/ImageGalleryItem'
import { ImageGalleryList } from './ImageGallery.styled'

export const ImageGallery = ({images}) => {
  return (
      <ImageGalleryList>
        {images.map(({id, webformatURL, largeImageURL, tags}) => <ImageGalleryItem
                                                                    id={id}
                                                                    webformatURL={webformatURL}
                                                                    largeImageURL={largeImageURL}
                                                                    tags={tags}/>)}
      </ImageGalleryList>
    )
}

ImageGalleryItem.propTypes = {
  images: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    webformatURL: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
}))
}
