import React from 'react'
import { ThreeDots } from  'react-loader-spinner'
import { ImageGalleryItem } from './ImageGalleryItem/ImageGalleryItem'
import { Button } from 'shared/components/Button/Button'
import { ImageGalleryList } from './ImageGallery.styled'

export const ImageGallery = ({images, status, handleClick, loadMore}) => {

  if (status === 'idle') {
    return
  }

  if (status === 'pending') {
    return <ThreeDots 
    height="80" 
    width="80" 
    radius="9"
    color="#9b2a4c" 
    ariaLabel="three-dots-loading"
    wrapperStyle={{}}
    wrapperClassName=""
    visible={true}
     />
  }

  if (status === 'rejected') {
    return <h2>We did not find any images for your request</h2>
  }

  if (status === 'resolved') {
  return (
    <>
      <ImageGalleryList>
        <ImageGalleryItem images={images}/>
      </ImageGalleryList>
      {loadMore && <Button type={'button'} onClick={handleClick}>Load more</Button>}
    </>
    )
  }
}
