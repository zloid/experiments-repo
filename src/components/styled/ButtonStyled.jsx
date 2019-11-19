// import React from 'react'
// import PropTypes from 'prop-types'
import { Button } from 'react-bootstrap'
import styled from 'styled-components'

// const ButtonNotStyled = ({ className, children }) => {
//   return <Button className={className}>test b{children}</Button>
// }

const ButtonStyled = styled(Button)`
//   display: block;
  width: 100%;
   background-color: ${props => {
     switch (true) {
       case props.success:
         return '#28A745'
       case props.secondary:
         return '#6c757d'
       default:
         return
     }
   }}


&:hover {
    background-color: tomato;
    color: white;
  }
`

// ButtonNotStyled.propTypes = {
//   className: PropTypes.string.isRequired,
//   children: PropTypes.string.isRequired,
// }

export default ButtonStyled
