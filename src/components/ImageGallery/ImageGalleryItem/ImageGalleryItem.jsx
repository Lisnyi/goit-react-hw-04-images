import React,  { Component } from 'react'
import PropTypes from 'prop-types'
import { GalleryCard, CardImage } from './ImageGalleryItem.styled'
import { Modal } from 'shared/components/Modal/Modal'

export class ImageGalleryItem extends Component {
  state = {
    modalOpen: false,
    modalContent: {
      largeImageURL: "",
      tags: "",
     }
  }

  openModal = (modalContent) => {
    this.setState({
      modalOpen: true,
      modalContent,
    })
  }

  onClose = () => {
    this.setState({
      modalOpen: false,
      modalContent: {
        largeImageURL: "",
        tags: "",
       }})
  }

  render() {
    const { modalOpen, modalContent: {largeImageURL, tags} } = this.state
    const { images } = this.props
    const { onClose, openModal } = this 
    return (
      <>
        {images.map(({id, webformatURL, largeImageURL, tags}) => (
          < GalleryCard key={id}>
            <CardImage src={webformatURL} alt={tags} onClick={()=>openModal({largeImageURL, tags})}/>
          </ GalleryCard>
        ))}
        {modalOpen && <Modal onClose={onClose}>
                        <img src={largeImageURL} alt={tags}></img>
                      </Modal>}
      </>
    )
  }
}

ImageGalleryItem.propTypes = {
  images: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    webformatURL: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
}))
}