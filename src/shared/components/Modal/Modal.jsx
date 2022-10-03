import { createPortal } from "react-dom"
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Overlay, ModalWindow } from "./Modal.styled"

const modalRoot = document.getElementById("modal-root");

export class Modal extends Component {

    componentDidMount() {
        document.addEventListener("keydown", this.closeModal);
    }

    componentWillUnmount() {
        document.removeEventListener("keydown", this.closeModal)
    }

    closeModal = ({target, currentTarget, code}) => {
        if (target === currentTarget || code === "Escape") {
            this.props.onClose();
        }
    }

  render() {
    const {children} = this.props
    const {closeModal} = this
    return createPortal (
        <Overlay onClick={closeModal}>
            <ModalWindow>
                {children}
            </ModalWindow>
        </Overlay>,
        modalRoot
    )
  }
}

Modal.propTypes = {
    onClose: PropTypes.func.isRequired,
    children: PropTypes.element.isRequired
}
