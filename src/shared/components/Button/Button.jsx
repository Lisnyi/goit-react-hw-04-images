import React from 'react'
import { StyledButton } from './Button.styled'

export const Button = ({type, onClick, children}) => {
  return (
    <StyledButton type={type} onClick={onClick}>{children}</StyledButton>
  )
}
