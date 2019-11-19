import React from 'react'
import styled from 'styled-components'

const LinesCounter = ({ className }) => {
  return (
    <p className={className}>
      i styled <br /> 
        <u>000</u>
    </p>
  )
}

const LinesCounterStyled = styled(LinesCounter)`
  // color: pink;
  text-align: center;
`
 

export default LinesCounterStyled
