import React from 'react'
import PropTypes from 'prop-types'

import { Button } from 'react-bootstrap'

import ButtonStyled from './styled/ButtonStyled'

const ButtonsBlock = props => {
  return (
    <>
      <ButtonStyled variant="primary">styld b</ButtonStyled>
      {/* <ButtonStyled secondary>styld b</ButtonStyled> */}
      <Button variant="secondary" size="lg" block>
        {'<'} demo
      </Button>
      <Button variant="success">Get Result</Button>
      <Button variant="secondary">Delete</Button>
      <Button>1111111111</Button>
    </>
  )
}

ButtonsBlock.propTypes = {}

export default ButtonsBlock
