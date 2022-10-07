import React,  { useState } from 'react'
import PropTypes from 'prop-types'
import { GalleryCard, CardImage } from './ImageGalleryItem.styled'
import { Modal } from 'shared/components/Modal/Modal'


const initialModalContent = {
  largeImageURL: "",
  tags: "",
}

export const ImageGalleryItem = ({webformatURL, largeImageURL, tags}) => {
  const [modalOpen, setModalOpen] = useState(false)
  const [modalContent, setModalContent] = useState(initialModalContent)

function openModal (modalContent) {
  setModalOpen(true)
  setModalContent(modalContent)
}

function onClose () {
  setModalOpen(false)
  setModalContent(initialModalContent)
}

  return (
    <>
      <GalleryCard>
          <CardImage src={webformatURL} alt={tags} onClick={()=>openModal({largeImageURL, tags})}/>
      </GalleryCard>
      {modalOpen && <Modal onClose={onClose}>
                      <img src={modalContent.largeImageURL} alt={modalContent.tags}></img>
                    </Modal>}
    </>
  )
}


ImageGalleryItem.propTypes = {
    webformatURL: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
}