import { createPortal } from "react-dom"
import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { Overlay, ModalWindow } from "./Modal.styled"

const modalRoot = document.getElementById("modal-root");

export const Modal = ({onClose, children}) => {

    useEffect(() => {
        document.addEventListener("keydown", closeModal)
        return () => {
            document.removeEventListener("keydown", closeModal)
        }
    }, [])

    function closeModal ({target, currentTarget, code}) {
        if (target === currentTarget || code === "Escape") {
            onClose();
        }
    }

    return createPortal (
            <Overlay onClick={closeModal}>
                <ModalWindow>
                    {children}
                </ModalWindow>
            </Overlay>,
            modalRoot
        )
}

Modal.propTypes = {
    onClose: PropTypes.func.isRequired,
    children: PropTypes.element.isRequired
}