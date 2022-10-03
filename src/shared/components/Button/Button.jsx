import React from 'react'
import PropTypes from 'prop-types'
import { StyledButton } from './Button.styled'

export const Button = ({type, onClick, children}) => {
  return (
    <StyledButton type={type} onClick={onClick}>{children}</StyledButton>
  )
}

Button.defaultProps = {
  type: "button",
}

Button.propTypes = {
  type: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired
}
