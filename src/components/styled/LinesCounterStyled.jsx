import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const LinesCounter = ({ className }) => {
  return (
    <p className={className}>
      uyuy <br /> 
        <u>000</u>
    </p>
  )
}

const LinesCounterStyled = styled(LinesCounter)`
  color: pink;
  text-align: center;
`

LinesCounter.propTypes = {}

export default LinesCounterStyled
