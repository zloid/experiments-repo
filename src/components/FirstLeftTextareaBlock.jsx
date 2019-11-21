import React from 'react'
import LinesCounterStyled from './LinesCounterStyled'
import TextAreaStyled from './TextAreaStyled'

const FirstLeftTextareaBlock = ({dataForTextareaOne}) => {
  return (
    <>
      <LinesCounterStyled />
  {dataForTextareaOne.map((number, key) => <p key={key}>{number}</p>)}
      <TextAreaStyled />
    </>
  )
}

export default FirstLeftTextareaBlock
