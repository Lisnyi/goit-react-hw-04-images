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
    const { modalOpen, modalContent } = this.state
    const { id, webformatURL, largeImageURL, tags } = this.props
    const { onClose, openModal } = this 
    return (
      <>
        < GalleryCard key={id}>
            <CardImage src={webformatURL} alt={tags} onClick={()=>openModal({largeImageURL, tags})}/>
        </ GalleryCard>
        {modalOpen && <Modal onClose={onClose}>
                        <img src={modalContent.largeImageURL} alt={modalContent.tags}></img>
                      </Modal>}
      </>
    )
  }
}

ImageGalleryItem.propTypes = {
    id: PropTypes.number.isRequired,
    webformatURL: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
}