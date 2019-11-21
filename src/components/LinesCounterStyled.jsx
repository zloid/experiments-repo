import React from 'react'
import styled from 'styled-components'

const LinesCounter = ({ className }) => {
  return (
    <div className={className}>
      <p>
        i styled <br />
        <u>
          <strong>{Math.floor(Math.random() * 1000)}</strong>
        </u>
      </p>
    </div>
  )
}

const LinesCounterStyled = styled(LinesCounter)`
  // color: pink;
  text-align: center;
`

export default LinesCounterStyled
